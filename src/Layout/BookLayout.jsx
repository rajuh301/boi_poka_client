import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/shaired/Navbar";
import SecondNav from "../components/shaired/SecondNav";
import SocialBar from "../components/shaired/socialBar/SocialBar";
import Footer from "../components/shaired/Footer";

const BookLayout = () => {
  return (
    <div>
      <SocialBar></SocialBar>
      <Navbar></Navbar>
      <SecondNav></SecondNav>

      <div className="flex flex-col md:flex-row gap-x-8 p-8   ">
        <div className="md:w-[100px] lg:w-[100px]  ps-2 md:text-start text-center my-4">
          <h5 className="font-bold text-[20px]">ক্যাটেগরি</h5>
          <div className="mb-12">
            <ul className="">
              <li>
                <Link to="/novel">উপন্যাস</Link>
              </li>
              <li>
                <Link to="/story">গল্প</Link>
              </li>
              <li>
                <Link to="/poem">কবিতা</Link>
              </li>
              <li>
                <Link to="/probondho">প্রবন্ধ</Link>
              </li>
              <li>
                <Link to="/biography">আত্মজীবনী</Link>
              </li>
              <li>
                <Link to="/travel">ভ্রমন</Link>
              </li>
              <li>
                <Link to="/translated">অনুবাদ</Link>
              </li>
              <li>
                <Link to="/comics">কমিক্স</Link>
              </li>
            </ul>
          </div>
          <h5 className="font-bold text-[20px]">বইয়ের ধরন</h5>
          <div>
            <ul className="">
              <li>
                <Link to="/romantic">রোমান্টিক</Link>
              </li>
              <li>
                <Link to="/thriler">থ্রিলার</Link>
              </li>
              <li>
                <Link to="/horor">হরর</Link>
              </li>
              <li>
                <Link to="/probondho">প্রবন্ধ</Link>
              </li>
              <li>
                <Link to="/scienceFiction">সায়েন্স ফিকশন</Link>
              </li>
              <li>
                <Link to="/motivational">মোটিভেশনাল</Link>
              </li>
              <li>
                <Link to="/comedy">কমেডি</Link>
              </li>
              <li>
                <Link to="/classic">ক্লাসিক</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className=" shadow-inner w-full">
          <Outlet></Outlet>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default BookLayout;
