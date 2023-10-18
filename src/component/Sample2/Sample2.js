import React from "react";
import styles from "./sample2.module.css";
import clsx from "clsx";

const Sample2 = (props) => {
  const { line1, line2, top } = props;
  return (
    <div className={clsx(styles.sample2, top ? styles.top : "")}>
      <div>
        <p className={styles.line1}>{line1}</p>
        <p className={styles.line2}>{line2}</p>
      </div>
      <svg
        fill="white"
        viewBox="0 0 1920 1920"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g fillRule="evenodd">
            {" "}
            <path d="M0 92.168 92.299 0l959.931 959.935L92.299 1920 0 1827.57l867.636-867.635L0 92.168Z"></path>{" "}
            <path d="M868 92.168 960.299 0l959.931 959.935L960.299 1920 868 1827.57l867.64-867.635L868 92.168Z"></path>{" "}
          </g>{" "}
        </g>
      </svg>{" "}
    </div>
  );
};

export default Sample2;
