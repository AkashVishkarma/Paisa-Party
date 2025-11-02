import React, { useState } from "react";
import { Link } from "react-router-dom";
import Games1 from "./Games1";
import dim from "../GameLogo/diamond.png"

const Header = ({score}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
      >
        {/* Left - Logo */}
        <div className="flex items-center lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <img
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              alt="Logo"
              className="h-8 w-auto"
            />
            <span className="font-semibold text-lg text-gray-800">
              Paisa Party
            </span>
          </Link>
          <div className="border border-red-600 h-[1.8rem] flex gap-2 items-center justify-center font-bold w-[6rem] mx-10 rounded-[10px]">
            {score} <img src={dim} alt="" className="h-[1.8rem]"/>
          </div>
        </div>



        {/* Center - Main Bar */}
        <div className="hidden lg:flex items-center justify-center gap-8">
          <Link
            to="/"
            className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition"
          >
            About
          </Link>
          <Link
            to="/game"
            className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition"
          >
            Games
          </Link>
          <Link
            to="/tm"
            className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition"
          >
            Terms & Condition
          </Link>
        </div>

        {/* Right - Dashboard */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-6">
          <Link
            to="/dashboard"
            className="text-sm font-semibold text-gray-900 flex items-center gap-1.5 hover:text-indigo-600 transition"
          >
            <i className="fa-solid fa-record-vinyl text-[20px]" />
            <span className="text-[15px]">Dashboard</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition"
          >
            <span className="sr-only">Toggle menu</span>
            {menuOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white shadow-inner">
          <div className="p-4 space-y-2">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
            >
              About
            </Link>
            <Link
              to="/game"
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
            >
              Games
            </Link>
            <Link
              to="/tm"
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
            >
              Terms & Condition
            </Link>

            <Link
              to="/dashboard"
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 flex items-center gap-2"
            >
              <i className="fa-solid fa-record-vinyl text-[18px]" />
              <span>Dashboard</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
