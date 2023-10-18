import React from "react";
import styles from "./banner1.module.css";

const Banner1 = () => {
  return (
    <div className={styles.banner1}>
      <div className={styles.banner1_1}>
        <p className={styles.p1}>
          <span className={styles.addline1}>D</span>iscover true{" "}
          <span className={styles.addline1}>B</span>eauty,
        </p>
        <p className={styles.p1}>
          through a <span className={styles.addline1}>R</span>elaxing time.
        </p>
      </div>
      <p className={styles.banner1_2}>
        It is a small private salon in Mishuku. Sunlight gently pours into the
        spacious salon, which is decorated in a tropical style. We look forward
        to welcoming you in this space that is a little removed from everyday
        life.
      </p>
    </div>
  );
};

export default Banner1;
