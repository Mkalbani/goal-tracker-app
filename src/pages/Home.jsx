// src/pages/Home.jsx
import React from "react";
import AnimatedBackground from "../components/UI/AnimatedBackground";
import HabitList from "../components/Habit/HabitList";

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
