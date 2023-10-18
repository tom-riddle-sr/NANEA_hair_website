import React, { useState } from 'react'
import styles from "./banner6.module.css"
import H1 from "../../../../component/h1/H1"
import clsx from 'clsx'
const Banner6 = (props) => {
  const { staff } = props
  const [aa, setAa] = useState([{ p1_1: "Owner", p1_2: "Stylist", p2: "平尾 雅俊  Hirao Masatoshi", p3: "どんな髪のお悩みも、お気軽にご相談ください。しっかりとしたカウンセリングを通じて、お客様一人一人の髪質やライフスタイルに合った最適な髪型を共に見つけていきたいと考えています。お客様がリラックスでき、美しくなり、笑顔で帰っていただけるよう、日々努力してまいります。", img: "https://naneaahua-hair.com/wp/wp-content/uploads/hirao-750x900.jpg", border: "p0_1" },
  { p1_1: "Stylist", p1_2: "", p2: "石渡 教子  Ishiwata Kyoko", p3: "お客様とのコミュニケーションを大切にし、より素敵なヘアスタイルをご提供いたします。皆様に心地よい時間をお過ごしいただけるよう常に楽しい空間作りを心がけておりますので、髪の悩みはもちろん、美容に限らずいろいろなお話が共有できたら嬉しいです。", img: "https://naneaahua-hair.com/wp/wp-content/uploads/kyoko-750x900.jpg", border: "" }])
  return (
    <div id="staff" ref={staff} className={styles.container}>
      <H1 upper="S" text="taff" span="span2" color="white" />
      <div className={styles.container2}>
        {aa.map(item => (
          <div className={styles.container3}>
            <img className={styles.pic1} src={item.img}></img>
            <div className={styles.container4}>
              <p className={clsx(styles.p0, styles[item.border])}>{item.p1_1}</p>
              <p className={clsx(styles.p1)}>{item.p1_2}</p>
            </div>
            <p className={styles.p1}>{item.p2}</p>
            <div className={styles.p2}> {item.p3}</div>
          </div>

        ))}
      </div>
    </div>
  )
}

export default Banner6
