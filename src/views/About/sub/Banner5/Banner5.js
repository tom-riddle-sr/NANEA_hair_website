import React, { useState } from 'react'
import styles from "./banner5.module.css"
import H1 from "../../../../component/h1/H1"

const Banner5 = () => {
  const [aa, setAa] = useState([{ en: "Styling", jp: "つくる" }, { en: "Care", jp: "整える" }, { en: "Improve", jp: "髪質改善" }])
  const [bb, setBb] = useState([{ en: "Relaxation", jp: "くつろぎ" }, { en: "Healing", jp: "癒し" }, { en: "Health", jp: "健康" }])

  return (
    <div className={styles.container}>
      <H1 upper="W" text="e think" span="span2" color="white" />
      <p className={styles.p1}>本当の美しさとは、リラックスの中にこそ生まれる。</p>
      <div className={styles.container2}>
        <img className={styles.pic1} src='https://naneaahua-hair.com/wp/wp-content/uploads/main10-1.jpg'></img>
        <div className={styles.container3}>
          <div className={styles.container4}>
            <div className={styles.container5}>
              <p className={styles.p2}>Hair Beauty</p>
              {aa.map(item => (
                <div className={styles.container6}>
                  <p className={styles.p3}>{item.en}</p>
                  <p className={styles.p3}>{item.jp}</p>
                </div>))}

            </div>
            <div className={styles.container5}>
              <p className={styles.p2}>Inner Beauty</p>
              {bb.map(item => (
                <div className={styles.container6}>
                  <p className={styles.p3}>{item.en}</p>
                  <p className={styles.p3}>{item.jp}</p>
                </div>))}

            </div>
          </div>

          <p className={styles.p4}>美容師の仕事は髪を美しくすること。しかしながら単に外見を整えることだけでは“本当の美しさ”を実現することはできません。私たちは、外見の美しさにくわえ、内面からの健康と精神的な調和こそ“本当の美しさ”の実現に重要な要素と考えます。<br></br>
            <br></br>
            髪や骨格の悩みを根本的に解決することでの不安の解消、そして日常を忘れリラックスした時間の中で過ごす心身の癒し。NANEA HAIR（ナネアヘアー）は「くつろぎが美を育む」をモットーに、髪を美しくすることはもちろん、お客様ひとりひとりに寄り添い、心地よい時間を提供することで、心身ともに快適さを感じていただけるよう努力してまいります。</p>
        </div>
      </div>
    </div>
  )
}

export default Banner5
