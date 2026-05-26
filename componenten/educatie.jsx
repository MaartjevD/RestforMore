import { useState } from "react";
import { Lightbulb } from "lucide-react";
import "./educatie.css";

function SleepCard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="container">
      <div className="sleepCard">
        <div className="sleepIcon">
          <Lightbulb size={34} strokeWidth={2.1} />
        </div>

        <div className="sleepText">
          <h2>Wist je dat...</h2>

          <p>
            Slaap reguleert je emoties en stresshormonen. Te weinig slaap
            verhoogt het risico op depressie en angst met 60%.
          </p>

          <button className="leesMeer" onClick={() => setOpen(true)}>
            Lees meer
          </button>
        </div>
      </div>

      {open && (
        <div className="overlay">
          <div className="popup">
            <div className="popupTop">
              <span>Wist je dat...</span>

              <button className="closeBtn" onClick={() => setOpen(false)}>
                ×
              </button>
            </div>

            <div className="popupContent">
              <p>
                Slaap reguleert je emoties en stresshormonen. Te weinig slaap
                verhoogt het risico op depressie en angst met 60%.
              </p>

              <p>
                Dat komt doordat je hersenen tijdens slaap emoties verwerken en
                afvlakken. Bij slaaptekort blijft die verwerking onvolledig.
              </p>

              <button className="afsluitBtn" onClick={() => setOpen(false)}>
                Afsluiten
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SleepCard;
