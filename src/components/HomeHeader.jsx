import React from "react";
import "./HomeHeader.css";

export default function HomeHeader({ naam = "", bedtijd = "--:--" }) {
  return (
    <section className="home-header">
      <div className="greeting-card">
        <div className="avatar">
          {naam ? naam.charAt(0).toUpperCase() : "M"}
        </div>
        <div className="greeting-text">
          <h2>Goedenavond, {naam || "Maartje"}</h2>
          <p>Jouw persoonlijke slaapcoach</p>
        </div>
        <div className="demo-badge">DEMO</div>
      </div>

      <div className="sleep-card">
        <div className="sleep-left">
          <div className="small">VANAVOND SLAAP JE OM</div>
          <div className="time">{bedtijd || "22:00"}</div>
        </div>
        <div className="sleep-right">
          <div className="connected">RESTNEST VERBONDEN</div>
          <div className="reminder">
            Herinnering om 21:15 — 45 minuten eerder
          </div>
        </div>
      </div>
    </section>
  );
}
