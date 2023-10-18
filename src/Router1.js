import { Route, Routes } from "react-router-dom";
import MainPage from "./views/MainPage/Mainpage"
import About from "./views/About/About"
import Menu from "./views/Menu/Menu"
import Salon_Info from "./views/Salon_Info/Salon_Info";
import Reservation from "./views/Reservation/Reservation";


const Router1 = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/About" element={<About />} />
    <Route path="/AboutStaff" element={<About />} />
    <Route path="/Menu" element={<Menu />} />
    <Route path="/Salon_Info" element={<Salon_Info />} />
    <Route path="/Salon_InfoAccess" element={<Salon_Info />} />
    {/* <Route path="/Reservation" element={<Reservation />} /> */}
  </Routes>
);

export default Router1;