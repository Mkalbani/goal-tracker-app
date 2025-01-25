import { useState } from "react";
import { Plus, MousePointerClick, Sun, Check, Target } from "lucide-react";
import styles from "../styles/How-to.module.css";

const HowTo = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Welcome to the Goal Tracker!",
      description: "Your journey to better habits starts here.",
      icon: <Target className={styles.stepIcon} />,
    },
    {
      title: "Create goals by clicking the '+' button",
      description: "Add a name and select an icon to represent your goal.",
      icon: <Plus className={styles.stepIcon} />,
    },
    {
      title: "Manage your goals easily",
      description:
        "Right-click or long-press on touch devices to delete or edit goals.",
      icon: <MousePointerClick className={styles.stepIcon} />,
    },
    {
      title: "Track your progress",
      description:
        "Click on a goal to mark it as completed and build your streak.",
      icon: <Check className={styles.stepIcon} />,
    },
    {
      title: "Customize your experience",
      description:
        "Use the theme switcher to choose between light and dark mode.",
      icon: <Sun className={styles.stepIcon} />,
    },
  ];

  return (
    <div className={styles.container}>
      <h1>How to Use My Daily Goal Tracker</h1>

      <div className={styles.imageContainer}>
        <img
          src="/images/goal2.png"
          alt="Goal Tracker Interface"
          className={styles.headerImage}
        />
      </div>

      <section className={styles.howToContent}>
        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <div
              key={index}
              className={`${styles.step} ${
                activeStep === index ? styles.active : ""
              }`}
              onClick={() => setActiveStep(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setActiveStep(index);
                }
              }}
              tabIndex={0}
              role="button"
              aria-pressed={activeStep === index}
            >
              <div className={styles.stepNumber}>{index + 1}</div>
              <div className={styles.stepIcon}>{step.icon}</div>
              <div className={styles.stepContent}>
                <h2>{step.title}</h2>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.finalNote}>
          <h2>Stay organized and motivated to achieve your goals!</h2>
          <p>
            Remember: consistency is key to building great habits. Start small,
            stay consistent, and watch your progress grow day by day.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HowTo;
