import React from "react";
import styles from "./banner4.module.css";
import Sample1 from "../../../component/Sample1/Sample1";

const Banner4 = () => {
  return (
    <div className={styles.banner4}>
      <Sample1
        line1="We think"
        line2="本当の美しさとは、リラックスの中にこそ生まれる。私たちの仕事は髪を美しくすることだけではありません。髪や骨格の悩みを根本的に解決することでの不安の解消、そして日常を忘れリラックスした時間の中で過ごす心身の癒し。全てが揃うことで本当の美しさに出会うことができます。「くつろぎが美を育む」をモットーに至福の時間をご提供いたします。"
      />
      <img
        className={styles.pic1}
        src="https://naneaahua-hair.com/wp/wp-content/uploads/pic_02.jpg"
      ></img>
    </div>
  );
};

export default Banner4;
