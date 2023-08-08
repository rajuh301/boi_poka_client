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
      .then(() => { })
      .catch((error) => console.log(error));
  };
  // console.log(user)




  // --------------------------- localStorage

  const localStorageData = JSON.parse(localStorage.getItem('cartItems'))

  // --------------------------- localStorage

  return (
    <div>
      <div className="navbar bg-[#201212] flex flex-wrap justify-evenly md:pb-4">
        <div className="md:flex-row lg:flex-row pb-4">
          
          <a className="btn btn-ghost normal-case text-xl" href="/">
            <img className="w-48" src={logo} alt="" />
          </a>
        </div>
        <div className="md:flex-row lg:flex-row pb-4">
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
        <div className="md:flex-row lg:flex-row pb-4">
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

          <div className="flex">
            <Link to="/cart">
              <span className="indicator-item badge badge-secondary absolute right-24">{localStorageData?.length}</span>
              <AiOutlineShoppingCart className="w-24 h-11 text-white"></AiOutlineShoppingCart>
            </Link>
          </div>


        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;


