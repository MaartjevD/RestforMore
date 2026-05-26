import React, { useState } from "react";
import { Moon, Sun, Clock } from "lucide-react";
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
          left: `${SVG_OFFSET + sunPos.x * SCALE + 0}px`,
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

export default function WekkerComponent() {
  const [wakeTime, setWakeTime] = useState("08:00");

  return (
    <div className="wekker-page">
      <SleepClock wakeTime={wakeTime} />

      <div className="time-box">
        <label>Wekkertijd</label>

        <div className="time-input-wrapper">
          <input
            type="time"
            value={wakeTime}
            onChange={(e) => setWakeTime(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
