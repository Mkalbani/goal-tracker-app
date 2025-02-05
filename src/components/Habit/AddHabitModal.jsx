import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { icons } from "../../utils/constant";


const AddHabitModal = ({ onAdd, onClose }) => {
  const [title, setTitle] = useState('');
  const [selectedIconId, setSelectedIconId] = useState(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keyup', handleEscape);
    return () => document.removeEventListener('keyup', handleEscape);
  }, [onClose]);

  const handleSubmit = () => {
    if (!title || selectedIconId === null) return;

    // Find the selected icon
    const selectedIcon = icons.find(icon => icon.id === selectedIconId);
    if (!selectedIcon) return;

    // Create the habit object
    const newHabit = {
      title,
      icon: selectedIcon.svg,
      completed: false
    };

    onAdd(newHabit);
    onClose();
  };

  return createPortal(
    <div className="modal-container active" aria-hidden="false">
      <div className="modal">
        <h2>Add a new goal</h2>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a goal name"
        />
        <div className="icons">
          {icons.map((icon) => (
            <button
              key={icon.id}
              className={`icon ${selectedIconId === icon.id ? 'selected' : ''}`}
              onClick={() => setSelectedIconId(icon.id)}
              id={icon.id}
            >
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                dangerouslySetInnerHTML={{ __html: icon.svg }}
              />
            </button>
          ))}
        </div>
        <div className="modal-btns">
          <button id="add" onClick={handleSubmit}>Add Goal</button>
          <button id="cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default AddHabitModal;
