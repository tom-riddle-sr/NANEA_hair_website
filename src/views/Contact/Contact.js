import React from "react";
import styles from "./contact.module.css";
import clsx from "clsx";

const Contact = () => {
  return (
    <div className={styles.banner9}>
      <div className={clsx(styles.box, styles.box1)}>
        <p className={styles.p1}>Reservation</p>
        <p className={styles.p2}>
          ご予約については、公式LINE・HOTPEPER
          Beautyまたは、お電話より承っております。
        </p>
        <p className={styles.p3}>
          公式LINEからのご予約をおすすめしております。
          お電話でのご予約について、少人数体制のため接客中は電話に出られない場合がございます。ご了承ください。
        </p>
      </div>
      <div className={clsx(styles.box, styles.box2)}>
        <svg viewBox="0 0 24 24" width="40%" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.9999 10.0588C21.9999 5.58405 17.5141 1.94354 12 1.94354C6.48627 1.94354 1.99994 5.58405 1.99994 10.0588C1.99994 14.0702 5.55749 17.4299 10.3632 18.065C10.6887 18.1354 11.132 18.2798 11.244 18.5582C11.3449 18.8109 11.31 19.207 11.2765 19.4623C11.2765 19.4623 11.1591 20.168 11.1336 20.3184C11.09 20.571 10.9327 21.3072 12 20.8576C13.0672 20.4078 17.7588 17.4664 19.8569 15.0518H19.8564C21.3056 13.4624 21.9999 11.8495 21.9999 10.0588Z" stroke="#107a7f" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3139 8.53744H18.4141V8.34641H16.1227V12.1925H18.4141V12.0014H16.3139V10.365H18.4141V10.1739H16.3139V8.53744ZM5.92147 12.0014V8.34641H5.73044V12.1925H8.02179V12.0014H5.92147ZM14.35 12.0433L11.6125 8.34634H11.295V12.1925H11.486V8.49641L14.223 12.1925H14.541V8.34634H14.35V12.0433ZM9.52202 8.34634V12.1925H9.71305V8.34634H9.52202Z" stroke="#107a7f" stroke-linejoin="round"></path> </g></svg>
        <div>公式LINEで予約する </div>
      </div>
      <div className={clsx(styles.box, styles.box3)}>
        <svg
          width="35%"
          fill=" #107a7f"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M290.59 192c-20.18 0-106.82 1.98-162.59 85.95V192c0-52.94-43.06-96-96-96-17.67 0-32 14.33-32 32s14.33 32 32 32c17.64 0 32 14.36 32 32v256c0 35.3 28.7 64 64 64h176c8.84 0 16-7.16 16-16v-16c0-17.67-14.33-32-32-32h-32l128-96v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V289.86c-10.29 2.67-20.89 4.54-32 4.54-61.81 0-113.52-44.05-125.41-102.4zM448 96h-64l-64-64v134.4c0 53.02 42.98 96 96 96s96-42.98 96-96V32l-64 64zm-72 80c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm80 0c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z"></path>
          </g>
        </svg>
        <div className={styles.hotpeper}>HOTPEPERで予約する </div>
      </div>
      <div className={clsx(styles.box, styles.box4)}>
        <p className={styles.number}>03-6805-3988</p>
        <div className={styles.phone}>電話で予約する </div>
      </div>
    </div>
  );
};

export default Contact;
