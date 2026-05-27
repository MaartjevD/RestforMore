import React, { useState } from "react";
import "./lamp-toggle.css";

import MoonRestNest from "../assets/moon-restNest.png";
import VanillaRestNest from "../assets/vanilla-restNest.png";
import SunsetRestNest from "../assets/sunset-restNest.png";
import CozyRestNest from "../assets/cozy-restNest.png";
import UitRestNest from "../assets/uit-restNest.png";

import { Power, X } from "lucide-react";

const lampModes = [
  {
    key: "moon",
    label: "Morning",
    title: "Morning Light",
    image: MoonRestNest,
    color: "#FBF7DF",
  },
  {
    key: "vanilla",
    label: "Vanilla",
    title: "Morning Light",
    image: VanillaRestNest,
    color: "#FFF1A8",
  },
  {
    key: "sunset",
    label: "Sunset",
    title: "Sunset Light",
    image: SunsetRestNest,
    color: "#F7DFA6",
  },
  {
    key: "cozy",
    label: "Cozy",
    title: "Cozy Light",
    image: CozyRestNest,
    color: "#F5D4A3",
  },
];

export default function LampToggle() {
  const [lampOn, setLampOn] = useState(false);
  const [selectedMode, setSelectedMode] = useState(lampModes[0]);
  const [brightness, setBrightness] = useState(1);

  const currentMode = lampOn ? selectedMode : null;
  const currentImage = lampOn ? selectedMode.image : UitRestNest;

  return (
    <main className={`lamp-page ${lampOn ? selectedMode.key : "off"}`}>
      <button type="button" className="lamp-close" aria-label="Sluiten">
        <X size={28} />
      </button>

      <section className="lamp-hero">
        <img
          src={currentImage}
          alt="RestNest lamp"
          className={`restnest-image restnest-${lampOn ? selectedMode.key : "off"}`}
        />
      </section>

      <section className="lamp-panel">
        {lampOn && (
          <>
            <div className="lamp-control-row">
              <div
                className="selected-color-preview"
                style={{ backgroundColor: selectedMode.color }}
              />

              <div className="lamp-info">
                <h2>{selectedMode.title}</h2>
                <p>Helderheid</p>

                <div className="brightness-control">
                  <input
                    type="range"
                    min="1"
                    max="3"
                    step="1"
                    value={brightness}
                    onChange={(event) =>
                      setBrightness(Number(event.target.value))
                    }
                  />

                  <div
                    className="brightness-dot active"
                    style={{ left: `${((brightness - 1) / 2) * 100}%` }}
                  />

                  <div className="brightness-marks">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="brightness-labels">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="color-section-lamp">
              <p>Kleurselectie</p>

              <div className="color-options">
                {lampModes
                  .filter((mode) => mode.key !== selectedMode.key)
                  .map((mode) => (
                    <button
                      key={mode.key}
                      type="button"
                      className="color-option"
                      onClick={() => setSelectedMode(mode)}
                    >
                      <span
                        className="color-square"
                        style={{ backgroundColor: mode.color }}
                      />
                      <span>{mode.label}</span>
                    </button>
                  ))}
              </div>
            </div>
          </>
        )}

        <div className={`lamp-status-row ${!lampOn ? "off-layout" : ""}`}>
          <div>
            <h3>Lampstatus</h3>
            <p>{lampOn ? "Aan" : "Uit"}</p>
          </div>

          <button
            type="button"
            className={`power-button ${lampOn ? "active" : ""}`}
            onClick={() => setLampOn((current) => !current)}
            aria-label={lampOn ? "Lamp uitzetten" : "Lamp aanzetten"}
          >
            <Power size={34} strokeWidth={2.5} />
          </button>
        </div>
      </section>
    </main>
  );
}
