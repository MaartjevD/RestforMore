import React from "react";
import "./HomeHeader.css";

export default function HomeHeader({ naam = "Maartje", bedtijd = "22:00" }) {
  const initial = naam ? naam.charAt(0).toUpperCase() : "M";

  return (
    <section className="home-header">
      <div className="top-row">
        <div className="avatar">{initial}</div>

        <div className="greeting-text">
          <h3>Goedemorgen,</h3>
          <h3>{naam}</h3>
          <span>Jouw persoonlijke slaapcoach</span>
        </div>

        <button className="bell-button" aria-label="Meldingen">
          <span className="bell-dot" />♡
        </button>
      </div>

      <div className="sleep-orbit">
        <div className="sleep-circle">
          <p className="label">SLAAPTIJD</p>
          <h2>{bedtijd}</h2>

          <div className="connected">
            <span>✓</span>
            RESTNEST VERBONDEN
          </div>

          <p className="reminder">Herinnering om 21:15</p>
        </div>
      </div>
      <div className="soft-wave" aria-hidden="true">
        <svg viewBox="0 0 430 170" preserveAspectRatio="none">
          <defs>
            {/* achterste zachte wave */}
            <linearGradient id="waveBackGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fff8e8" />
              <stop offset="100%" stopColor="#feeece" />
            </linearGradient>

            {/* voorste warmere wave */}
            <linearGradient id="waveFrontGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f7ecd4" />
              <stop offset="100%" stopColor="#fff1d8" />
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
      </div>
    </section>
  );
}
