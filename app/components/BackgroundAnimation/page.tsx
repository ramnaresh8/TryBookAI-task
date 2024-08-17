import React from "react";
import styles from "./StarAnimation.module.scss";

const StarAnimation: React.FC = () => {
  return (
    <div className={styles.container}>
      <div id={styles.stars}></div>
      <div id={styles.stars2}></div>
      <div id={styles.stars3}></div>
    </div>
  );
};

export default StarAnimation;
