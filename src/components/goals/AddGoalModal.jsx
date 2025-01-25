import { useState, useEffect } from "react";
import { useGoals } from "../../hooks/useGoals";
import { useNotification } from "../../contexts/NotificationContext"; 

const ICONS = {
  book: {
    id: "book",
    svg: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.75a2 2 0 0 1 2-2h5.25V17.25H14a2 2 0 0 1-2-2V6.75zm0 0a2 2 0 0 0-2-2H4.75V17.25H10a2 2 0 0 0 2-2V6.75z"/>`,
  },
  call: {
    id: "call",
    svg: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z"/>`,
  },
  camera: {
    id: "camera",
    svg: `<path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19.25 17.25V9.75C19.25 8.64543 18.3546 7.75 17.25 7.75H16.9167C16.513 7.75 16.1489 7.50726 15.9936 7.13462L15.2564 5.36538C15.1011 4.99274 14.737 4.75 14.3333 4.75H9.66667C9.26297 4.75 8.89886 4.99274 8.74359 5.36538L8.00641 7.13462C7.85114 7.50726 7.48703 7.75 7.08333 7.75H6.75C5.64543 7.75 4.75 8.64543 4.75 9.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25Z"/>`,
  },
  communicate: {
    id: "communicate",
    svg: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"/>`,
  },
  friends: {
    id: "friends",
    svg: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.78168 19.25H13.2183C13.7828 19.25 14.227 18.7817 14.1145 18.2285C13.804 16.7012 12.7897 14 9.5 14C6.21031 14 5.19605 16.7012 4.88549 18.2285C4.773 18.7817 5.21718 19.25 5.78168 19.25Z"/>
   <circle cx="9.5" cy="7.5" r="2.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.75 10.25C16.2688 10.25 17.25 9.01878 17.25 7.5C17.25 5.98122 16.2688 4.75 14.75 4.75"/>`,
  },
  write: {
    id: "write",
    svg: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 19.25L9 18.25L18.2929 8.95711C18.6834 8.56658 18.6834 7.93342 18.2929 7.54289L16.4571 5.70711C16.0666 5.31658 15.4334 5.31658 15.0429 5.70711L5.75 15L4.75 19.25Z"/>`,
  },
};

const AddGoalModal = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [selectedIcon, setSelectedIcon] = useState(null);
  const { addGoal } = useGoals();
  const { showNotification } = useNotification();
  const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
    if (submitting) {
      // Create and add the new goal
      const newGoal = {
        id: Math.random(),
        title: title || "New Goal",
        icon: ICONS[selectedIcon].svg,
        completed: false,
      };

      addGoal(newGoal);
      showNotification("Goal added successfully!", "success");

      // Reset form
      setTitle("");
      setSelectedIcon(null);
      setSubmitting(false);
      onClose();
    }
  }, [submitting, title, selectedIcon, addGoal, showNotification, onClose]);

  const handleSubmit = () => {
    if (!selectedIcon) {
      showNotification("Please select an icon", "error");
      return;
    }
    setSubmitting(true);
  };






  return (
    <div
      className={`modal-container ${isOpen ? "active" : ""}`}
      aria-hidden={!isOpen}
    >
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
          {Object.entries(ICONS).map(([key, icon]) => (
            <button
              key={key}
              type="button"
              id={icon.id}
              className={`icon ${selectedIcon === key ? "selected" : ""}`}
              onClick={() => setSelectedIcon(key)}
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
          <button id="add" onClick={handleSubmit}>
            Add Goal
          </button>
          <button id="cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddGoalModal;
