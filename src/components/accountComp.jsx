import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Clock, Mail, Calendar } from "lucide-react";
import "./accountComp.css";

export default function AccountComp() {
  const navigate = useNavigate();
  const [naam, setNaam] = useState("");
  const [bedtijd, setBedtijd] = useState("");
  const [leeftijd, setLeeftijd] = useState("");
  const [gender, setGender] = useState("");
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    try {
      setNaam(localStorage.getItem("userNaam") || "");
      setBedtijd(localStorage.getItem("bedtijd") || "");
      setLeeftijd(localStorage.getItem("leeftijd") || "");
      setGender(localStorage.getItem("gender") || "");
    } catch (e) {
      // ignore
    }
  }, []);

  function handleToggleEdit() {
    if (editing) {
      try {
        localStorage.setItem("userNaam", naam || "");
        localStorage.setItem("bedtijd", bedtijd || "");
        localStorage.setItem("leeftijd", leeftijd || "");
        localStorage.setItem("gender", gender || "");
      } catch (e) {
        // ignore
      }
    }
    setEditing(!editing);
  }

  function handleDelete() {
    const ok = window.confirm(
      "Weet je zeker dat je je account wilt verwijderen? Dit verwijdert je opgeslagen data en zet je terug naar de onboarding.",
    );
    if (!ok) return;

    try {
      localStorage.removeItem("userNaam");
      localStorage.removeItem("bedtijd");
      localStorage.removeItem("onboardingComplete");
    } catch (e) {
      // ignore
    }
    navigate("/");
    // force reload so App ziet dat onboarding niet voltooid is
    window.location.reload();
  }

  return (
    <div className="account-page">
      <header className="account-header">
        <h1>Account</h1>
        <p className="sub">Beheer je profiel en accountinstellingen</p>
      </header>

      <section className="account-card">
        <div className="account-row">
          <div className="icon-box">
            <User size={22} strokeWidth={2.2} />
          </div>
          <div className="field-body">
            <div className="field-label">Gebruikersnaam</div>
            <input
              type="text"
              value={naam}
              onChange={(e) => setNaam(e.target.value)}
              disabled={!editing}
              placeholder="Geen gebruikersnaam ingesteld"
            />
          </div>
        </div>

        <div className="account-row">
          <div className="icon-box">
            <Clock size={22} strokeWidth={2.2} />
          </div>
          <div className="field-body">
            <div className="field-label">Gewenste wektijd</div>
            <input
              type="time"
              value={bedtijd}
              onChange={(e) => setBedtijd(e.target.value)}
              disabled={!editing}
            />
          </div>
        </div>

        <div className="account-row">
          <div className="icon-box">
            <Mail size={22} strokeWidth={2.2} />
          </div>
          <div className="field-body">
            <div className="field-label">E-mailadres</div>
            <div className="field-row">
              <div className="field-value">Niet ingesteld</div>
              <button className="verify">Verifieer account</button>
            </div>
          </div>
        </div>

        <div className="account-row">
          <div className="icon-box">
            <Calendar size={22} strokeWidth={2.2} />
          </div>
          <div className="field-body">
            <div className="field-label">Leeftijd</div>
            <input
              type="number"
              value={leeftijd}
              onChange={(e) => setLeeftijd(e.target.value)}
              disabled={!editing}
              placeholder="Niet ingesteld"
            />
          </div>
        </div>

        <div className="account-row">
          <div className="icon-box">
            <User size={22} strokeWidth={2.2} />
          </div>
          <div className="field-body">
            <div className="field-label">Gender</div>
            <input
              type="text"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              disabled={!editing}
              placeholder="Niet ingesteld"
            />
          </div>
        </div>

        <div className="actions">
          <button className="btn edit-btn" onClick={handleToggleEdit}>
            {editing ? "Opslaan" : "Bewerken"}
          </button>
        </div>
      </section>

      <div className="danger-zone">
        <button className="delete" onClick={handleDelete}>
          Verwijder account
        </button>
      </div>
    </div>
  );
}
