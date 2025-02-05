import React from "react";

const AnimatedBackground = () => {
  return (
    <div className="wrapper">
      <div className="cloud"></div>
      <div className="cloud2"></div>
      <div className="mountain"></div>
      {[...Array(10)].map((_, index) => (
        <div key={index + 1} className={`dash dash${index + 1}`}></div>
      ))}
      <div className="flag"></div>
    </div>
  );
};

export default AnimatedBackground;
