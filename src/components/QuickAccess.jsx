import "./QuickAccess.css";

import { Lightbulb, AlarmClock, Moon, ChevronRight } from "lucide-react";

export default function QuickAccess({
  onLampClick,
  onWekkerClick,
  onAvondroutineClick,
}) {
  return (
    <section className="quick-access-page">
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

        {/* WEKKER */}

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
    </section>
  );
}
