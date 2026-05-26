import "./QuickAccess.css";

import { Lightbulb, AlarmClock, Moon, ChevronRight } from "lucide-react";

export default function QuickAccess() {
  const items = [
    {
      title: "Lamp",
      subtitle: "Pas je lichtkleur en helderheid aan",
      icon: Lightbulb,
    },

    {
      title: "Wekker",
      subtitle: "Stel je wake-up ritme in",
      icon: AlarmClock,
    },

    {
      title: "Avondroutine",
      subtitle: "Bereid je rustig voor op slaap",
      icon: Moon,
    },
  ];

  return (
    <section className="quick-access">
      {items.map((item, index) => {
        const Icon = item.icon;

        return (
          <button className="quick-card" key={index}>
            <div className="quick-icon-wrap">
              <Icon className="quick-icon" size={24} strokeWidth={2} />
            </div>

            <div className="quick-content">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>

            <ChevronRight className="quick-arrow" size={20} strokeWidth={2.4} />
          </button>
        );
      })}
    </section>
  );
}
