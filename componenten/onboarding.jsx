import React, { useState } from "react";
import "../onboarding.css";

function Onboarding({ onComplete }) {
  const [tijd, setTijd] = useState("");
  const [naam, setNaam] = useState("");
  const [leeftijd, setLeeftijd] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      localStorage.setItem("userNaam", naam || "");
      localStorage.setItem("bedtijd", tijd || "");
      localStorage.setItem("leeftijd", leeftijd || "");
      localStorage.setItem("gender", gender || "");
      localStorage.setItem("onboardingComplete", "true");
    } catch (err) {
      // ignore
    }

    if (typeof onComplete === "function") {
      onComplete({ naam, tijd, leeftijd, gender });
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
          <input
            type="number"
            placeholder="Bijv. 19"
            value={leeftijd}
            onChange={(e) => setLeeftijd(e.target.value)}
          />
        </div>

        <div className="veld">
          <label>Gender</label>

          <div className="veldIcon">
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="genderSelect"
            >
              <option value="">Kies een optie</option>
              <option value="vrouw">Vrouw</option>
              <option value="man">Man</option>
              <option value="non-binair">Non-binair</option>
              <option value="geen van alle">Geen van alle</option>
            </select>

            <span className="dropdownArrow">⌄</span>
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
