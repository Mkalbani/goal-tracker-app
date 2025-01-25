export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        &copy; <span>{currentYear}</span> My Daily Goal Tracker
      </p>
    </footer>
  );
};
