import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import "../../../App.css";
import styles from "./navbar.module.css";
import clsx from "clsx";

const Navbar = (props) => {
  const { reservation_switch_func } = props;
  const [url, setUrl] = useState(["/#/", "/#/About", "/#/Menu", "/#/AboutStaff", "/#/Salon_Info", "/#/Salon_InfoAccess"]);
  const [id_para, setId_para] = useState(["staff", "access"])

  const changeUrl_func = (newUrl) => {
    const aa = window.location.href = `NANEA_hair${newUrl}`;
    console.log(aa)

  }

  return (
    <div className={styles.navbar}>
      <img
        className={styles.logo}
        src="https://naneaahua-hair.com/wp/wp-content/themes/delaunay/assets/image/common/logo_text.svg"
      ></img>
      <div className={styles.navbox}>
        <div onClick={() => changeUrl_func(url[0])} className={styles.title}>
          <p>Home</p>
        </div>
        <div onClick={() => changeUrl_func(url[1])} className={styles.title}>
          <p>About</p>
        </div>
        <div onClick={() => changeUrl_func(url[2])} className={styles.title}>
          <p>Menu</p>
        </div>
        <div onClick={() => changeUrl_func(url[3])} className={styles.title}>
          <p>Staff</p>
        </div>
        <div onClick={() => changeUrl_func(url[4])} className={styles.title}>
          <p>Salon Info</p>
        </div>
        <div onClick={() => changeUrl_func(url[5])} className={styles.title}>
          <p>Access</p>
        </div>
        <p onClick={reservation_switch_func} className={clsx(styles.reservation)}>Reservation</p>
      </div>
    </div>
  );
};

export default Navbar;
