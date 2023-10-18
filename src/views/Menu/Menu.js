import React, { useEffect, useRef, useState } from 'react'
import styles from "./menu.module.css"
import Sub_Banner1 from './sub/Banner1/Banner1'
import Sub_Banner2 from './sub/Banner2/Banner2'
import Sub_Banner3 from './sub/Banner3/Banner3'
import H1 from "../../component/h1/H1"
import Slip from "../../component/Slip/Slip"

const Menu = () => {


  useEffect(() => {
    console.log(window.location.href)
  }, [])

  const Set_Menu = useRef(null)
  const Cut = useRef(null)
  const Color = useRef(null)
  const Perm = useRef(null)
  const Treatement = useRef(null)
  const Spa = useRef(null)
  const scroll1 = () => {
    Set_Menu.current.scrollIntoView({ behavior: 'smooth' })
  }
  const scroll2 = () => {
    Cut.current.scrollIntoView({ behavior: 'smooth' })
  }
  const scroll3 = () => {
    Color.current.scrollIntoView({ behavior: 'smooth' })
  }
  const scroll4 = () => {
    Perm.current.scrollIntoView({ behavior: 'smooth' })
  }
  const scroll5 = () => {
    Treatement.current.scrollIntoView({ behavior: 'smooth' })
  }
  const scroll6 = () => {
    Spa.current.scrollIntoView({ behavior: 'smooth' })
  }
  const [aa, setAa] = useState([
    {
      name: "Set Menu",
      scroll: scroll1
    }, {
      name: "Cut",
      scroll: scroll2
    }, {
      name: "Color",
      scroll: scroll3
    }, {
      name: "Perm",
      scroll: scroll4
    }, {
      name: "Treatement",
      scroll: scroll5
    }, {
      name: "Spa",
      scroll: scroll6
    }

  ])


  return (
    <div className={styles.container}>
      <H1 upper="M" text="enu" span="span1" />
      <div className={styles.container2}>
        {aa.map((item, index) => (
          <Slip scroll={item.scroll} text={item.name} border={index < 5 ? "slip1" : ""} />
        ))}
      </div>
      <Sub_Banner1 />
      <Sub_Banner2 />
      <Sub_Banner3 Set_Menu={Set_Menu} Cut={Cut} Color={Color} Perm={Perm} Treatement={Treatement} Spa={Spa} />
    </div>
  )
}

export default Menu
