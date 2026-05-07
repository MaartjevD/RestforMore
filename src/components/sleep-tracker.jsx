import React, { useState } from "react";
import "./sleep-tracker.css";

import PerfectIcon from "../assets/perfect-smiley.svg";
import GoedIcon from "../assets/goed-smiley.svg";
import MatigIcon from "../assets/matig-smiley.svg";
import SlechtIcon from "../assets/slecht-smiley.svg";
import VreselijkIcon from "../assets/vreselijk-smiley.svg";

const moods = [
  {
    label: "Perfect",
    icon: PerfectIcon,
  },
  {
    label: "Goed",
    icon: GoedIcon,
  },
  {
    label: "Matig",
    icon: MatigIcon,
  },
  {
    label: "Slecht",
    icon: SlechtIcon,
  },
  {
    label: "Vreselijk",
    icon: VreselijkIcon,
  },
];

export default function SleepTracker() {
  const [selectedMood, setSelectedMood] = useState("");

  return (
    <div className="sleep-container">
      <div className="sleep-card">
        {!selectedMood ? (
          <>
            <h2 className="sleep-title">Hoe heb je vannacht geslapen?</h2>

            <div className="mood-wrapper">
              {moods.map((mood) => (
                <button
                  key={mood.label}
                  className="mood-button"
                  onClick={() => setSelectedMood(mood.label)}
                >
                  <div className="mood-circle">
                    <img
                      src={mood.icon}
                      alt={mood.label}
                      className="mood-icon"
                    />
                  </div>

                  <span className="mood-label">{mood.label}</span>
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="sleep-success">
            <h2 className="sleep-title">Je slaapreflectie is opgeslagen</h2>

            <div className="selected-mood-preview">
              <img
                src={moods.find((mood) => mood.label === selectedMood).icon}
                alt={selectedMood}
                className="selected-mood-icon"
              />
              <span>{selectedMood}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
