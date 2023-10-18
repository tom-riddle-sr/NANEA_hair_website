import React from "react";
import styles from "./sample1.module.css";
import clsx from "clsx";

const Sample1 = (props) => {
  const { line1, line2, text_align, align_items, text_color, fill } = props;
  return (
    <div
      className={clsx(styles.banner3_2, align_items ? styles.align_items : "")}
    >
      <p className={clsx(styles.line1, text_color ? styles.text_color : "")}>{line1}</p>
      <p className={clsx(styles.line2, text_align ? styles.text_align : "", text_color ? styles.text_color : "")}>
        {line2}
      </p>
      <div className={styles.box}>
        <p className={clsx(styles.line3, text_color ? styles.text_color : "")}>Read More</p>
        <div className={styles.svg1}>
          <svg
            fill={fill ? "white" : "#107a7f"}
            viewBox="0 0 1920 1920"
            xmlns="http://www.w3.org/2000/svg"
            width="10"
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
          </svg>
        </div>
      </div>
    </div >
  );
};

export default Sample1;
