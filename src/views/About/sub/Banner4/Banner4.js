/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styles from "./banner4.module.css"
import H1 from "../../../../component/h1/H1"
const Banner4 = (props) => {
  const { philosophy } = props
  return (
    <div ref={philosophy} className={styles.container}>
      <div className={styles.overflow}>
        <img className={styles.pic1} src="https://naneaahua-hair.com/wp/wp-content/uploads/sub02-1800x1350.jpg"></img>
        <div className={styles.h1}>
          <H1 upper="P" text="hilosophy" span="span2" color="white" /></div>
      </div>
    </div>
  )
}

export default Banner4
