import React, { useState } from "react";
import "./styles.css";

// Pastel color palette
const COLORS = [
  "#FFD1DC",
  "#B5EAD7",
  "#C7CEEA",
  "#FFF5BA",
  "#FFDAC1",
  "#D5AAFF",
  "#A0E7E5",
];

function getRandomColr() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

function StickyNote() {
  const [notes, setNotes] = useState([]);

  const handleAddNote = () => {
    const newNote = {
      id: Date.now(),
      text: "",
      position: { x: 10, y: 10 },
      color: getRandomColr(),
      isDragging: false,
      offset: false,
    };
    setNotes((pre) => [...pre, newNote]);
  };

  const handleUpdateText = (text, id) => {
    setNotes((pre) =>
      pre.map((note) => (note.id === id ? { ...note, text: text } : note))
    );
  };

  const handleDelete = (id) => {
    setNotes((pre) => pre.filter((note) => note.id !== id));
  };

  // Calculates final position on drop using saved offset
  const handleDrop = (e) => {
    const containerRect = e.currentTarget.getBoundingClientRect();
    const dropX = e.clientX - containerRect.left;
    const dropY = e.clientY - containerRect.top;

    setNotes((prev) =>
      prev.map((n) => {
        if (n.isDragging) {
          const offsetX = n.offset?.x || 0;
          const offsetY = n.offset?.y || 0;

          return {
            ...n,
            position: {
              x: dropX - offsetX,
              y: dropY - offsetY,
            },
            isDragging: false,
            offset: false,
          };
        }
        return n;
      })
    );
  };

  // Captures offset between cursor and note's top-left during drag
  const handleDragStart = (e, id) => {
    const noteElem = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - noteElem.left;
    const offsetY = e.clientY - noteElem.top;

    setNotes((pre) => {
      const preNotes = pre.filter((n) => n.id !== id);
      const currNote = pre.filter((n) => n.id === id);
      return [
        ...preNotes,
        ...currNote.map((n) => ({
          ...n,
          isDragging: true,
          offset: { x: offsetX, y: offsetY },
        })),
      ];
    });
  };

  return (
    <div
      className="sticky-note-container"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <div>
        {notes.map((note, index) => (
          <div
            draggable
            className="note"
            key={note.id}
            style={{
              backgroundColor: note.color,
              zIndex: index + 1,
              top: `${note.position.y}px`,
              left: `${note.position.x}px`,
            }}
            onDragStart={(e) => handleDragStart(e, note.id)}
          >
            <button className="close-btn" onClick={() => handleDelete(note.id)}>
              X
            </button>
            <textarea
              value={note.text}
              onChange={(e) => handleUpdateText(e.target.value, note.id)}
            />
          </div>
        ))}
      </div>
      <button className="add-btn" onClick={handleAddNote}>
        +
      </button>
    </div>
  );
}

export default StickyNote;
