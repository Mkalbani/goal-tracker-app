import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import ThemeToggle from './ThemeToggle';
import { useNotification } from "../contexts/NotificationContext";
// import { NotificationContainer } from "../components/ui/Notification";

const Layout = ({ children }) => {
  const { notifications, hideNotification } = useNotification();

  return (
    <div className="app">
      <Navbar />
      <ThemeToggle />
      <main>{children}</main>
      <Footer />
      {/* <div className="notifications-container">
        {notifications.map(({ id, message, type }) => (
          <NotificationContainer
            key={id}
            message={message}
            type={type}
            onClose={() => hideNotification(id)}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Layout;