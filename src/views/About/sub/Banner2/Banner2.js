import React from 'react'
import styles from "./banner2.module.css"
const Banner2 = (props) => {
  const { salon } = props
  return (
    <div ref={salon}>
      <p className={styles.p1}>NANEA HAIR（ナネアヘアー）は、<br></br>
        三宿にある少人数プライベートサロンです。<br></br>
        <br></br>
        NANEA（ナネア）は、ハワイの言葉で「くつろいだ」「快適な」や「気楽に」を意味し、<br></br>
        日常生活から離れて穏やかな時間を楽しむことを表わします。</p>
    </div>
  )
}

export default Banner2
