import { Link } from "react-router-dom";
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <h1>About My Daily Goal Tracker</h1>

      <div className={styles.imageContainer}>
        <img
          src="/images/goal.png"
          alt="Achieving Goals"
          className={styles.headerImage}
        />
      </div>

      <div className={styles.aboutContent}>
        <section>
          <h2>What is My Daily Goal Tracker?</h2>
          <p>
            My Daily Goal Tracker is an app designed to help you set, manage,
            and achieve your daily goals efficiently. It provides a simple yet
            effective way to organize your goals and track your progress.
          </p>
        </section>

        <section>
          <h2>Features</h2>
          <p>With My Daily Goal Tracker, you can:</p>
          <ul className={styles.featuresList}>
            <li>Create and name your goals</li>
            <li>Choose icons to represent your goals</li>
            <li>Track completion progress for each goal</li>
            <li>Delete goals when they are accomplished</li>
            <li>
              Switch between different themes for a personalized experience
            </li>
          </ul>
        </section>

        <section>
          <h2>How to Use</h2>
          <p>
            To get started, visit the{" "}
            <Link to="/how-to" className={styles.link}>
              "How to"
            </Link>{" "}
            page for a guide on using the app effectively.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            If you have any questions, suggestions, or feedback, feel free to{" "}
            <Link to="/contact" className={styles.link}>
              contact us through the provided contact information.
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
