import React from "react";
import styles from "./banner3.module.css";
import clsx from "clsx";
import Sample1 from "../../../component/Sample1/Sample1";
import Sample4 from "../../../component/Sample4/Sample4";

const Banner3 = () => {
  return (
    <div className={styles.banner3}>
      <div className={styles.banner3_1}>
        <img
          className={clsx(styles.img, styles.img1)}
          src="https://naneaahua-hair.com/wp/wp-content/uploads/pic_02.jpg"
        ></img>
        <img
          className={clsx(styles.img, styles.img2)}
          src="https://naneaahua-hair.com/wp/wp-content/uploads/pic_01-1350x1800.jpg"
        ></img>
        <img
          className={clsx(styles.img, styles.img3)}
          src="https://naneaahua-hair.com/wp/wp-content/uploads/pic_06.jpg"
        ></img>
        <img
          className={clsx(styles.img, styles.img4)}
          src="https://naneaahua-hair.com/wp/wp-content/uploads/other10.jpg"
        ></img>
      </div>
      <div className={styles.top}>
        <Sample4 />
        <Sample1
          line1="We are"
          line2="
       NANEA HAIR（ナネアヘアー）は、三宿にある少人数プライベートサロンです。南国のテイストを取り入れた開放感のある店内には、今日も陽の光がやさしく差し込みます。ここは年齢も性別も関係なくあらゆる世代の方々が心地よく過ごせる場所。日常から少し離れたこの場所で皆さまをお待ちしております。
      
      "
        />
      </div>
    </div>
  );
};

export default Banner3;

// Discover true beauty, through a relaxing time.
