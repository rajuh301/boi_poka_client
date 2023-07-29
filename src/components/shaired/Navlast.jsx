import { Link } from "react-router-dom";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { BsDot } from "react-icons/bs";
import navData from "./../../data/nav.json";
import { useState } from "react";
import { useEffect } from "react";

const LastNav = () => {
  const [catergory, setCategory] = useState([]);
  //   const [seeMore,setseeMore]=useState(6);

  //  const loadMore=()=>{
  //   setseeMore((prev)=> prev+4);
  //  }
  useEffect(() => {
    fetch("http://localhost:5000/writer")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <header className={`relative top-0 z-[1000]  bg-[#201212]  py-3 lg:py-0`}>
      <div className="container  px-5 flex items-center justify-between">
        <nav className="hidden lg:block font-medium">
          <ul className="flex items-center">
            <li className=" text-black border-b-[3px] border-transparent hover:border-b-[3px] hover:border-secondary has_submenu ">
              <div className="flex items-center gap-2 cursor-pointer px-2 py-6 hover:text-inherit text-white hover:text-white">
                <span className="2lg:text-[15px] xl:text-base">লেখক</span>
                <FiChevronDown />
              </div>

              <div className="absolute w-full bg-white p-4 rounded-lg shadow-xl  submenu grid grid-cols-5 gap-x-[60px]">
                {catergory?.map((writers) => {
                  return (
                    <div key={writers._id}>
                      <Link
                        to="#"
                        className="flex p-1 px-8 hover:text-inherit text-black font-normal items-center gap-2 translate-x-[-30px] "
                      >
                        <span className="me-[-10px]">
                          <BsDot className="text-[25px] mt-1" />
                        </span>
                        <Link to={`/WriterDetails/${writers._id}`}>
                          <span>{writers.name}</span>
                        </Link>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default LastNav;
