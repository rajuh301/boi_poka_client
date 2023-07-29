import React, { useContext, useState } from "react";
import logo from "../../assets/logo2.png";
import { FaUserAlt } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const hanlesearch = () => {
    // Push to another route programmatically
    navigate(`/search?searchTerm=${search}`);
  };

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  // console.log(user)

  return (
    <div>
      <div className="navbar bg-[#201212] pb-5 md:px-24 flex sm:justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <input
                  className="border"
                  type="text"
                  placeholder="Search...."
                />
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl" href="/">
            <img className="w-48" src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex mt-4 ">
          <ul className="menu menu-horizontal px-1">
            <li>
              <input
                onChange={(e) => setSearch(e.target.value)}
                className="border w-96 border-l bg-[#201212] rounded-none text-white px-2 pb-3 h-8 relative"
                type="text"
                placeholder="Search by author or book name"
              />{" "}
              <button onClick={hanlesearch} className="absolute t-4 end-0 mt-2">
                <GoSearch className="w-10 h-8 p-1 absolute t-4 end-0 text-black hover:bg-white bg-white rounded-none p-0 outline-none"></GoSearch>
              </button>
            </li>
            <li tabIndex={0}></li>
          </ul>
        </div>
        <div className="navbar-end gap-5 mt-4">
          {user ? (
            <button
              onClick={handleLogOut}
              className=" border border-white bg-transparent text-right text-white h-7 w-24 rounded-none pb-1 relative pe-2"
            >
              {" "}
              <FaUserAlt className="text-white w-[15px] absolute start-2 top-1.5  "></FaUserAlt>
              LogOut
            </button>
          ) : (
            <Link
              to="/login"
              className="border border-white bg-transparent text-right text-white h-7 w-24 rounded-none pb-1 relative pe-2"
            >
              <FaUserAlt className="text-white w-[15px] absolute start-2 top-1.5 "></FaUserAlt>{" "}
              Login
            </Link>
          )}

          <AiOutlineShoppingCart className="w-24 h-11 text-white"></AiOutlineShoppingCart>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
