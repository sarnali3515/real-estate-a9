import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks =
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/upProfile">Update Profile</NavLink></li>
            <li><NavLink to="/profile">Profile</NavLink></li>

        </>
    return (
        <div className="navbar bg-indigo-100 rounded">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex items-center">
                    <img className="w-14 lg:w-24" src="https://i.ibb.co/R0W5r98/Capture-removebg-preview.png" alt="" />
                    <a className="btn font-bold text-indigo-800 btn-ghost lg:text-3xl">Urban<span className="text-lime-600">Charm</span></a>

                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>

                {
                    user ?
                        <button onClick={handleSignOut} className="btn text-white bg-slate-800">Logout</button>
                        :
                        <Link to="/login">
                            <button className="btn text-white bg-slate-800">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;