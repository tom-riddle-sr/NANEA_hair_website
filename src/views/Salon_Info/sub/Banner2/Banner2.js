import React, { useState } from 'react'
import styles from "./banner2.module.css"
import H1 from "../../../../component/h1/H1"

const Banner2 = (props) => {
  const { Information } = props
  const [aa, setAa] = useState([
    {
      name: "店舗名",
      direction: "NANEA HAIR（ナネアヘアー）"
    }, {
      name: "所在地",
      direction: "	〒154-0005東京都世田谷区三宿 <br>1 - 3 - 23<br>クラールハイト三宿Ⅰ 101"
    }, {
      name: "営業時間",
      direction: "平日　10:00～19:00 <br>土日　10:00～18:00"
    }, {
      name: "最終受付",
      direction: "カット / 18:00<br> カラー・パーマ / 17:30 <br>デジタルパーマ・縮毛矯正 / 16:00"
    }, {
      name: "定休日",
      direction: "不定休"
    }
  ])
  return (
    <div className={styles.container} ref={Information}>
      <H1 upper="I" text="nformation" span="span1" />
      <div className={styles.container2}>
        {aa.map(item => (
          <div className={styles.container3}>
            <p className={styles.p1}>{item.name}</p>
            <p dangerouslySetInnerHTML={{ __html: item.direction }} className={styles.p2}></p>
          </div>
        ))}
      </div>
      <div className={styles.container3_5}>
        <div className={styles.container4}>
          <p className={styles.p4}>News</p>
          <p className={styles.p5}>定休日のお知らせ</p>
          <p className={styles.p6}>2023年10月1日</p>
        </div>
        <p className={styles.p7}>2023年10月は下記の日程でお休みをいただいております。</p>
        <div className={styles.container5}>
          <p className={styles.p8}>4日(水), 5日(木), 10日(火), 13日(金),18日(水), 19日(木), 23日(月), 26日(木), 30日(月)</p>
          <p className={styles.p8}>＊4日,13日,18日は外注の仕事のため定休日にさせて頂きます。</p>
        </div>
        <p className={styles.p7}>お休みの変更がある場合は、こちらに更新してまいります。</p>
        <p className={styles.p7}>皆さまのお越しを心よりお待ちしております。</p>
      </div>

    </div>
  )
}

export default Banner2
