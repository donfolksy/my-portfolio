"use client";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
const Footer = () => {
  return (
    <div className="rounded-3xl bg-purple/40 pt-14 mx-3 pb-14 flex flex-col justify-center items-center dark:bg-black dark:text-white">
      <div className=" flex  gap-7">
        <a href="https://twitter.com/sunepafolksy" target="_blank">
          <div className="flex justify-center items-center shadow-xl rounded-full w-[70px] h-[70px] transition-transform ease-in-out duration-300 hover:scale-110 cursor-pointer">
            <FaSquareXTwitter className="w-10 h-7" />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/sunday-akinlose
"
          target="_blank"
        >
          <div className="flex justify-center items-center shadow-xl rounded-full w-[70px] h-[70px] transition-transform ease-in-out duration-300 hover:scale-110 cursor-pointer">
            <FaLinkedin className="w-10 h-7" />
          </div>
        </a>
        <a href="https://www.instagram.com/akinlose_sunday" target="_blank">
          <div className="flex justify-center items-center shadow-xl rounded-full w-[70px] h-[70px] transition-transform ease-in-out duration-300 hover:scale-110 cursor-pointer">
            <FaInstagram className="w-10 h-7" />
          </div>
        </a>
        <a href="mailto:akinlosesunday8@gmail.com" target="_blank">
          <div className="flex justify-center items-center shadow-xl rounded-full w-[70px] h-[70px] transition-transform ease-in-out duration-300 hover:scale-110 cursor-pointer ">
            <MdMarkEmailUnread className="w-10 h-7" />
          </div>
        </a>
      </div>
      <div>
        <p className="pt-7">
          © 2024 <a href="mailto:akinlosesunday8@gmail.com" target="_blank"><span  className="text-red-500 font-bold cursor-pointer">AKINLOSE</span></a>  All
          Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
