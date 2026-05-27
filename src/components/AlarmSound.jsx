import { useEffect, useState } from "react";
import { ArrowLeft, Check } from "lucide-react";
import "./AlarmSound.css";

const ringtoneOptions = [
  "Standaard",
  "Sunrise",
  "Horizon",
  "Morning Dew",
  "Gentle Light",
  "Pure Morning",
];

const radioOptions = [
  "NPO Radio 1",
  "3FM",
  "SLAM!",
  "Qmusic",
  "Sky Radio",
  "538",
];

export default function AlarmSound({ onBack }) {
  const [mode, setMode] = useState(() => {
    if (typeof window === "undefined") return "ringtone";
    return localStorage.getItem("alarmSoundType") === "Radio"
      ? "radio"
      : "ringtone";
  });

  const [selectedRingtone, setSelectedRingtone] = useState(() => {
    if (typeof window === "undefined") return "Standaard";
    return localStorage.getItem("alarmSoundType") === "Ringtone"
      ? localStorage.getItem("alarmSoundValue") || "Standaard"
      : "Standaard";
  });

  const [selectedRadio, setSelectedRadio] = useState(() => {
    if (typeof window === "undefined") return "NPO Radio 1";
    return localStorage.getItem("alarmSoundType") === "Radio"
      ? localStorage.getItem("alarmSoundValue") || "NPO Radio 1"
      : "NPO Radio 1";
  });

  const currentOptions = mode === "ringtone" ? ringtoneOptions : radioOptions;
  const selectedOption = mode === "ringtone" ? selectedRingtone : selectedRadio;

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "alarmSoundType",
        mode === "ringtone" ? "Ringtone" : "Radio",
      );
      localStorage.setItem(
        "alarmSoundValue",
        mode === "ringtone" ? selectedRingtone : selectedRadio,
      );
    }
  }, [mode, selectedRingtone, selectedRadio]);

  return (
    <main className="alarm-sound-page">
      <div className="alarm-header">
        <button
          type="button"
          className="back-button"
          onClick={onBack}
          aria-label="Terug"
        >
          <ArrowLeft size={24} />
        </button>

        <h1>Alarm geluid</h1>
        <div className="alarm-header-spacer" />
      </div>

      <div className="alarm-tabs">
        <button
          type="button"
          className={mode === "ringtone" ? "alarm-tab active" : "alarm-tab"}
          onClick={() => setMode("ringtone")}
        >
          Ringtone
        </button>

        <button
          type="button"
          className={mode === "radio" ? "alarm-tab active" : "alarm-tab"}
          onClick={() => setMode("radio")}
        >
          Radio
        </button>
      </div>

      <div className="alarm-list">
        {currentOptions.map((option) => (
          <button
            type="button"
            key={option}
            className={`alarm-item ${selectedOption === option ? "selected" : ""}`}
            onClick={() => {
              if (mode === "ringtone") setSelectedRingtone(option);
              else setSelectedRadio(option);
            }}
          >
            <span>{option}</span>
            {selectedOption === option && <Check size={18} />}
          </button>
        ))}
      </div>
    </main>
  );
}
