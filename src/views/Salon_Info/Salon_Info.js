import React, { useRef, useState, useEffect } from 'react'
import Sub_Banner1 from './sub/Banner1/Banner1'
import Sub_Banner2 from './sub/Banner2/Banner2'
import Sub_Banner3 from './sub/Banner3/Banner3'
import H1 from "../../component/h1/H1"
import Slip from "../../component/Slip/Slip"
import styles from "./salon_info.module.css"
const Salon_Info = () => {
  const Information = useRef(null)
  const Access = useRef(null)

  useEffect(() => {
    if (window.location.href === "/NANEA_hair_website/#/Salon_InfoAccess") {
      scroll2()
    }
  }, [])


  const scroll1 = () => {
    Information.current.scrollIntoView({ behavior: 'smooth' })
  }
  const scroll2 = () => {
    Access.current.scrollIntoView({ behavior: 'smooth' })
  }
  const [aa, setAa] = useState([
    {
      name: "Information",
      scroll: scroll1
    }, {
      name: "Access",
      scroll: scroll2
    }
  ])

  return (
    <div className={styles.container}>
      <H1 upper="S" text="alon Info" span="span1" />
      <div className={styles.container2}>
        {aa.map((item, index) => (
          <Slip scroll={item.scroll} text={item.name} border="slip1" />
        ))}
      </div>
      <Sub_Banner1 />
      <Sub_Banner2 Information={Information} />
      <Sub_Banner3 Access={Access} />
    </div>
  )
}

export default Salon_Info
