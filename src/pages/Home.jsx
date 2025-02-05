import React from "react";

import HabitList from "../components/Habit/HabitList";
import AnimatedBackground from "../components/ui/AnimatedBackground";

const Home = () => {
  return (
    <div>
      <AnimatedBackground />
      <h1>My Daily Goal Tracker</h1>
      <HabitList />
    </div>
  );
};

export default Home;
