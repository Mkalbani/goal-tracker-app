import React from "react";

const HabitItem = ({ habit, onToggle, onContextMenu }) => {
  return (
    <div className="habit">
      <button
        className={`habit-btn ${habit.completed ? "completed" : ""}`}
        onClick={() => onToggle(habit.id)}
        onContextMenu={(e) => onContextMenu(e, habit)}
        data-id={habit.id}
        data-title={habit.title}
      >
        <svg
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          dangerouslySetInnerHTML={{ __html: habit.icon }}
        />
      </button>
      <span className="habit-content">{habit.title}</span>
    </div>
  );
};

export default HabitItem;
