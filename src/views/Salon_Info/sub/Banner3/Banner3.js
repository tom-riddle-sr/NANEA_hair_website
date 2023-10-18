import React, { useState } from 'react'
import styles from "./banner3.module.css"
import H1 from "../../../../component/h1/H1"

const Banner3 = (props) => {
  const { Access } = props
  return (
    <div className={styles.container} ref={Access}>
      <H1 upper="A" text="ccess" span="span1" ></H1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29121.150905380877!2d120.6280456!3d24.166686900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693e1e5070a7a7%3A0xa462167a0845084d!2z6Lev5oCd576p5pWZ5aCC!5e0!3m2!1szh-TW!2stw!4v1697534804929!5m2!1szh-TW!2stw"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
        className={styles.map}
      ></iframe>
      <p className={styles.p1}>池尻大橋駅 西口より徒歩10分。三軒茶屋駅 北口より徒歩10分。<br></br>
        三宿バス停徒歩３分</p>
    </div >
  )
}

export default Banner3
