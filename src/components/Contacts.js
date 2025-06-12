"use client";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaSmile } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import emailjs from "emailjs-com";
const Contacts = () => {
  return (
    <div className="mb-5 pt-[125px] dark:text-white dark:bg-black text-purple">
      <Navbar />
      <div className="  rounded-3xl bg-purple/40 mx-3 my-7 p-5">
        <h4 className="mt-5 text-sm font-bold">CONTACT</h4>
        <h1 className=" py-10 font-bold lg:text-6xl">
          let&apos;s chat <br></br>
          Share your brilliant idea, and together, we&apos;ll create something
          extraordinary.
        </h1>
      </div>

      <div className="bg-purple/40 rounded-3xl  mx-3 my-14">
        <div className="lg:flex flex-row justify-around  lg:py-16 px-5  ">
          <div className=" ">
            <img
              className="w-[550px] lg:block hidden"
              src="/contact-img.svg "
              alt=""
            />
            <div className=" py-5  ">
              <h4 className="font-bold text-2xl py-2">Let&apos;s talk</h4>
              <p className="pb-2 text-">
                I find fulfillment collaborating with committed individuals,
                organizations, <br></br> and businesses who contribute to making
                the world a more beautiful place.
              </p>
              <div className="flex items-center gap-2">
                <p className="pb-2">We can do much together </p>
                <FaSmile className="" />
              </div>
              <div className="flex gap-2 pb-2">
                <p className="">If you want to mail: </p>
                <a href="mailto:akinlosesunday8@gmail.com" target="_blank">
                  <span className=" font-bold underline flex items-center gap-2">
                    email me <MdMarkEmailUnread className="" />
                  </span>{" "}
                </a>
              </div>
              <div className="flex gap-2">
                <p>If you want to hear my voice: </p>
                <a href="tel:08104941162">
                  <span className="font-bold underline flex items-center gap-2">
                    call me <IoIosCall className="" />
                  </span>{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="content-box align-center ">
            <h1 className="text-white font-bold text-2xl lg:text-4xl text-center">
              Get In Touch
            </h1>

            <form
              action="https://formspree.io/f/mnnardyv"
              method="POST"
              className="flex flex-col"
            >
              <div className="text-center lg:flex justify-between gap-4 py-5">
                <input
                  className="bg-transparent h-11 rounded-2xl border-[1px] border-white p-4 text-white placeholder-white outline-none"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
                <input
                  className="bg-transparent h-11 rounded-2xl border-[1px] border-white p-4 text-white placeholder-white outline-none"
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="lg:flex text-center gap-4">
                <input
                  className="bg-transparent h-11 rounded-2xl border-[1px] border-white p-4 text-white placeholder-white outline-none"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <input
                  className="bg-transparent h-11 rounded-2xl border-[1px] border-white p-4 text-white placeholder-white outline-none"
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                />
              </div>
              <textarea
                className="bg-transparent rounded-2xl border-[1px] border-white h-36 pl-4 text-white placeholder-white pt-2 outline-none mt-3"
                name="message"
                rows="4"
                cols="35"
                placeholder="Message"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-white border-black border-[1px] py-[16px] rounded-lg px-8 my-8 w-32 font-bold dark:text-black"
              >
                Send
              </button>
            </form>

            <div className="pt-10 flex gap-7 pb-5">
              <a href="https://twitter.com/sunepafolksy" target="_blank">
                {" "}
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
              <a
                href="https://www.instagram.com/akinlose_sunday"
                target="_blank"
              >
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
