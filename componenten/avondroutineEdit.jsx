import { useEffect, useState } from "react";
import { Moon, Check } from "lucide-react";
import "./avondroutineEdit.css";

export default function Avondroutine() {
  const [routine, setRoutine] = useState([]);

  useEffect(() => {
    const savedRoutine = JSON.parse(localStorage.getItem("avondRoutine")) || [];
    setRoutine(savedRoutine);
  }, []);

  const [checkedSteps, setCheckedSteps] = useState([]);

  const toggleStep = (step) => {
    setCheckedSteps((prev) =>
      prev.includes(step)
        ? prev.filter((item) => item !== step)
        : [...prev, step],
    );
  };

  return (
    <section className="homeRoutineCard">
      <div className="homeRoutineTop">
        <div className="homeRoutineIcon">
          <Moon size={22} />
        </div>

        <div>
          <h2>Avondroutine</h2>
          <p>{routine.length} stappen voor een rustige avond</p>
        </div>
      </div>

      <div className="homeRoutineList">
        {routine.length === 0 ? (
          <p className="emptyRoutine">Je hebt nog geen routine ingesteld.</p>
        ) : (
          routine.map((step, index) => {
            const isDone = checkedSteps.includes(step);

            return (
              <button
                key={`${step}-${index}`}
                className={`homeRoutineStep ${isDone ? "done" : ""}`}
                onClick={() => toggleStep(step)}
              >
                <span className="homeCheckCircle">
                  {isDone && <Check size={14} />}
                </span>

                <span className="homeStepNumber">{index + 1}.</span>

                <span className="homeStepText">{step}</span>
              </button>
            );
          })
        )}
      </div>
    </section>
  );
}
