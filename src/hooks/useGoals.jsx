import { useLocalStorage } from "./useLocalStorage";
import { useState, useCallback } from "react";

export const useGoals = () => {
  const [goals, setGoals] = useLocalStorage("habitsapp.habits", []);

  const addGoal = (goal) => {
    setGoals((currentGoals) => {
      if (!currentGoals || currentGoals.length === 0) {
        return [goal];
      }
      return [...currentGoals, goal];
    });
  };

    const loadGoals = useCallback(() => {
      const savedGoals = localStorage.getItem("habitsapp.habits");
      setGoals(savedGoals ? JSON.parse(savedGoals) : []);
    }, []);

  const deleteGoal = (id) => {
    setGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.id !== Number(id))
    );
  };

  const toggleGoal = (id) => {
    setGoals((currentGoals) =>
      currentGoals.map((goal) =>
        goal.id === Number(id) ? { ...goal, completed: !goal.completed } : goal
      )
    );
  };

  const updateGoal = (id, updates) => {
    setGoals((currentGoals) =>
      currentGoals.map((goal) =>
        goal.id === Number(id) ? { ...goal, ...updates } : goal
      )
    );
  };

  return {
    goals,
    addGoal,
    loadGoals,
    deleteGoal,
    toggleGoal,
    updateGoal,
  };
};
