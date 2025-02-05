// src/components/UI/Notification.jsx
import React, { useEffect } from "react";
import { createPortal } from "react-dom";

const Notification = ({ message, type = "info", duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return createPortal(
    <div className={`notification notification--${type}`}>{message}</div>,
    document.body
  );
};

export default Notification;

// Usage in other components:
// const [notification, setNotification] = useState(null);
//
// // Show notification
// setNotification({ message: 'Good job for completing your goal!', type: 'success' });
//
// // In JSX
// {notification && (
//   <Notification
//     {...notification}
//     onClose={() => setNotification(null)}
//   />
// )}
