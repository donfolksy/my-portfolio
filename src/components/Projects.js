"use client";
import Image from 'next/image';
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Link from "next/link";
import { useState } from "react";
const Projects = () => {
  return (
    <div className="mb-5 dark:bg-black dark:text-white text-purple">
      <Navbar />
      <div className="m-5 pt-[130px] ">
        <div>
          <p className="font-bold text-center md:text-left">Welcome to my studio</p>
          <h1 className="pt-8 pb-8 font-bold text-center lg:text-4xl">
            Our mission is to leave a lasting mark on the world, and with these
            innovative products/projects, we are working towards achieving that
            ambition.
          </h1>
        </div>
        <div className="text-purpl">
          <p className="pb-1 font-bold text-center md:text-left">Product Management projects</p>
          <div className="grid lg:grid-cols-3 place-items-center gap-3 lg:gap-8">
            <Link
              target="_blank"
              href={
                "https://drive.google.com/file/d/1svmv60Fq_cLGpKuXkGqoCveOBUhMfvoT/view?usp=sharing"
              }
            >
              <div className="rounded-lg bg-purple/20 hover:bg-white hover:text-black dark:bg-purple/20 dark:hover:bg-white dark:hover:text-black">
  <div className="m-3">
    <h4 className="font-bold pt-3">Entry Level Certification</h4>
    <p className="py-3 font-bold">Product Research conducted for Uber</p>
    {/* <img className="pb-3" src={"/entrylevel.png"} alt="" /> */}
    <Image
  src="/entrylevel.png"
  alt="Entry Level logo"
  width={500}   // Adjust as needed
  height={300}  // Adjust as needed
  className="pb-3"
/>
  </div>
</div>

            </Link>
            <Link
              target="_black"
              href={
                "https://drive.google.com/file/d/1heMMb_DPQz7jwSUcxzbW3_sIRVLTtBIc/view?usp=sharing"
              }
            >
              <div className="rounded-lg bg-purple/20 hover:bg-white hover:text-black dark:bg-purple/20 dark:hover:bg-white dark:hover:text-black">
                <div className="m-3">
                  <h4 className="font-bold pt-3">Fabs Logistics</h4>
                  <p className="py-3 font-bold"> Story Mapping for Fabs Logistics</p>
                  {/* <img className="pb-3" src={"/fabpresentation.png"} alt="" /> */}
  <Image
  src="/fabpresentation.png"
  alt="fab logo"
  width={500}   // Adjust as needed
  height={300}  // Adjust as needed
  className="pb-3"
/>
                </div>
              </div>
            </Link>

            <Link target="_blank"
            href={"https://drive.google.com/drive/folders/1pBXQuZn5wqfpau3y7RrSCxi5voC9r4jc?usp=drive_link"
              
            }>
            <div className="rounded-lg bg-purple/20 hover:bg-white hover:text-black dark:bg-purple/20 dark:hover:bg-white dark:hover:text-black ">
              <div className="m-3">
                <h4 className="font-bold pt-3">Glow fitness</h4>
                <p className="py-3 font-bold"> product proposal</p>
                {/* <img className="pb-3" src={"/glow.png"} alt="" /> */}
                  <Image
  src="/glow.png"
  alt="glow logo"
  width={500}   // Adjust as needed
  height={300}  // Adjust as needed
  className="pb-3"
/>
              </div>
            </div>
            </Link>
          </div>
        </div>

        <div className="pb-8  mt-8 lg:pt-8">
          <p className="font-bold lg:pb-3 text-center md:text-left">Frontend development projects</p>
          <div className="grid lg:grid-cols-3 place-items-center gap-3 lg:gap-8">
<Link target="_black" href={"https://a3-spaces.vercel.app/"}>
              <div className="rounded-lg bg-purple/20 hover:bg-white hover:text-black dark:bg-purple/20 dark:hover:bg-white dark:hover:text-black ">
                <div className="m-3">
                  <h4 className="font-bold pt-3">A3Spaces</h4>
                  <p className="py-3 font-bold"> Management Consulting website</p>
                  {/* <img className="pb-3" src={"/a3.png"} alt="" /> */}
                    <Image
  src="/a3.png"
  alt="a3 logo"
  width={500}   // Adjust as needed
  height={300}  // Adjust as needed
  className="pb-3"
/>
                </div>
              </div>
            </Link>

            <Link
              target="_black"
              href={"https://image-gallery-pi-three.vercel.app/"}
            >
              <div className="rounded-lg bg-purple/20 hover:bg-white hover:text-black dark:bg-purple/20 dark:hover:bg-white dark:hover:text-black ">
                <div className="m-3">
                  <h4 className="font-bold pt-3">The Imaginarium Gallery</h4>
                  <p className=" font-bold"> Web App for images</p>
                  <p>login: user@example.com password:12345</p>
                  {/* <img className="pb-3" src={"/imaginarium.png"} alt="" /> */}
                    <Image
  src="/imaginarium.png"
  alt="imaginarium logo"
  width={500}   // Adjust as needed
  height={300}  // Adjust as needed
  className="pb-3"
/>
                </div>
              </div>
            </Link>

            <Link target="_black" href={"https://moviebox-bay.vercel.app/"}>
              <div className="rounded-lg bg-purple/20 hover:bg-white hover:text-black dark:bg-purple/20 dark:hover:bg-white dark:hover:text-black ">
                <div className="m-3">
                  <h4 className="font-bold pt-3">Moviebox</h4>
                  <p className="py-3 font-bold"> Movie Web App</p>
                  {/* <img className="pb-3" src={"/moviebox.png"} alt="" /> */}
                    <Image
  src="/moviebox.png"
  alt="moviebox logo"
  width={500}   // Adjust as needed
  height={300}  // Adjust as needed
  className="pb-3"
/>
                </div>
              </div>
            </Link>
            <Link target="_black" href={"https://fabs-logistics.vercel.app/"}>
              <div className="rounded-lg bg-purple/20 hover:bg-white hover:text-black dark:bg-purple/20 dark:hover:bg-white dark:hover:text-black ">
                <div className="m-3">
                  <h4 className="font-bold pt-3">Fab Logistics</h4>
                  <p className="py-3 font-bold"> Logistics Web App</p>
                  {/* <img className="pb-3" src={"/fabimg.png"} alt="" /> */}
                    <Image
  src="/fabimg.png"
  alt="fab img logo"
  width={500}   // Adjust as needed
  height={300}  // Adjust as needed
  className="pb-3"
/>
                </div>
              </div>
            </Link>
            <Link
              target="_blank
          "
              href={"https://renitrans.netlify.app/"}
            >
              <div className="rounded-lg bg-purple/20 hover:bg-white hover:text-black dark:bg-purple/20 dark:hover:bg-white dark:hover:text-black">
                <div className="m-3">
                  <h4 className="font-bold pt-3">Reni Account</h4>
                  <p className="py-3 font-bold">Reni Landing Page</p>
                  {/* <img className="pb-3" src={"/reni.png"} alt="" /> */}
                    <Image
  src="/reni.png"
  alt="reni logo"
  width={500}   // Adjust as needed
  height={300}  // Adjust as needed
  className="pb-3"
/>
                </div>
              </div>
            </Link>
            <Link target="_blank" href={"https://xenga.netlify.app/"}>
              <div className="rounded-lg bg-purple/20 hover:bg-white hover:text-black dark:bg-purple/20 dark:hover:bg-white dark:hover:text-black ">
                <div className="m-3">
                  <h4 className="font-bold pt-3">Xenda</h4>
                  <p className="py-3 font-bold">Xenda Web App Landing Page </p>
                  {/* <img className="pb-3" src={"/xenda.png"} alt="" /> */}
                    <Image
  src="/xenda.png"
  alt="xenda logo"
  width={500}   // Adjust as needed
  height={300}  // Adjust as needed
  className="pb-3"
/>
                </div>
              </div>
            </Link>
            <Link target="_blank" href={"https://swiftbranding.netlify.app/"}>
              <div className="rounded-lg bg-purple/20 hover:bg-white hover:text-black dark:bg-purple/20 dark:hover:bg-white dark:hover:text-black ">
                <div className="m-3">
                  <h4 className="font-bold pt-3">Figma</h4>
                  <p className="py-3 font-bold">Landing Page</p>
                  {/* <img className="pb-3" src={"/figma.png"} alt="" /> */}
                    <Image
  src="/figma.png"
  alt="figma logo"
  width={500}   // Adjust as needed
  height={300}  // Adjust as needed
  className="pb-3"
/>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
