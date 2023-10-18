import React from 'react'
import styles from "./banner3.module.css"
import H1 from "../../../../component/h1/H1"

const Banner3 = () => {
  return (
    <div className={styles.container}>
      <img className={styles.pic1} src="https://naneaahua-hair.com/wp/wp-content/uploads/main10-1.jpg"></img>
      <img className={styles.pic2} src="https://naneaahua-hair.com/wp/wp-content/uploads/main06-1349x1800.jpg"></img>
      <img className={styles.pic3} src="https://naneaahua-hair.com/wp/wp-content/uploads/1CE7AD48-E5AD-4785-A4E9-182E63557F95.jpg"></img>
      <div className={styles.container2}>
        <H1 upper="O" text="ur Salon" />
        <p className={styles.p1}>南国のテイストを取り入れた開放感のある店内には、今日も陽の光がやさしく差し込みます。ここは年齢も性別も関係なくあらゆる世代の方々が心地よく過ごせる場所。日常から少し離れたこの場所で皆さまをお待ちしております</p></div>
    </div >
  )
}

export default Banner3
