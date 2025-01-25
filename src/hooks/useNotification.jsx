import { useState, useCallback } from "react";

export const useNotification = () => {
  const [notifications, setNotifications] = useState([]);

  const showNotification = useCallback((message, type = "info") => {
    const newNotification = {
      id: Date.now(),
      message,
      type,
    };

    setNotifications((prev) => [...prev, newNotification]);
    setTimeout(() => {
      setNotifications((prev) =>
        prev.filter((n) => n.id !== newNotification.id)
      );
    }, 3000);
  }, []);

  return { notifications, showNotification };
};