import React, { useState } from "react";
import HabitItem from "./HabitItem";
import AddHabitModal from "./AddHabitModal";
import ContextMenu from "./ContextMenu";
import useHabits from "../../hooks/useHabits";
import { createPortal } from "react-dom";
import Notification from "../ui/Notification";

const HabitList = () => {
  const { habits, addHabit, toggleHabit, deleteHabit } = useHabits();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contextMenu, setContextMenu] = useState({
    show: false,
    x: 0,
    y: 0,
    habitId: null,
  });
  const [notification, setNotification] = useState(null);

  const handleContextMenu = (e, habit) => {
    e.preventDefault();
    setContextMenu({
      show: true,
      x: e.clientX,
      y: e.clientY,
      habitId: habit.id,
      habitTitle: habit.title,
      isCompleted: habit.completed,
    });
  };

  const closeContextMenu = () => {
    setContextMenu({ show: false, x: 0, y: 0, habitId: null });
  };

  const handleHabitToggle = (id) => {
    toggleHabit(id);
    // Find the habit to check if it's being completed
    const habit = habits.find((h) => h.id === id);
    if (habit && !habit.completed) {
      setNotification({
        message: "Good job for completing your goal!",
        type: "success",
      });
    }
  };

  const handleHabitDelete = (id) => {
    deleteHabit(id);
    setNotification({
      message: "Goal deleted successfully",
      type: "info",
    });
    closeContextMenu();
  };

  return (
    <>
      <section className="habit-container">
        {habits.map((habit) => (
          <HabitItem
            key={habit.id}
            habit={habit}
            onToggle={handleHabitToggle}
            onContextMenu={handleContextMenu}
          />
        ))}
      </section>

      <section className="new-habit">
        <button
          className="new-habit__add"
          onClick={() => setIsModalOpen(true)}
          aria-label="Add new habit"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 5.75V18.25"
            ></path>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M18.25 12L5.75 12"
            ></path>
          </svg>
        </button>
      </section>

      {isModalOpen && (
        <AddHabitModal
          onAdd={(habit) => {
            addHabit(habit);
            setNotification({
              message: "New goal added successfully!",
              type: "success",
            });
          }}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      {contextMenu.show &&
        createPortal(
          <ContextMenu
            {...contextMenu}
            onDelete={handleHabitDelete}
            onClose={closeContextMenu}
          />,
          document.body
        )}

      {notification && (
        <Notification {...notification} onClose={() => setNotification(null)} />
      )}
    </>
  );
};

export default HabitList;
