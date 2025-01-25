export const AnimatedBackground = () => {
  return (
    <div className="wrapper">
      <div className="cloud"></div>
      <div className="cloud2"></div>
      <div className="mountain"></div>
      {[...Array(10)].map((_, i) => (
        <div key={i} className={`dash dash${i + 1}`}></div>
      ))}
      <div className="flag"></div>
    </div>
  );
};
