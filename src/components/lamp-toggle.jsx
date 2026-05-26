import React, { useState } from "react";
import "./lamp-toggle.css";

import BulbAan from "../assets/bulb-aan.svg";
import BulbUit from "../assets/bulb-uit.svg";
import CheckIcon from "../assets/check.svg";
import TurnOffIcon from "../assets/turn-off.svg";

const lampModes = [
  { label: "Soft", color: "#F8F5D8" },
  { label: "Dim", color: "#FFF1A8" },
  { label: "Warm", color: "#F7DFA6" },
  { label: "Reading", color: "#F5D4A3" },
];

export default function LampToggle() {
  const [lampOn, setLampOn] = useState(false);
  const [selectedMode, setSelectedMode] = useState(lampModes[2]);

  return (
    <div className="lamp-container">
      <div
        className={`lamp-card ${lampOn ? "lamp-card-on" : ""}`}
        style={{
          backgroundColor: lampOn ? selectedMode.color : "#f8f7f3",
        }}
      >
        <div className="lamp-content">
          <img
            src={lampOn ? BulbAan : BulbUit}
            alt={lampOn ? "Lamp aan" : "Lamp uit"}
            className={`lamp-icon ${lampOn ? "lamp-icon-on" : ""}`}
          />

          <h2 className={`lamp-title ${lampOn ? "lamp-title-on" : ""}`}>
            {lampOn ? "Lamp aan" : "Lamp uit"}
          </h2>

          {lampOn && <p className="lamp-mode-text">{selectedMode.label}</p>}
        </div>

        {lampOn && (
          <div className="lamp-mode-bar">
            {lampModes.map((mode) => (
              <button
                key={mode.label}
                className={`lamp-color-button ${
                  selectedMode.label === mode.label ? "selected" : ""
                }`}
                style={{ backgroundColor: mode.color }}
                onClick={() => setSelectedMode(mode)}
                aria-label={mode.label}
              >
                {selectedMode.label === mode.label && (
                  <img src={CheckIcon} alt="" className="check-icon" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      <button
        className={`lamp-power-button ${lampOn ? "lamp-power-off" : ""}`}
        onClick={() => setLampOn(!lampOn)}
      >
        <img src={TurnOffIcon} alt="" className="turn-off-icon" />
        {lampOn && <span>Lamp uitschakelen</span>}
      </button>
    </div>
  );
}
