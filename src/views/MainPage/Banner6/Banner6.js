import React from "react";
import styles from "./banner6.module.css";
import clsx from "clsx";
import Sample1 from "../../../component/Sample1/Sample1";
import Sample2 from "../../../component/Sample2/Sample2";

const Banner6 = () => {
  return (
    <div className={styles.banner6}>
      <div className={styles.box}>
        <div className={styles.banner6_1}>
          <Sample2 line1="Set Menu" line2="セットメニュー" top={true} />
          <Sample2 line1="Color" line2="カラー" top={false} />
          <Sample2 line1="Treatment" line2="トリートメント" top={false} />
        </div>
        <div className={styles.banner6_2}>
          <Sample2 line1="Cut" line2="カット" top={true} />
          <Sample2 line1="Perm" line2="セパーマ" top={false} />
          <Sample2 line1="Spa" line2="スパ" top={false} />
        </div>{" "}
      </div>
      <Sample1
        line1="We can do"
        line2="お客様ひとりひとりに寄り添うことを大切に、カウンセリングから施術、仕上げまでマンツーマンで丁寧に行います。骨格、髪質、雰囲気、時代の流れをしっかりと見極め、ダメージの少ない最善の方法でアプローチすることで本来の頭皮や髪の美しさを引き出します。シャンプー、トリートメント、ワックスも、COTA・NAPLA・DEMI・NANEAオリジナルなど様々な種類をご用意しております。ご自身に似合うヘアケアをみつけ、素敵なヘアスタイルをお楽しみください。また当店自慢のフルフラットタイプのシャンプー台で行うヘッドスパやトリートメントもぜひお試しください。"
        text_color={true}
        fill={true}
      />
    </div>
  );
};

export default Banner6;
