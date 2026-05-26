import React from "react";
import "../streak.css";
import maan from "../public/maan-streaks.png";

function Streak() {
  return (
    <div className="streakKaart">
      <div className="streakHeader">
        <img src={maan} className="maan" />

        <div>
          <h1 className="titel">Streak</h1>
          <div className="streakInfo">
            <span className="dagen">7 dagen</span>
            <span className="record">record 23</span>
          </div>
        </div>
      </div>

      <div className="containerDagen">
        <div className="weekdagen">
          <div className="Cirkel actief">11</div>
          <p>MA</p>
        </div>

        <div className="weekdagen">
          <div className="Cirkel actief">12</div>
          <p>DI</p>
        </div>

        <div className="weekdagen">
          <div className="Cirkel actief">13</div>
          <p>WO</p>
        </div>

        <div className="weekdagen">
          <div className="Cirkel actief">14</div>
          <p>DO</p>
        </div>

        <div className="weekdagen">
          <div className="Cirkel actief">15</div>
          <p>VR</p>
        </div>

        <div className="weekdagen">
          <div className="Cirkel onactief">16</div>
          <p>ZA</p>
        </div>

        <div className="weekdagen">
          <div className="Cirkel onactief">17</div>
          <p>ZO</p>
        </div>
      </div>
    </div>
  );
}

export default Streak;
