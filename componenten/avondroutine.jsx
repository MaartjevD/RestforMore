import { useEffect, useState } from "react";
import { Moon, Plus, Trash2, Check } from "lucide-react";
import "./avondroutine.css";

export default function AvondroutineEditor() {
  const [routine, setRoutine] = useState([
    "Telefoon wegleggen",
    "Tanden poetsen",
    "Rustige verlichting aan",
  ]);

  const [newStep, setNewStep] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedRoutine = JSON.parse(localStorage.getItem("avondRoutine"));

    if (savedRoutine && savedRoutine.length > 0) {
      setRoutine(savedRoutine);
    }
  }, []);

  const addStep = () => {
    const cleanStep = newStep.trim();

    if (!cleanStep) return;
    if (cleanStep.length > 32) return;
    if (routine.includes(cleanStep)) return;

    setRoutine([...routine, cleanStep]);
    setNewStep("");
    setSaved(false);
  };

  const removeStep = (index) => {
    setRoutine(routine.filter((_, itemIndex) => itemIndex !== index));
    setSaved(false);
  };

  const saveRoutine = () => {
    localStorage.setItem("avondRoutine", JSON.stringify(routine));
    setSaved(true);
  };

  return (
    <section className="editorPage">
      <div className="editorCard">
        <div className="editorHeader">
          <div className="editorIcon">
            <Moon size={24} />
          </div>

          <div>
            <h1>Avondroutine</h1>
            <p>Maak een vaste volgorde voor je avond.</p>
          </div>
        </div>

        <div className="editorList">
          {routine.map((step, index) => (
            <div className="editorItem" key={`${step}-${index}`}>
              <div className="editorNumber">{index + 1}</div>

              <span>{step}</span>

              <button
                className="deleteStepBtn"
                onClick={() => removeStep(index)}
                aria-label={`${step} verwijderen`}
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>

        <div className="addStepBox">
          <input
            value={newStep}
            onChange={(e) => setNewStep(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addStep()}
            maxLength={32}
            placeholder="Bijv. boek lezen"
          />

          <button onClick={addStep} aria-label="Stap toevoegen">
            <Plus size={22} />
          </button>
        </div>

        <button
          className="saveRoutineButton"
          onClick={saveRoutine}
          disabled={routine.length === 0}
        >
          <Check size={20} />
          Routine opslaan
        </button>

        {saved && (
          <p className="savedText">
            Je avondroutine is opgeslagen en staat op je home scherm.
          </p>
        )}
      </div>
    </section>
  );
}
