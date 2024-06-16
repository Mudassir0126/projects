import React, { createRef, useEffect, useRef } from "react";
import Note from "./Note";

const Notes = ({ notes = [], SetNotes = () => {} }) => {
  useEffect(() => {
    //local storage logic
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    const updatedNotes = notes.map((note) => {
      const savedNote = savedNotes.find((n) => n.id === note.id);
      if (savedNote) {
        return { ...note, position: savedNote.position };
      } else {
        const position = DetermineNewPosition();
        return { ...note, position };
      }
    });
    SetNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  }, [notes.length]);

  const noteRefs = useRef([]);

  const DetermineNewPosition = () => {
    const maxX = window.innerWidth - 250;
    const maxY = window.innerHeight - 250;

    return {
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY),
    };
  };

  const handleDragStart = (id, e) => {
    const noteref = [];
  };

  return (
    <div>
      {notes.map((note) => {
        return (
          <Note
            key={note.id}
            ref={
              noteRefs.current[note.id]
                ? noteRefs.current[note.id]
                : (noteRefs.current[note.id] = createRef())
            }
            initialPos={note.position}
            context={note.text}
            onMouseDown={(e) => handleDragStart(note.id, e)}
          />
        );
      })}
    </div>
  );
};

export default Notes;
