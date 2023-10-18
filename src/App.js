import Loading from "./Loading/Loading";
import { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import { HashRouter } from "react-router-dom";
import Router1 from "./Router1"
import Navbar from "./views/MainPage/Navbar/Navbar";
import Slip from "./component/Slip/Slip.js"
import Footer from "./views/Footer/Footer"
import Contact from "./views/Contact/Contact"
import Reservation from "./views/Reservation/Reservation";
function App() {
  const [bgcolor, setBgcolor] = useState("white");
  const [reservation_switch, setReservation_switch] = useState(false)
  const salon = useRef(null)

  const scroll = () => {
    salon.current.scrollIntoView({ behavior: 'smooth' })
  }


  useEffect(() => {
    const scroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 3400) {
        setBgcolor("green");
      } else {
        setBgcolor("white");
      }
    };
    if (window.location.href !== "/NANEA_hair_website/#/Menu")
      window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);


  const reservation_switch_func = () => {
    setReservation_switch(!reservation_switch)
  }

  return (
    <HashRouter>
      <div className={clsx('App', bgcolor)}>
        <Navbar reservation_switch_func={reservation_switch_func} />
        <Router1 />
        <Contact />
        <Footer />
      </div>
      {reservation_switch ? <Reservation reservation_switch_func={reservation_switch_func} /> : ""}

    </HashRouter>
  )
}

export default App;
