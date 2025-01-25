import { useNotification } from "../../contexts/NotificationContext";



export const Notification = ({ message, type }) => (
  <div className={`notification notification--${type}`}>
    {message}
  </div>
);

export const NotificationContainer = () => {
  const { notifications } = useNotification();
  return (
    <div className="notification-container">
      {notifications.map(({ id, message, type }) => (
        <Notification key={id} message={message} type={type} />
      ))}
    </div>
  );
};
