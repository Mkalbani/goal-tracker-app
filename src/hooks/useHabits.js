import useLocalStorage from "./useLocalStorage";

const useHabits = () => {
  const [habits, setHabits] = useLocalStorage("habitsapp.habits", []);

  const addHabit = (newHabit) => {
    setHabits((prev) => [
      ...prev,
      {
        ...newHabit,
        id: Math.random(),
        completed: false,
      },
    ]);
  };

  const toggleHabit = (id) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  const deleteHabit = (id) => {
    setHabits((prev) => prev.filter((habit) => habit.id !== id));
  };

  return { habits, addHabit, toggleHabit, deleteHabit };
};

export default useHabits;
