import { useState } from "react";
import { Sun, Moon, Plus } from "lucide-react";
import "./AlarmsList.css";

export default function AlarmsList({ onAddAlarm }) {
  const [alarms, setAlarms] = useState([
    {
      id: 1,
      time: "08:00",
      days: ["Ma", "Di", "Wo", "Do", "Vr"],
      ringtone: "Ringtone",
      lamp: true,
      enabled: true,
    },
    {
      id: 2,
      time: "09:30",
      days: ["Za", "Zo"],
      ringtone: "Ringtone",
      lamp: true,
      enabled: true,
    },
    {
      id: 3,
      time: "07:00",
      days: ["Ma", "Di", "Wo"],
      ringtone: "Ringtone",
      lamp: false,
      enabled: false,
    },
  ]);

  function toggleAlarm(id) {
    setAlarms((current) =>
      current.map((alarm) =>
        alarm.id === id ? { ...alarm, enabled: !alarm.enabled } : alarm,
      ),
    );
  }

  return (
    <div className="alarms-page">
      <h1>Wekkers</h1>

      <div className="alarms-list">
        {alarms.map((alarm) => (
          <div
            key={alarm.id}
            className={`alarm-card ${alarm.enabled ? "enabled" : "disabled"}`}
          >
            <div className="alarm-card-left">
              <div className="alarm-icon">
                {alarm.enabled ? (
                  <Sun size={24} fill="#efc243" color="#efc243" />
                ) : (
                  <Moon size={24} color="#9e9e9e" />
                )}
              </div>

              <div className="alarm-details">
                <div className="alarm-time">{alarm.time}</div>

                <div className="alarm-days">
                  {alarm.days.map((day) => (
                    <span key={day}>{day}</span>
                  ))}
                </div>

                <div className="alarm-meta">
                  <span>{alarm.ringtone}</span>
                  <span className="dot">•</span>
                  <span>{alarm.lamp ? "Lamp aan" : "Lamp uit"}</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              className={`alarm-toggle ${alarm.enabled ? "active" : ""}`}
              onClick={() => toggleAlarm(alarm.id)}
              aria-pressed={alarm.enabled}
              aria-label={`Toggle alarm at ${alarm.time}`}
            >
              <div className="toggle-circle"></div>
            </button>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="add-alarm-button"
        aria-label="Add new alarm"
        onClick={onAddAlarm}
      >
        <Plus size={32} />
      </button>
    </div>
  );
}
