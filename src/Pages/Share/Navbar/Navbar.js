import React, { useContext } from "react";
import { FaMoon, FaSearch, FaSun, FaToggleOn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthProvider } from "../../../Context/AuthContext";

const Navbar = () => {
  const { user, logout, isDark, setIsDark } = useContext(AuthProvider);

  const handleSignout = () => {
    logout()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const menu = (
    <>
      <Link className="mr-5 font-semibold" to="/">
        <li>Home</li>
      </Link>
      <Link className="mr-5 font-semibold" to="/media">
        <li>Media</li>
      </Link>
      <Link className="mr-5 font-semibold" to="/message">
        <li>Message</li>
      </Link>
      <Link className="mr-5 font-semibold" to="/about">
        <li>About</li>
      </Link>
      {user?.uid ? (
        <p
          className="cursor-pointer mr-5 font-semibold"
          onClick={handleSignout}
        >
          LogOut
        </p>
      ) : (
        <Link className="mr-5 font-semibold" to="/login">
          Login
        </Link>
      )}
    </>
  );

  return (
    <div
      className={
        isDark
          ? "navbar sticky top-0 left-0 right-0 z-20 bg-gray-700 border-b border-white text-white"
          : "navbar sticky top-0 left-0 right-0 z-20 bg-white text-black"
      }
    >
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-primary rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl">BuDDy</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menu}</ul>
      </div>
      <div className="navbar-end mr-5 ">
        <button className="mr-4" onClick={() => setIsDark(!isDark)}>
          {isDark ? (
            <span>
              <FaSun />
            </span>
          ) : (
            <span>
              <FaMoon />
            </span>
          )}
        </button>
        <button htmlFor="search" type="submit">
          <FaSearch />
        </button>

        {user?.uid && (
          <img
            className="w-10 h-10 ml-4 rounded-full"
            src={user?.photoURL}
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
