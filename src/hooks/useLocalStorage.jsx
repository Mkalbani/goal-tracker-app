// src/hooks/useLocalStorage.js
import { useState, useEffect, useCallback } from 'react';

export const useLocalStorage = (key, initialValue) => {
  // Get initial value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Update localStorage and trigger re-render
  const setValue = useCallback((value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      // Save state
      setStoredValue(valueToStore);
      
      // Save to localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  // Sync with localStorage
  useEffect(() => {
    const item = window.localStorage.getItem(key);
    if (item) {
      try {
        setStoredValue(JSON.parse(item));
      } catch (error) {
        console.error(error);
      }
    }
  }, [key]);

  return [storedValue, setValue];
};