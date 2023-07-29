import { Outlet } from "react-router-dom";
import Footer from "../shaired/Footer";
import Home from "./Home";
import ShowWriter from "../pages/ShowWriter";
import Navbar from "../shaired/Navbar";
import SecondNav from "../shaired/SecondNav";
import SocialBar from "../shaired/socialBar/SocialBar";
import LastNav from "../shaired/navlast";

const Main = () => {
  return (
    <div>
      <SocialBar></SocialBar>
      <Navbar></Navbar>
      <SecondNav></SecondNav>
      <LastNav />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
