import React from 'react'
import styles from "./h1.module.css"
import clsx from 'clsx'
const H1 = (props) => {
  const { upper, text, span, color } = props
  return (
    <div className={styles.container}>
      <p className={clsx(styles.p1, styles[color])}><span className={clsx(styles[span], styles[color])}>{upper}</span>{text}</p>
    </div>
  )
}

export default H1
