"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsMoon, BsSun } from "react-icons/bs"; 
import AsideNav from "./AsideNav";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [showAsideNav, setShowAsideNav] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  // use effect for dark mode
  useEffect(() => {
    // Check the user's preferred color scheme and set dark mode accordingly
    const root = window.document.documentElement;
    const initialDarkMode = root.classList.contains("dark");
    setDarkMode(initialDarkMode);
  }, []);

// toggle aside
  const toggleAsideNav = () => {
    setShowAsideNav(!showAsideNav);
  };

// toggle dark mode 
  const toggleDarkMode = () => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <div className="relative">
      <div className="fixed right-0 left-0 top-0 bg-purple/40 dark:bg-black my-5 mx-3 rounded-3xl py-5 px-10 lg:px-32 flex justify-between items-center z-50">
        <img src="/memoji 2.png" alt="Logo" className="w-[70px] h-[70px]" />

        <ul className="text-purple dark:text-white lg:flex gap-10 cursor-pointer items-center hidden">
          <Link href="/home">
            <li
              className={`cursor-pointer ${
                activeItem === 0
                  ? "rounded-3xl py-2 px-7 bg-white dark:bg-gray-700"
                  : ""
              }`}
              onClick={() => handleItemClick(0)}
            >
              Home
            </li>
          </Link>
          <Link href="/about">
            <li
              className={`cursor-pointer ${
                activeItem === 1
                  ? "rounded-3xl py-2 px-7 bg-white dark:bg-gray-700"
                  : ""
              }`}
              onClick={() => handleItemClick(1)}
            >
              About
            </li>
          </Link>
          <Link href="/service">
            <li
              className={`cursor-pointer ${
                activeItem === 2
                  ? "rounded-3xl py-2 px-7 bg-white dark:bg-gray-700"
                  : ""
              }`}
              onClick={() => handleItemClick(2)}
            >
              Services
            </li>
          </Link>
          <Link href="/project">
            <li
              className={`cursor-pointer ${
                activeItem === 3
                  ? "rounded-3xl py-2 px-7 bg-white dark:bg-gray-700"
                  : ""
              }`}
              onClick={() => handleItemClick(3)}
            >
              Projects
            </li>
          </Link>
          <Link href="/contact">
            <li
              className={`cursor-pointer ${
                activeItem === 4
                  ? "rounded-3xl py-2 px-7 bg-white dark:bg-gray-700"
                  : ""
              }`}
              onClick={() => handleItemClick(4)}
            >
              Contact
            </li>
          </Link>
        </ul>

        {/* Dark Mode Toggle */}
        <div className="cursor-pointer ml-5" onClick={toggleDarkMode}>
          {darkMode ? (
            <BsSun className="text-yellow-400 text-3xl" />
          ) : (
            <BsMoon className="text-gray-700 dark:text-gray-200 text-3xl h-[20px]" />
          )}
        </div>

        {/* Hamburger Icon */}
        <div className="flex lg:hidden items-center">
          <GiHamburgerMenu
            className="text-3xl text-white cursor-pointer"
            onClick={toggleAsideNav}
          />
        </div>
      </div>

      {/* Aside Navigation */}
      {showAsideNav && (
        <div className="fixed inset-0 z-50">
          <AsideNav toggleAsideNav={toggleAsideNav} />
        </div>
      )}
    </div>
  );
};

export default Navbar;

