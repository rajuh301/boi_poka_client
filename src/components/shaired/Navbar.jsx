import React, { useContext } from 'react';
import logo from '../../assets/logo.png'
import { FaBeer, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    // console.log(user)





    return (
        <div>
            <div className="navbar bg-slate-700">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><input className='border' type="text" placeholder='Search....' /></li>

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"><img className='w-20' src={logo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        <li><input className='border w-96' type="text" placeholder='Search' /></li>
                        <li tabIndex={0}>
                        </li>

                    </ul>
                </div>
                <div className="navbar-end gap-5">

                    {
                        user ? <button onClick={handleLogOut} className="btn">LogOut</button> :
                            <Link to="/login" className="btn">Login</Link>

                    }





                    <FaShoppingCart className='w-20 h-10 text-white'></FaShoppingCart>

                </div>
            </div>
            <hr />
        </div>
    );
};

export default Navbar;