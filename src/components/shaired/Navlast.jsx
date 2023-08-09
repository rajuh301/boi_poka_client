import { Link } from "react-router-dom";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { BsDot } from "react-icons/bs";
import navData from "./../../data/nav.json";
import { useState } from "react";
import { useEffect } from "react";

const LastNav = () => {
  const [catergory, setCategory] = useState([]);
  const [publishers, setPublishers] = useState([]);

  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  //   const [seeMore,setseeMore]=useState(6);

  //  const loadMore=()=>{
  //   setseeMore((prev)=> prev+4);
  //  }
  useEffect(() => {
    fetch("http://localhost:5000/writer")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/author")
      .then((res) => res.json())
      .then((data) => setPublishers(data));
  }, []);
  return (
    <header className={`relative top-0 z-[1000]  bg-[#201212]  py-3 lg:py-0`}>
      <div className="container  px-5 flex items-center justify-center">
        <nav className="hidden lg:block font-medium">
          <ul className="flex items-center justify-center gap-x-5">
            <li className=" text-black border-b-[3px] border-transparent hover:border-b-[3px] hover:border-secondary has_submenu ">
              <div className="flex items-center justify-center gap-2 cursor-pointer px-2 py-6 hover:text-inherit text-white hover:text-white">
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
            <li className=" text-black border-b-[3px] border-transparent hover:border-b-[3px] hover:border-secondary has_submenu ">
              <div className="flex items-center justify-center gap-2 cursor-pointer px-2 py-6 hover:text-inherit text-white hover:text-white">
                <span className="2lg:text-[15px] xl:text-base">প্রকাশনী</span>
                <FiChevronDown />
              </div>

              <div className="absolute w-full bg-white p-4 rounded-lg shadow-xl  submenu grid grid-cols-5 gap-x-[60px]">
                {publishers?.map((publisher) => {
                  return (
                    <div key={publisher._id}>
                      <Link
                        to="#"
                        className="flex p-1 px-8 hover:text-inherit text-black font-normal items-center gap-2 translate-x-[-30px] "
                      >
                        <span className="me-[-10px]">
                          <BsDot className="text-[25px] mt-1" />
                        </span>
                        <Link>
                          <span>{publisher.name}</span>
                        </Link>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2 cursor-pointer px-2 py-6 hover:text-inherit text-white hover:text-white">
                <span className="2lg:text-[15px] xl:text-base">
                  <Link to="/translated">অনুবাদ গ্রন্থ</Link>
                </span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2 cursor-pointer px-2 py-6 hover:text-inherit text-white hover:text-white">
                <span className="2lg:text-[15px] xl:text-base">
                  <Link to="/english">ইংরেজি বই</Link>
                </span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2 cursor-pointer px-2 py-6 hover:text-inherit text-white hover:text-white">
                <span className="2lg:text-[15px] xl:text-base">
                  <Link to="/islamic">ইসলামী বই</Link>
                </span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2 cursor-pointer px-2 py-6 hover:text-inherit text-white hover:text-white">
                <span className="2lg:text-[15px] xl:text-base">
                  <Link>অন্যান্য</Link>
                </span>
              </div>
            </li>
            <li>
              {/* audio */}
              <div className="flex items-center gap-2 cursor-pointer px-2 py-6 hover:text-inherit text-white hover:text-white">
                <span className="2lg:text-[15px] xl:text-base">
                  <Link>অডিও</Link>
                </span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2 cursor-pointer px-2 py-6 hover:text-inherit text-white hover:text-white">
                <span className="2lg:text-[15px] xl:text-base">
                  <Link>ভিডিও</Link>
                </span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      {/* mobile version */}
      <div className="navbar bg-[#201212] lg:hidden ">
        <div className="navbar-center ">
          <div className="dropdown ">
            <label tabIndex={0} className="btn  lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-[#201212] "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#201212] rounded-box w-52 text-white"
            >
              <li className="text-white">
                <span
                  className="2lg:text-[15px] xl:text-base hover:text-white"
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  লেখক <FiChevronDown />
                </span>
                {toggle && (
                  <ul className="text-white">
                    {catergory?.map((writers) => {
                      return (
                        <li key={writers._id}>
                          <Link
                            to="#"
                            className="block p-1 px-8 hover:text-inherit text-white font-normal  translate-x-[-30px] "
                          >
                            <Link to={`/WriterDetails/${writers._id}`}>
                              <span>{writers.name}</span>
                            </Link>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
              <li className="text-white">
                <span
                  className="2lg:text-[15px] xl:text-base hover:text-white"
                  onClick={() => {
                    setToggle2(!toggle2);
                  }}
                >
                  প্রকাশনী <FiChevronDown />
                </span>
                {toggle2 && (
                  <ul className="text-white">
                    {publishers?.map((publisher) => {
                      return (
                        <li key={publisher._id}>
                          <Link
                            to="#"
                            className="block p-1 px-8 hover:text-inherit text-white font-normal  translate-x-[-30px] "
                          >
                            <Link to={`/WriterDetails/${publisher._id}`}>
                              <span>{publisher.name}</span>
                            </Link>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
              <li>
                <div className="flex items-center gap-2 cursor-pointer px-2 py-2 hover:text-inherit text-white hover:text-white">
                  <span className="2lg:text-[15px] xl:text-base">
                    <Link to="/translated">অনুবাদ গ্রন্থ</Link>
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2 cursor-pointer px-2 py-2 hover:text-inherit text-white hover:text-white">
                  <span className="2lg:text-[15px] xl:text-base">
                    <Link to="/english">ইংরেজি বই</Link>
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2 cursor-pointer px-2 py-2 hover:text-inherit text-white hover:text-white">
                  <span className="2lg:text-[15px] xl:text-base">
                    <Link to="/islamic">ইসলামী বই</Link>
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2 cursor-pointer px-2 py-2 hover:text-inherit text-white hover:text-white">
                  <span className="2lg:text-[15px] xl:text-base">
                    <Link>অন্যান্য</Link>
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2 cursor-pointer px-2 py-2 hover:text-inherit text-white hover:text-white">
                  <span className="2lg:text-[15px] xl:text-base">
                    <Link>অডিও</Link>
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2 cursor-pointer px-2 py-2 hover:text-inherit text-white hover:text-white">
                  <span className="2lg:text-[15px] xl:text-base">
                    <Link>ভিডিও</Link>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LastNav;