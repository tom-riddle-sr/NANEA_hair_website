import React from 'react'
import styles from "./slip.module.css"
import clsx from 'clsx'

const Slip = (props) => {
  const { text, border, scroll } = props
  return (
    <div onClick={scroll} className={clsx(styles.container, styles[border])}>
      <p>{text}</p>
      <svg className={styles.svg1} width="20" viewBox="0 0 24 24" fill="#107a7f" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 3.8C9 3.51997 9 3.37996 9.0545 3.273C9.10243 3.17892 9.17892 3.10243 9.273 3.0545C9.37996 3 9.51997 3 9.8 3H14.2C14.48 3 14.62 3 14.727 3.0545C14.8211 3.10243 14.8976 3.17892 14.9455 3.273C15 3.37996 15 3.51997 15 3.8V14H19L12 21L5 14H9V3.8Z" stroke="#107a7f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg></div>
  )
}

export default Slip
