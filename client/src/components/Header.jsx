import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {

  return (
    <header className=" bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Jonam</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />

          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hover:underline hidden sm:inline text-slate-500">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hover:underline hidden sm:inline text-slate-700">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="hover:underline  sm:inline text-slate-700">
              Sign-in
            </li>
          </Link>
        </ul>
      </div>
    </header>
    
  );
}

export default Header;
