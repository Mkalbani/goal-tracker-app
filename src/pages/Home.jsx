import { useState } from "react";
import ThemeToggle from "../layout/ThemeToggle";
import GoalList from "../components/goals/GoalList";
import {AddGoalButton} from '../components/goals/AddGoalsButton';
import AddGoalModal from "../components/goals/AddGoalModal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contextMenu, setContextMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
    goalId: null,
  });

  // Close context menu when clicking outside
  const handleClick = () => {
    if (contextMenu.visible) {
      setContextMenu((prev) => ({ ...prev, visible: false }));
    }
  };

  return (
    <div onClick={handleClick}>
      <ThemeToggle />
      <h1>My Daily Goal Tracker</h1>

      <section className="habit-container">
        <GoalList setContextMenu={setContextMenu} />
      </section>

      <section
        className="new-habit"
        style={{ display: "grid", placeItems: "center" }}
      >
        <AddGoalButton onClick={() => setIsModalOpen(true)} />
      </section>
      <AddGoalModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Context Menu */}
      {contextMenu.visible && (
        <div
          className="context-menu active"
          style={{ top: contextMenu.y, left: contextMenu.x }}
        >
          <span id="habitTitle">{contextMenu.goalTitle}</span>
          <button id="delete">Delete</button>
          <button id="shareOnTwitter">Share on Twitter</button>
        </div>
      )}
    </div>
  );
};

export default Home;
