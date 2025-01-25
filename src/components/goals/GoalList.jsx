import { useState, useEffect } from "react";
import { useGoals } from "../../hooks/useGoals";
import { useNotification } from "../../contexts/NotificationContext";


const GoalList = () => {
  const { goals, toggleGoal, deleteGoal, loadGoals } = useGoals();
  const { showNotification } = useNotification();
  const [contextMenu, setContextMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
    goalId: null,
  });
  let previousCompletionStatus = false;

  useEffect(() => {
    console.log("Goals updated: ", loadGoals);
  }, [loadGoals]);

  const handleGoalClick = (goalId) => {
    const goal = goals.find((g) => g.id === goalId);
    if (!goal) return;

    toggleGoal(goalId);

    if (!previousCompletionStatus && !goal.completed) {
      showNotification("Good job for completing your goal!", "success");
    }
    previousCompletionStatus = !goal.completed;
  };

  const handleContextMenu = (e, goal) => {
    e.preventDefault();
    setContextMenu({
      visible: true,
      x: e.clientX,
      y: e.clientY,
      goalId: goal.id,
      goalTitle: goal.title,
      completed: goal.completed,
    });
  };

  const handleShare = () => {
    if (!contextMenu.completed) {
      showNotification("Please complete the goal before sharing it.", "info");
      return;
    }
    window.open(
      `https://twitter.com/intent/tweet?text=Just completed my goal: ${contextMenu.goalTitle}`,
      "_blank"
    );
    setContextMenu({ ...contextMenu, visible: false });
  };

  const handleDelete = () => {
    deleteGoal(contextMenu.goalId);
    setContextMenu({ ...contextMenu, visible: false });
  };

  return (
    <>
      {goals.map((goal) => (
        <div key={goal.id} className="habit">
          <button
            className={`habit-btn ${goal.completed ? "completed" : ""}`}
            onClick={() => handleGoalClick(goal.id)}
            onContextMenu={(e) => handleContextMenu(e, goal)}
          >
            <svg dangerouslySetInnerHTML={{ __html: goal.icon }} />
          </button>
          <span className="habit-content">{goal.title}</span>
        </div>
      ))}

      {contextMenu.visible && (
        <div
          className="context-menu active"
          style={{ top: contextMenu.y, left: contextMenu.x }}
        >
          <span id="habitTitle">{contextMenu.goalTitle}</span>
          <button id="delete" onClick={handleDelete}>
            Delete
          </button>
          <button
            id="shareOnTwitter"
            onClick={handleShare}
            disabled={!contextMenu.completed}
          >
            Share on Twitter
          </button>
        </div>
      )}
    </>
  );
};

export default GoalList;