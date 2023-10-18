import React from "react";
import styles from "./banner8.module.css";
import Sample1 from "../../../component/Sample1/Sample1";

const Banner8 = () => {
  return (
    <div className={styles.banner8}>
      <Sample1
        line1="Salon Info"
        line2="〒154-0005
東京都世田谷区三宿 1-3-23
クラールハイト三宿Ⅰ 101 [ Google Maps ]
営業時間 10:00～19:00"
        text_align={true}
        align_items={true}
        text_color={true}
        fill={true}
      />
      <div className={styles.banner8_2}>
        <div className={styles.banner8_2_1}>
          <div className={styles.news}>News</div>
          <p className={styles.p1}>定休日のお知らせ </p>
          <div className={styles.p2}>2023年10月1日</div>
        </div>
        <p>2023年10月は下記の日程でお休みをいただいております。</p>
        <div className={styles.banner8_2_2}>
          4日(水), 5日(木), 10日(火), 13日(金),18日(水), 19日(木), 23日(月),
          26日(木), 30日(月)<br></br>
          ＊4日,13日,16日は外注の仕事のため定休日にさせて頂きます。
        </div>
        <p>お休みの変更がある場合は、こちらに更新してまいります。</p>
        <p>皆さまのお越しを心よりお待ちしております。</p>
      </div>
    </div>
  );
};

export default Banner8;
