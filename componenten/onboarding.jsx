import React, { useState } from "react";
import "../onboarding.css";

function Onboarding({ onComplete }) {
  const [tijd, setTijd] = useState("");
  const [naam, setNaam] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (typeof onComplete === "function") {
      onComplete({ naam, tijd });
    }
  };
  return (
    <div className="pagina">
      <form className="formulier" onSubmit={handleSubmit}>
        <div className="veld">
          <label>Gebruikersnaam</label>
          <input
            type="text"
            placeholder="Voer je gebruikersnaam in"
            value={naam}
            onChange={(e) => setNaam(e.target.value)}
          />
        </div>

        <div className="veld">
          <label>Leeftijd</label>
          <input type="number" placeholder="Bijv. 19" />
        </div>

        <div className="veld">
          <label>Gender</label>

          <div className="veldIcon">
            <input type="text" placeholder="Bijv. vrouw, man, anders" />
            <span className="vraagteken">?</span>
          </div>
        </div>

        <div className="veld">
          <label>Gewenste wektijd</label>
          <input
            type="time"
            value={tijd}
            onChange={(e) => setTijd(e.target.value)}
          />
        </div>

        <button type="submit" className="button">
          Opslaan
        </button>
      </form>
    </div>
  );
}

export default Onboarding;
