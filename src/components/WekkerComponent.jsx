import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Moon,
  Sun,
  X,
  Check,
  Bell,
  RotateCcw,
  Lightbulb,
  ChevronRight,
  Home,
  TrendingUp,
  User,
} from "lucide-react";
import "./WekkerComponent.css";

const BED_TIME = "22:00";

const VIEW = 300;
const SVG_SIZE = 215;
const SVG_OFFSET = 20;
const SCALE = SVG_SIZE / VIEW;

const CX = 150;
const CY = 150;
const R = 105;
const DOT_R = 115;

function timeToMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function getSleepDuration(start, end) {
  const startMin = timeToMinutes(start);
  let endMin = timeToMinutes(end);

  if (endMin <= startMin) endMin += 24 * 60;

  const diff = endMin - startMin;

  return {
    hours: Math.floor(diff / 60),
    minutes: diff % 60,
  };
}

function timeToAngle(time) {
  const minutes = timeToMinutes(time);
  return (minutes / 1440) * 360 - 90;
}

function polarToCartesian(cx, cy, r, angle) {
  const rad = (angle * Math.PI) / 180;

  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

function describeArc(cx, cy, r, startAngle, endAngle) {
  let adjustedEnd = endAngle;

  if (adjustedEnd < startAngle) adjustedEnd += 360;

  const start = polarToCartesian(cx, cy, r, startAngle);
  const end = polarToCartesian(cx, cy, r, adjustedEnd);
  const largeArcFlag = adjustedEnd - startAngle <= 180 ? "0" : "1";

  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`;
}

function clampWheelValue(value, count) {
  return (value + count) % count;
}

function getWheelOptions(selected, count) {
  const offsets = [-2, -1, 0, 1, 2];
  return offsets.map((offset) => clampWheelValue(selected + offset, count));
}

function SleepClock({ wakeTime }) {
  const sleep = getSleepDuration(BED_TIME, wakeTime);

  const startAngle = timeToAngle(BED_TIME);
  const endAngle = timeToAngle(wakeTime);

  const moonPos = polarToCartesian(CX, CY, DOT_R, startAngle);
  const sunPos = polarToCartesian(CX, CY, DOT_R, endAngle);

  return (
    <div className="sleep-clock">
      <span className="clock-label top">0</span>
      <span className="clock-label right">6</span>
      <span className="clock-label bottom">12</span>
      <span className="clock-label left">18</span>

      <svg className="sleep-svg" viewBox="0 0 300 300">
        <circle cx={CX} cy={CY} r={R} className="sleep-track" />
        <path
          d={describeArc(CX, CY, R, startAngle, endAngle)}
          className="sleep-progress"
        />
      </svg>

      <div
        className="clock-dot"
        style={{
          left: `${SVG_OFFSET + moonPos.x * SCALE - 8}px`,
          top: `${SVG_OFFSET + moonPos.y * SCALE - 1}px`,
        }}
      >
        <Moon size={18} fill="#efc243" strokeWidth={0} />
      </div>

      <div
        className="clock-dot"
        style={{
          left: `${SVG_OFFSET + sunPos.x * SCALE}px`,
          top: `${SVG_OFFSET + sunPos.y * SCALE}px`,
        }}
      >
        <Sun size={19} strokeWidth={3} />
      </div>

      <div className="clock-middle">
        <p>TOTALE SLAAP</p>

        <h1>
          {String(sleep.hours).padStart(2, "0")}
          <span>u</span>
          {String(sleep.minutes).padStart(2, "0")}
          <span>m</span>
        </h1>

        <small>
          Van {BED_TIME} tot {wakeTime}
        </small>

        <strong>94%</strong>
      </div>
    </div>
  );
}

function Toggle({ active, onToggle, label }) {
  return (
    <button
      type="button"
      className={`toggle ${active ? "active" : ""}`}
      onClick={onToggle}
      aria-pressed={active}
      aria-label={label}
    >
      <div></div>
    </button>
  );
}

export default function WekkerComponent({
  onCancel,
  onSave,
  onOpenAlarmSound,
}) {
  const [wakeHour, setWakeHour] = useState(8);
  const [wakeMinute, setWakeMinute] = useState(0);
  const [soundType, setSoundType] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("alarmSoundType") || "Ringtone";
    }
    return "Ringtone";
  });
  const [soundValue, setSoundValue] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("alarmSoundValue") || "Standaard";
    }
    return "Standaard";
  });
  const navigate = useNavigate();
  const wakeTime = `${String(wakeHour).padStart(2, "0")}:${String(wakeMinute).padStart(2, "0")}`;
  const [repeatEnabled, setRepeatEnabled] = useState(false);
  const [lampEnabled, setLampEnabled] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("alarmSoundType", soundType);
      localStorage.setItem("alarmSoundValue", soundValue);
    }
  }, [soundType, soundValue]);

  function toggleDay(day) {
    setSelectedDays((currentDays) =>
      currentDays.includes(day)
        ? currentDays.filter((value) => value !== day)
        : [...currentDays, day],
    );
  }

  function chooseColor(color) {
    if (!lampEnabled) return;
    setSelectedColor(color);
  }

  function handleWheel(event, field) {
    event.preventDefault();

    const delta = event.deltaY > 0 ? 1 : -1;

    if (field === "hour") {
      setWakeHour((current) => clampWheelValue(current + delta, 24));
    } else {
      setWakeMinute((current) => clampWheelValue(current + delta, 60));
    }
  }

  function handleLampToggle() {
    setLampEnabled((current) => {
      const nextValue = !current;

      if (!nextValue) {
        setSelectedColor("");
      }

      return nextValue;
    });
  }

  function goToAlarmSound() {
    onOpenAlarmSound();
  }

  const hourOptions = getWheelOptions(wakeHour, 24);
  const minuteOptions = getWheelOptions(wakeMinute, 60);

  return (
    <div className="wekker-page">
      <div className="top-buttons">
        <button className="icon-button clear" onClick={onCancel}>
          <X size={30} />
        </button>

        <button className="icon-button save" onClick={onSave}>
          <Check size={28} />
        </button>
      </div>

      <SleepClock wakeTime={wakeTime} />

      <section className="settings-card">
        <div className="section-title">
          <div className="small-icon">
            <Sun size={24} fill="#efc243" />
          </div>
          <h2>Wekker</h2>
        </div>

        <div className="wheel-picker">
          <div className="picker-highlight" />

          <div
            className="picker-column"
            onWheel={(event) => handleWheel(event, "hour")}
            tabIndex={0}
          >
            {hourOptions.map((hour) => (
              <button
                key={hour}
                type="button"
                className={hour === wakeHour ? "active" : ""}
                onClick={() => setWakeHour(hour)}
                aria-pressed={hour === wakeHour}
              >
                {String(hour).padStart(2, "0")}
              </button>
            ))}
          </div>

          <div className="picker-colon">:</div>

          <div
            className="picker-column"
            onWheel={(event) => handleWheel(event, "minute")}
            tabIndex={0}
          >
            {minuteOptions.map((minute) => (
              <button
                key={minute}
                type="button"
                className={minute === wakeMinute ? "active" : ""}
                onClick={() => setWakeMinute(minute)}
                aria-pressed={minute === wakeMinute}
              >
                {String(minute).padStart(2, "0")}
              </button>
            ))}
          </div>
        </div>

        <div className="setting-row">
          <div className="small-icon">
            <Bell size={22} />
          </div>
          <span>Alarm geluid</span>
        </div>

        <button
          type="button"
          className="sound-pill"
          onClick={goToAlarmSound}
          aria-label="Open alarm geluid instellingen"
        >
          <span className="sound-pill-tab">{soundType}</span>
          <span className="sound-pill-value">{soundValue}</span>
          <ChevronRight size={24} />
        </button>

        <div className="setting-row space-top">
          <div className="small-icon">
            <RotateCcw size={22} />
          </div>
          <span>Herhaling</span>
          <Toggle
            active={repeatEnabled}
            onToggle={() => setRepeatEnabled((current) => !current)}
            label="Schakel herhaling in"
          />
        </div>

        <div className={`days ${repeatEnabled ? "visible" : "collapsed"}`}>
          {["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"].map((day) => (
            <button
              key={day}
              type="button"
              className={selectedDays.includes(day) ? "active" : ""}
              onClick={() => toggleDay(day)}
              aria-pressed={selectedDays.includes(day)}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="setting-row space-top2">
          <div className="small-icon">
            <Lightbulb size={22} />
          </div>
          <span>Lamp aan bij wekker</span>
          <Toggle
            active={lampEnabled}
            onToggle={handleLampToggle}
            label="Schakel lamp in bij wekker"
          />
        </div>

        <div
          className={`color-section ${lampEnabled ? "visible" : "collapsed"}`}
        >
          <p className="color-text">Kies een kleur.</p>

          <div className="colors">
            {[
              { name: "Moon", key: "moon" },
              { name: "Vanilla", key: "vanilla" },
              { name: "Sunset", key: "sunset" },
              { name: "Cozy", key: "cozy" },
            ].map((color) => (
              <div key={color.key}>
                <button
                  type="button"
                  className={`color ${color.key} ${selectedColor === color.key ? "active" : ""}`}
                  onClick={() => chooseColor(color.key)}
                  aria-pressed={selectedColor === color.key}
                  aria-label={`Selecteer ${color.name}`}
                ></button>
                <span>{color.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <nav className="bottom-nav">
        <Home size={32} />
        <Moon size={34} />
        <TrendingUp size={34} />
        <User size={34} />
      </nav>
    </div>
  );
}
