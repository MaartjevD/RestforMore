import React, { useState } from "react";
import "./Avondroutine.css";

const initialSteps = [
  {
    id: 1,
    title: "Warme douche",
    time: "21:20",
    duration: 10,
    icon: "🛁",
    status: "done",
  },
  {
    id: 2,
    title: "Lezen",
    time: "21:30",
    duration: 15,
    icon: "📖",
    status: "active",
  },
  {
    id: 3,
    title: "Ademhalingsoefening",
    time: "21:45",
    duration: 10,
    icon: "🧘",
    status: "normal",
  },
  {
    id: 4,
    title: "Tanden poetsen & lichten dimmen",
    time: "21:55",
    duration: 5,
    icon: "💡",
    status: "normal",
  },
];

export default function Avondroutine() {
  const [steps, setSteps] = useState(initialSteps);
  const [showForm, setShowForm] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDuration, setNewDuration] = useState(10);
  const [editingId, setEditingId] = useState(null);
  const [draggedIndex, setDraggedIndex] = useState(null);

  const totalDuration = steps.reduce((sum, step) => sum + step.duration, 0);
  const nextStep = steps.find((s) => s.status === "normal") || steps[0];

  const handleDelete = (id) => {
    setSteps(steps.filter((step) => step.id !== id));
  };

  const handleEdit = (id) => {
    const step = steps.find((s) => s.id === id);
    setEditingId(id);
    setNewTitle(step.title);
    setNewDuration(step.duration);
    setShowForm(true);
  };

  const handleSubmit = () => {
    if (!newTitle.trim()) return;

    if (editingId) {
      setSteps(
        steps.map((step) =>
          step.id === editingId
            ? { ...step, title: newTitle, duration: Number(newDuration) }
            : step,
        ),
      );
    } else {
      const newStep = {
        id: Date.now(),
        title: newTitle,
        time: "22:00",
        duration: Number(newDuration),
        icon: "✍️",
        status: "normal",
      };

      setSteps([...steps, newStep]);
    }

    setNewTitle("");
    setNewDuration(10);
    setEditingId(null);
    setShowForm(false);
  };

  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  const handleDrop = (dropIndex) => {
    if (draggedIndex === null) return;

    const updatedSteps = [...steps];
    const draggedItem = updatedSteps.splice(draggedIndex, 1)[0];
    updatedSteps.splice(dropIndex, 0, draggedItem);

    setSteps(updatedSteps);
    setDraggedIndex(null);
  };

  return (
    <main className="routine-page">
      <section className="routine-container">
        <h1>Avondroutine</h1>
        <p className="subtitle">
          {steps.length} stappen - {totalDuration} min totaal
        </p>

        <p className="next-step">
          <strong>Volgende stap:</strong> {nextStep?.title}
        </p>

        <button className="add-button" onClick={() => setShowForm(!showForm)}>
          Toevoegen
        </button>

        <div className="steps-list">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`step-card ${step.status}`}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(index)}
            >
              <div className="drag-handle">⠿</div>

              <div className="step-icon">{step.icon}</div>

              <div className="step-info">
                <h2>{step.title}</h2>
                <p>
                  {step.time} | {step.duration} min
                </p>
              </div>

              <div className="step-actions">
                <button onClick={() => handleDelete(step.id)}>⌫</button>
                <button onClick={() => handleEdit(step.id)}>✎</button>
              </div>
            </div>
          ))}
        </div>

        {showForm && (
          <div className="new-step-box">
            <h2>Nieuwe stap</h2>

            <input
              type="text"
              placeholder="Bijv. dagboek schrijven"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />

            <label>Duur</label>

            <div className="slider-row">
              <input
                type="range"
                min="5"
                max="60"
                step="5"
                value={newDuration}
                onChange={(e) => setNewDuration(e.target.value)}
              />
              <span>{newDuration} min</span>
            </div>

            <button className="submit-button" onClick={handleSubmit}>
              {editingId ? "Stap wijzigen" : "Stap toevoegen"}
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
