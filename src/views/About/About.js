import React, { useEffect, useRef } from 'react'
import H1 from "../../component/h1/H1"
import Slip from "../../component/Slip/Slip"
import styles from "./about.module.css"
import Sub_Banner1 from './sub/Banner1/Banner1'
import Sub_Banner2 from './sub/Banner2/Banner2'
import Sub_Banner3 from './sub/Banner3/Banner3'
import Sub_Banner4 from './sub/Banner4/Banner4'
import Sub_Banner5 from './sub/Banner5/Banner5'
import Sub_Banner6 from './sub/Banner6/Banner6'
const About = () => {
  const salon = useRef(null)
  const philosophy = useRef(null)
  const staff = useRef(null)

  useEffect(() => {
    if (window.location.href === "/AboutStaff") {
      scroll3()
    }
  }, [])

  const scroll1 = () => {
    salon.current.scrollIntoView({ behavior: 'smooth' })
  }
  const scroll2 = () => {
    philosophy.current.scrollIntoView({ behavior: 'smooth' })
  }
  const scroll3 = () => {
    staff.current.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div className={styles.container}>
      <H1 upper="A" text="bout Us" span="span1" />
      <div className={styles.slipContainer}>
        <Slip scroll={scroll1} text="Salon" border="slip1"></Slip>
        <Slip scroll={scroll2} text="Philosophy" border="slip1"></Slip>
        <Slip scroll={scroll3} text="Staff" ></Slip></div>
      <Sub_Banner1 />
      <Sub_Banner2 salon={salon} />
      <Sub_Banner3 />
      <Sub_Banner4 philosophy={philosophy} />
      <Sub_Banner5 />
      <Sub_Banner6 staff={staff} />

    </div>
  )
}

export default About
