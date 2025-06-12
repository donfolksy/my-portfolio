"use client";
import React from "react";
import Image from 'next/image';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
const Services = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <div className="pt-[125px] mb-5 text-purple dark:text-white dark:bg-black ">
      <Navbar />
      <section className="m-5 pt-[12px] ">
        <div className="">
          <div className="flex justify-center items-center my-7">
            {/* <img src="/PM.jpg" alt="" /> */}
            <Image
  src="/PM.jpg"
  alt="PM image"
  width={700}   // Replace with actual or desired width
  height={500}  // Replace with actual or desired height
/>
          </div>
          <p className=" text-lg text-center">
            Welcome to my corner of the internet! I am passionate and an
            experienced product manager dedicated to creating innovative
            solutions that delight customers and drive business success. This
            website serves as a hub where you can learn more about my
            professional journey, expertise, and the products I&apos;ve had the
            privilege to work on.
          </p>

          <h3 className="font-bold text-lg mt-5 mb-2">My Approach</h3>
          <p className="pb-5 text-center">
            As a product manager, I believe in a customer-centric approach,
            where empathy and data guide every decision. I&apos;m passionate about
            solving complex problems and translating user needs into elegant
            solutions that exceed expectations.
          </p>
          <div>
            <h3 className="text-lg font-bold pb-3">Key Skills</h3>
            <div className="flex gap-5 p-2">
              <FaArrowRight />
              <p>Product Strategy & Roadmapping</p>
            </div>
            <div className="flex gap-5 px-2 pb-2">
              <FaArrowRight />
              <p>User Research & Insights</p>
            </div>
            <div className="flex gap-5 px-2 pb-2">
              <FaArrowRight />
              <p>Agile Development Methodologies</p>
            </div>
            <div className="flex gap-5 px-2 pb-2">
              <FaArrowRight />
              <p>Cross-functional Team Leadership</p>
            </div>
            <div className="flex gap-5 px-2 pb-2">
              <FaArrowRight />
              <p>Data Analysis & Metrics Tracking</p>
            </div>
            <div className="flex gap-5 px-2 pb-2">
              <FaArrowRight />
              <p>UX/UI Design Collaboration</p>
            </div>
          </div>

          <div className="">
            <h4 className="text-lg font-bold p-3">Portfolio</h4>
            <p>
              Explore some of the exciting projects I&apos;ve been involved in as a
              product manager. Each product represents a unique challenge and an
              opportunity to innovate.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pt-14 ">
              <Link
                href={
                  "https://drive.google.com/file/d/1svmv60Fq_cLGpKuXkGqoCveOBUhMfvoT/view?usp=sharing"
                }
              >
                <div
                  className={`border-2 rounded-lg border-purple border-solid relative overflow-hidden `}
                  onMouseEnter={() => handleMouseEnter(0)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    className={
                      hoverIndex === 0
                        ? "absolute w-full bg-purple/40 h-full top-0 ease-in-out duration-1000"
                        : "absolute w-full bg-purple/40 h-full -top-[100%] ease-in-out duration-1000"
                    }
                  >
                    <div className="flex flex-col  p-5 text-center text-white items-center ">
                      <h1 className="font-bold text-3xl">Uber</h1>
                      <p className="pt-1 pb-1 text-sm">
                        A project under Entry level,as Uber&apos;s product manager, I
                        validated market needs, designed prototypes, and
                        identified MVP features through research and user
                        interviews. Emphasizing convenience, cost-effectiveness,
                        reliability, and safety, the resulting user stories
                        reflected users&apos; interests. The process ensured a
                        user-centric approach to product development, enhancing
                        Uber&apos;s service effectiveness.
                      </p>
                    </div>
                  </div>
                  {/* <img className="" src="/entrylevel.png" alt="" /> */}
                  <Image
  src="/entrylevel.png"
  alt="Entry Level logo"
  width={500}   // Adjust as needed
  height={300}  // Adjust as needed
  className=""
/>
                </div>
              </Link>
              <Link
                href={
                  "https://drive.google.com/file/d/1_1iriSPUi9K_0xF1Po0MV7sr47YZzzBU/view?usp=sharing"
                }
              >
                <div
                  className={`border-2 rounded-lg border-purple border-solid relative overflow-hidden`}
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    className={
                      hoverIndex === 1
                        ? "absolute w-full bg-purple/40 h-full top-0 ease-in-out duration-1000"
                        : "absolute w-full bg-purple/40 h-full -top-[100%] ease-in-out duration-1000"
                    }
                  >
                    <div className="flex flex-col p-5 text-center text-white items-center ">
                      <h1 className="font-bold text-3xl">FABs Logistics</h1>
                      <p className="pt-3 pb-3">
                        A Business plan for Fabs logistics company! that
                        specialize in delivering efficient and reliable
                        logistics solutions tailored to your business needs.
                      </p>
                    </div>
                  </div>
                  {/* <img className="" src="/fabpresentation.png" alt="" /> */}
                  <Image
  src="/fabpresentation.png"
  alt="Entry Level logo"
  width={500}   // Adjust as needed
  height={300}  // Adjust as needed
  className=""
/>
                </div>
              </Link>

              {/* <Link href={"https://moviebox-bay.vercel.app/"}>
                <div
                  className={`border-2 rounded-lg border-purple border-solid relative overflow-hidden
                `}
                  onMouseEnter={() => handleMouseEnter(2)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    className={
                      hoverIndex === 2
                        ? "absolute w-full bg-purple/40 h-full top-0 ease-in-out duration-1000"
                        : "absolute w-full bg-purple/40 h-full -top-[100%] ease-in-out duration-1000"
                    }
                  >
                    <div className="flex flex-col p-5 text-center text-white items-center ">
                      <h1 className="font-bold text-3xl">Movie Box</h1>
                      <p className="pt-3 pb-3">
                        Movie Web Application MovieBox is a web application that
                        allows users to explore information about movies. It
                        provides details such as movie titles, release dates,
                        runtimes, overviews, and more. The application fetches
                        data from the The Movie Database (TMDb) API to provide
                        up-to-date movie information.
                      </p>
                    </div>
                  </div>
                  <img className="" src="/moviebox.png" alt="" />
                </div>
              </Link> */}
              <div className="pt-7">
                <h2 className="font-bold text-lg lg:text-[30px]">
                  More Projects i have worked on
                </h2>
                <Link href={"/project"}>
                  <div className="mt-3 mb-16 flex bg-black text-white items-center gap-2 rounded-3xl w-[140px] h-[40px] p-3 ">
                    <button className="text-2xl">Projects</button>
                    <MdArrowOutward />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:pt-[80px]  ">
          <h1 className="text-md lg:text-4xl font-bold pb-7">FRONTEND DEVELOPMENT</h1>

          <p className="pb-5">
            I specialize in providing top-notch frontend services to help
            businesses create engaging and user-friendly web experiences.
            Whether you&apos;re a startup looking to establish your online presence
            or an established enterprise aiming to revamp your website, we&apos;ve
            got you covered.
          </p>
          <div className="flex justify-center items-center my-7">
            {/* <img
              className="h-[30rem] w-[60rem] rounded-3xl"
              src="/frontendimg.jpg"
              alt=""
            /> */}
            <Image
  src="/frontendimg.jpg"
  alt="Frontend development preview"
  width={600}   // 60rem = 960px
  height={500}  // 30rem = 480px
  className=" rounded-3xl"
/>
          </div>

          <h4 className="pt-5 pb-5 font-bold">Services</h4>
          <div className="flex items-center gap-3 pb-3">
            <FaArrowRight />
            <p>Website Design</p>
          </div>
          <div className="flex items-center gap-3 pb-3">
            <FaArrowRight />
            <p>Frontend Devlopment</p>
          </div>
          <div className="flex items-center gap-3 pb-3">
            <FaArrowRight />
            <p>Responsive Web Development</p>
          </div>
          <div className="flex items-center gap-3 pb-3">
            <FaArrowRight />
            <p>UI/UX Design</p>
          </div>
          <div className="flex items-center gap-3 pb-3">
            <FaArrowRight />
            <p>Website Optimization</p>
          </div>

          <h4 className="font-bold pt-5 pb-5">Why Choose Us</h4>
          <p className="pb-3">* Experienced Team </p>
          <p className="pb-3">* Custom Solutions </p>
          <p className="pb-3">* Collaborative Approach</p>
          <p className="pb-3">* Customer Satisfaction </p>
          <Link href={"/project"}>
            <div className="mt-3 mb-16 flex bg-black text-white dark:bg-white dark:text-black items-center gap-2 rounded-3xl w-[140px] h-[40px] p-3">
  <button className="text-2xl">Projects</button>
  <MdArrowOutward />
</div>

          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
