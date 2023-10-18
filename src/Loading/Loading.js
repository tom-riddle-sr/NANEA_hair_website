import React from 'react'
import styles from "./loading.module.css"
import clsx from 'clsx'


const Loading = () => {
  return (
    <div className={styles.loading}>
      <img className={clsx(styles.pic1, styles.pic1_opacity)} src='https://naneaahua-hair.com/wp/wp-content/themes/delaunay/assets/image/common/logo.svg'></img>
    </div>
  )
}

export default Loading
