import "./QuickAccess.css";

import { Lightbulb, AlarmClock, Moon, ChevronRight } from "lucide-react";

export default function QuickAccess({
  onLampClick,
  onWekkerClick,
  onAvondroutineClick,
}) {
  return (
    <section className="quick-access-page">
      <div className="quick-access-header">
        <h1>Instellingen</h1>

        <div className="quick-access-list">
          {/* LAMP */}

          <button className="quick-card" onClick={onLampClick}>
            <div className="quick-icon-wrap">
              <Lightbulb className="quick-icon" size={32} strokeWidth={2.1} />
            </div>

            <div className="quick-content">
              <h3>Lamp</h3>
              <p>Beheer je lampinstellingen</p>
            </div>

            <ChevronRight className="quick-arrow" size={26} strokeWidth={2.3} />
          </button>

          <button className="quick-card" onClick={onWekkerClick}>
            <div className="quick-icon-wrap">
              <AlarmClock className="quick-icon" size={32} strokeWidth={2.1} />
            </div>

            <div className="quick-content">
              <h3>Wekker</h3>
              <p>Beheer je wekkers</p>
            </div>

            <ChevronRight className="quick-arrow" size={26} strokeWidth={2.3} />
          </button>

          {/* AVONDROUTINE */}

          <button className="quick-card" onClick={onAvondroutineClick}>
            <div className="quick-icon-wrap">
              <Moon className="quick-icon" size={32} strokeWidth={2.1} />
            </div>

            <div className="quick-content">
              <h3>Avondroutine</h3>
              <p>Stel je avondroutine in</p>
            </div>

            <ChevronRight className="quick-arrow" size={26} strokeWidth={2.3} />
          </button>
        </div>
      </div>

      {/* WAVE */}

      <svg
        viewBox="0 0 430 170"
        preserveAspectRatio="none"
        style={{ transform: "translateY(128px)" }}
      >
        <defs>
          {/* achterste zachte wave */}
          <linearGradient id="waveBackGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ece4cf" />
            <stop offset="100%" stopColor="#feeece" />
          </linearGradient>

          {/* voorste warmere wave */}
          <linearGradient id="waveFrontGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e7dcc3" />
            <stop offset="100%" stopColor="#e7d7b6" />
          </linearGradient>
        </defs>

        <path
          className="wave-back"
          fill="url(#waveBackGradient)"
          opacity="0.62"
          d="M0 45 C75 -95 140 140 270 78 C300 75 365 0 510 5 L430 170 L0 170 Z"
        />

        <path
          className="wave-front"
          fill="url(#waveFrontGradient)"
          opacity="0.62"
          d="M0 105 C90 15 155 118 240 120 C320 123 380 20 430 95 L430 200 L0 170 Z"
        />
      </svg>
    </section>
  );
}
