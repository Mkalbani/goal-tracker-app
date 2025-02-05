import React from "react";

const HowTo = () => {
  return (
    <>
      <h1>Quick Start Guide</h1>
      <div className="image-container">
        <img src="/images/goal2.png" alt="Goal Tracking" />
      </div>
      <section className="how-to-content">
        <h2>🎯 Create Goals</h2>
        <p>Click the + button and give your goal a name and meaningful icon.</p>

        <h2>✅ Track Progress</h2>
        <p>Simply click on a goal to mark it complete. Click again to undo.</p>

        <h2>🗑️ Manage Goals</h2>
        <p>
          Right-click (or long-press on mobile) to delete or share your
          achievements.
        </p>

        <h2>🌓 Customize</h2>
        <p>Toggle between light and dark themes to match your preference.</p>
      </section>
    </>
  );
};

export default HowTo;
