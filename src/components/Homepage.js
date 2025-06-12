"use client";
import Image from 'next/image';
import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import Footer from "./Footer";
import Link from "next/link";
import Navbar from "./Navbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import 'keen-slider/keen-slider.min.css';
import { FaCode } from "react-icons/fa";
import { FaChartBar,FaComments,FaTachometerAlt,FaUsers,FaChartLine,FaMoneyBillWave,FaRegClock,FaRocket,FaUsersCog,FaHeadset,FaTasks,FaExclamationTriangle,FaBalanceScale,FaHandshake,FaSearchDollar, FaUserAlt,FaMap,FaSyncAlt,FaRegClipboard      } from 'react-icons/fa';

const Homepage = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };


  return (
    <div className="dark:bg-black ">
      <Navbar />
      <section className="m-4 pt-[120px] text-purple dark:text-white ">
        <div className="p-5  homepage">
          <h6 className=" pb-5 text-purple-500 ">
            Together, we can bring something incredible to life.
          </h6>

          <h2 className="pt-5 font-bold text-2xl lg:text-6xl">
            Scrum Master, Product Manager, Frontend Developer, Technical Product Manager
          </h2>

          <p className="text-center  pt-12 pb-10 text-sm lg:text-base">
            I&apos;m Akinlose Sunday Folorunsho, a Technical Product Manager, Scrum Master and
            passionate Frontend Developer. As a bridge between technical and
            business aspects, I ensure products align with strategy. In frontend
            development, I craft visually stunning websites with flawless
            functionality, turning unique visions into digital realities. My
            commitment to innovation and collaboration drives projects to new
            heights. Let&apos;ss bring your ideas to life!
          </p>
          <div className="flex gap-5 pt-10 pb-12">
          <a
          href="https://www.linkedin.com/in/sunday-akinlose
"target="_blank"
        >
            <div className="flex justify-center items-center rounded-full bg-gray w-14 h-14 transition-transform ease-in-out duration-300 hover:scale-110 cursor-pointer ">
              {" "}
              <FaLinkedin className="h-10" />
            </div>
            </a>
            <a href="https://www.instagram.com/akinlose_sunday" target="_blank">
            <div className="flex justify-center items-center rounded-full bg-gray w-14 h-14 transition-transform ease-in-out duration-300 hover:scale-110 cursor-pointer ">
              {" "}
              <FaInstagram className="h-10" />
            </div></a>
            <a href="https://twitter.com/sunepafolksy" target="_blank">
            <div className="flex justify-center items-center rounded-full bg-gray w-14 h-14 transition-transform ease-in-out duration-300 hover:scale-110 cursor-pointer">
              {" "}
              <FaSquareXTwitter className="h-10" />
            </div></a>
            <a href="mailto:akinlosesunday8@gmail.com" target="_blank">
            <div className="flex justify-center items-center rounded-full bg-gray w-14 h-14 transition-transform ease-in-out duration-300 hover:scale-110 cursor-pointer">
              <MdMarkEmailUnread className="h-10" />
            </div></a>
          </div>
        </div>
        {/* About */}
        <div
          className="flex flex-col-reverse lg:flex-row  gap-5 items-center mt-[30px] p-5 bg-purple/40 rounded-3xl  
         text-sm lg:text-base"
        >
          <div>
            <p className="text-purple-500 pt-10 ">About</p>

            <h4 className="font-bold pt-5  text-6xl">who am I</h4>
            <div className="">
              <p className="pt-12 ">
                As an adept professional, I bring a unique blend of technical
                prowess and strategic vision to my roles in Technical Product
                Management and Frontend Development. My journey includes
                extensive experience in web development, complemented by
                certifications in key product management domains such as Professional Scrum Master(PSM), Product
                Strategy, Product-Led Growth, Analysis, and Roadmapping. The
                pursuit of continuous learning is evident through certifications
                from Product School, Entry level, Pendo.io, and Coursera,
                covering a spectrum from Product-Led Certification to AI for
                Product Management and Frontend Skills. This comprehensive skill
                set positions me as a dynamic force in technical product
                management, enabling me to seamlessly bridge the gap between
                technology and strategic product development.
              </p>
              <Link href={"/about"}>
                <div className="mt-10 mb-5 flex bg-black text-white items-center gap-2 rounded-3xl w-[130px] p-3 ">
                  <button className="text-lg ">about me</button>
                  <MdArrowOutward />
                </div>
              </Link>

              <div className="flex items-center gap-2  font-semibold">
              <Link target="_blank" href="https://drive.google.com/drive/folders/1WYh6sELT8U8Aq_zUaB_3LZ0T1VyfDAFe?usp=drive_link" download="document.pdf">Download CV</Link>

                <MdDownload />
              </div>
            </div>
          </div>
          <div>
            {" "}
            {/* <img
              className="[height:400px] [width:150rem]"
              src="/sunday.jpg"
              alt="my image"
            /> */}
            <Image
  src="/sunday.jpg"
  alt="my image"
  width={2400}  // 150rem = 150 * 16px = 2400px
  height={400}
  className="h-[400px] w-[150rem]"
/>
          </div>
        </div>

        <div className="homeTwo text-sm lg:text-base text-white p-5 mt-10 rounded-3xl">
          <div className="flex justify-center lg:justify-end pt-7 pb-6">
            <h4 className=" font-bold ">WHAT SET ME APART:</h4>
          </div>
          <div className="flex gap-5 justify-around items-center">
            <FaArrowRight />
            <p className="">
              Dual Expertise: My proficiency spans both frontend development and technical product management, allowing me to contribute effectively to the entire product development lifecycle.
            </p>
          </div>
          
          <div className="flex gap-5 justify-around items-center">
            <FaArrowRight />
            <p className="pt-5">
              Diverse Certification Portfolio: I have earned certifications
              across key product management domains, including Product Strategy,
              Product-Led Growth, Analysis, and Roadmapping, demonstrating a
              commitment to staying ahead in the dynamic field of product
              management.
            </p>
          </div>
          
          <div className="flex gap-5 justify-around items-center">
            <FaArrowRight />
            <p className="pt-5">
              Continuous Learning: I actively pursue continuous learning,
              obtaining certifications from reputable institutions such as
              Product School, Entry level, Pendo.io, and Coursera. This
              commitment ensures that my skills are up-to-date with the latest
              industry trends and technologies.
            </p>
          </div>
          <div className="flex gap-5 justify-around items-center">
            <FaArrowRight />
            <p className="pt-5">
              Proven Impact: My experience includes practical contributions to
              coding, designing, and testing web applications, showcasing
              tangible results and a history of delivering successful projects.
            </p>
          </div>

          <h4 className="pt-8 ps-8 font-semibold">SKILL SETS:</h4>
           {/* slider */}
           <div className=" text-xs md:text-sm py-10 ">
           <Swiper 
           
  slidesPerView={4}
  spaceBetween={10}
  pagination={false}
  autoplay={{
    delay: 1, // Delay between slides in milliseconds
    disableOnInteraction: false, // Keep autoplay even after user interaction
    
  }}
  speed={1800} // Controls the speed of slide transition
  loop={true} // Enables looping of slides
  modules={[Pagination, Autoplay]} // Include Autoplay in modules
  className="mySwiper"
>
  <SwiperSlide className="flex items-center justify-center h-full ">
  <div className="flex flex-col items-center justify-center text-center">
    <FaCode  className="h-[80px] w-[50px] "/>
    <p>Software development</p>
  </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center h-full">
  <div className="flex flex-col items-center justify-center text-center">
    <FaChartBar className="h-[80px] w-[50px]"/>
    <p>Product Analysis</p>
  </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center h-full">
  <div className="flex flex-col items-center justify-center text-center">
    <FaSyncAlt className="h-[80px] w-[50px]"/>
    <p>Agile Methodology</p>
  </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center h-full">
  <div className="flex flex-col items-center justify-center text-center">
    <FaMap  className="h-[80px] w-[50px]"/>
    <p>Roadmapping and Prioritization</p>
  </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center h-full">
  <div className="flex flex-col items-center justify-center text-center">
    <FaUserAlt  className="h-[80px] w-[50px]"/>
    <p>User-Centric Design</p>
  </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center h-full">
  <div className="flex flex-col items-center justify-center text-center">
    <FaSearchDollar className="h-[80px] w-[50px]"/>
    <p>Market Research</p>
  </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center h-full">
  <div className="flex flex-col items-center justify-center text-center">
    <FaHandshake className="h-[80px] w-[50px]"/>
    <p>Stakeholder Management</p>
  </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center h-full">
  <div className="flex flex-col items-center justify-center text-center">
    <FaBalanceScale  className="h-[80px] w-[50px]"/>
    <p>Resources Allocation</p>
  </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center h-full">
  <div className="flex flex-col items-center justify-center text-center">
    <FaExclamationTriangle className="h-[80px] w-[50px]"/>
    <p>Risk Management</p>
  </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center h-full">
  <div className="flex flex-col items-center justify-center text-center">
    <FaTasks className="h-[80px] w-[50px]"/>
    <p>Product Management</p>
  </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center h-full">
  <div className="flex flex-col items-center justify-center text-center">
    <FaHeadset  className="h-[80px] w-[50px]"/>
    <p>Customer Focus</p>
  </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center h-full">
  <div className="flex flex-col items-center justify-center text-center">
    <FaUsersCog  className="h-[80px] w-[50px]"/>
    <p>Team Leadership</p>
  </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center h-full">
  <div className="flex flex-col items-center justify-center text-center">
    <FaRegClipboard  className="h-[80px] w-[50px]"/>
    <p> Product Plan</p>
  </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center h-full">
  <div className="flex flex-col items-center justify-center text-center">
    <FaRocket className="h-[80px] w-[50px]"/>
    <p> Product Launch</p>
  </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center h-full">
  <div className="flex flex-col items-center justify-center text-center">
    <FaRegClock className="h-[80px] w-[50px]"/>
    <p>Time Management</p>
  </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center h-full">
  <div className="flex flex-col items-center justify-center text-center">
    <FaMoneyBillWave className="h-[80px] w-[50px]"/>
    <p>Pricing Strategy</p>
  </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center h-full">
  <div className="flex flex-col items-center justify-center text-center">
    <FaChartLine className="h-[80px] w-[50px]"/>
    <p>Market Analysis</p>
  </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center h-full">
  <div className="flex flex-col items-center justify-center text-center">
    <FaUsers className="h-[80px] w-[50px]"/>
    <p>User Engagement</p>
  </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center h-full">
  <div className="flex flex-col items-center justify-center text-center">
    <FaTachometerAlt className="h-[80px] w-[50px]"/>
    <p>KPI Measurement</p>
  </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center h-full">
  <div className="flex flex-col items-center justify-center text-center">
    <FaComments className="h-[80px] w-[50px]"/>
    <p>Interpersonal Communication</p>
  </div>
</SwiperSlide>

</Swiper>
           </div>

        </div>

        <div className="flex flex-col items-center p-5">
          <h1 className=" font-bold text-2xl pt-6 pb-5">
            PORTFOLIO
          </h1>
          <p className=" text-sm lg:text-base">
            Explore my portfolio to see samples of my work. Each project tells a
            uniques story of design and fun
          </p>
          <div className="grid lg:grid-cols-3  gap-5 pt-14 ">
            <Link href={"https://image-gallery-pi-three.vercel.app/"}>
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
                  <div className="flex flex-col p-5 text-center text-white items-center ">
                    <h1 className="font-bold text-sm lg:text-3xl">
                      The Imaginarium Gallary
                    </h1>
                    <p className="pt-3 text-sm lg:text-base pb-3">
                      This is a React Application built with Vite and React
                      Bootstrap that allows you to create a draggable image
                      gallery with search functionality
                    </p>
                    <div className="text-sm lg:text-base">
                      <h6> login:user@example.com</h6>
                      <h6> password:12345</h6>
                    </div>
                  </div>
                </div>
                {/* <img className="" src="/imaginarium.png" alt="" /> */}
                <Image
  src="/imaginarium.png"
  alt="Imaginarium logo"
  width={500} // set an appropriate width in px
  height={300} // set an appropriate height in px
  className=""
/>
              </div>
            </Link>
            <Link href={"https://fabs-logistics.vercel.app/"}>
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
                    <h1 className="font-bold text-sm lg:text-3xl">
                      FABs Logistics
                    </h1>
                    <p className="pt-3 text-sm lg:text-base pb-3">
                      A website for a logistics company! that specialize in
                      delivering efficient and reliable logistics solutions
                      tailored to your business needs. The mission of the
                      website is to streamline supply chain and ensure the
                      seamless movement of goods and convey passenger with
                      comfortable travels.
                    </p>
                  </div>
                </div>
                {/* <img className="" src="/fabimg.png" alt="" /> */}
                <Image
  src="/fabimg.png"
  alt="FAB image"
  width={500}   // adjust based on actual image or layout
  height={300}  // adjust based on actual image or layout
  className=""
/>
              </div>
            </Link>

            <Link href={"https://moviebox-bay.vercel.app/"}>
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
                    <h1 className="font-bold text-sm lg:text-3xl">Movie Box</h1>
                    <p className="pt-3 pb-3 text-sm lg:text-base">
                      Movie Web Application MovieBox is a web application that
                      allows users to explore information about movies. It
                      provides details such as movie titles, release dates,
                      runtimes, overviews, and more. The application fetches
                      data from the The Movie Database (TMDb) API to provide
                      up-to-date movie information.
                    </p>
                  </div>
                </div>
                {/* <img className="" src="/moviebox.png" alt="" /> */}

<Image
  src="/moviebox.png"
  alt="MovieBox logo"
  width={500}   // adjust width
  height={300}  // adjust height
  className=""
/>
              </div>
            </Link>
            <div className="pt-7">
              <h2 className="font-bold  text-[30px]">
                More Projects i have worked on
              </h2>
              <Link href={"/project"}>
                <div className="mt-3 mb-16 flex bg-black text-white items-center gap-2 rounded-3xl w-[140px] h-[40px] p-3 dark:bg-white dark:text-black">
                  <button className="text-2xl ">Projects</button>
                  <MdArrowOutward />
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* Testimonial */}
        <div className="testimonial bg-purple/40 rounded-3xl pt-10 mt-10 mb-10 pb-[100px] flex flex-col items-center ">
          <h4 className="font-bold text-[20px] mb-3">Client Testimonials</h4>
          <p className="mb-[50px]">Hear what my clients have to say about me</p>

          <div className="text-sm md:text-xs flex-col flex lg:flex-row gap-10 px-20">
            <div className="flex flex-col items-center ">
              
             {/* <img src="/sam.jpg" className="rounded-full  w-[120px] h-[120px] mb-[5px] " alt="" />    */}
             <Image
  src="/sam.jpg"
  alt="Profile photo"
  width={120}
  height={120}
  className="rounded-full w-[120px] h-[120px] mb-[5px]"
/>
              
             <h6 className="mb-6 font-bold flex flex-col items-center justify-center text-center">
  Akindunjoye Samuel <br/> Test Engineer
</h6>

              <p className="text-center text-sm lg:text-sm">
                {" "}
                Working with Sunday has been excellent. His technical expertise and focus on user experience have streamlined the testing process. He communicates complex ideas clearly and prioritizes key issues, helping us deliver high-quality products on time. I look forward to future collaborations.
              </p>
            </div>
            <div className="flex flex-col items-center">
            {/* <img src="/philip.jpg" className="rounded-full  w-[120px] h-[120px] mb-[5px] " alt="" />   */}
            <Image
  src="/philip.jpg"
  alt="Philip's profile photo"
  width={120}
  height={120}
  className="rounded-full w-[120px] h-[120px] mb-[5px]"
/>
            <h6 className="mb-6 font-bold flex flex-col items-center justify-center text-center">
  Esigie Phillip <br/> Direct Sales Representative
</h6>

              <p className="text-center text-sm lg:text-sm">
                {" "}
                Sunday&apos;s expertise and clear communication have greatly supported our sales efforts. His insights and availability help us address client needs effectively, making a significant impact on our success. I look forward to continuing our collaboration.
              </p>
            </div>
          </div>
        </div>
        {/*  contact div */}
        <div className="py-7  flex flex-col items-center relative">
          {/* <img
            className="[height:30rem] [width:45rem] absolute bottom-0 right-0"
            src="/plastic-card.png"
            alt=""
          /> */}
          <Image
  src="/plastic-card.png"
  alt="Plastic card"
  width={720}  // 45rem = 45 * 16px
  height={480} // 30rem = 30 * 16px
  className="w-[45rem] h-[30rem] absolute bottom-0 right-0"
/>
          <h4 className="pb-12 font-bold text-2xl">GET IN TOUCH</h4>
          <p className="pb-5 flex text-center">
            Ready to discuss your project or you have any question? <br></br>
            I&apos;d love to hear from you! Contact me today to get started on your
            next project.
          </p>

          <div className="pb-10 pt-10">
            
            <div className="flex items-center gap-2">
              <MdMarkEmailUnread />
              <span className="font-bold">Email:</span>{" "}
              akinlosesunday8@gmail.com
            </div>
            <div className=" flex items-center gap-2">
              <FaPhoneAlt />
              <span className="font-bold">Phone:</span> 08104941162
            </div>
          </div>
          <div className="py-5 px-10 rounded-lg border-2 border-purple border-solid ">
            <p className="text-sm">
             <strong>Connect with Me</strong>  <br /> stay connected on social media and follow
              me on{" "}
            </p>
            <div className="pt-5">
              <div className="flex justify-around">
                <div className="flex items-center gap-1">
                  <FaFacebookSquare />
                  <p>Facebook</p>
                </div>

                <div className="flex items-center gap-1">
                  <FaLinkedin />
                  <p>Linkedin</p>
                </div>
              </div>
              <div className="pt-2 flex justify-around">
                <div className="flex items-center gap-1">
                  <FaSquareXTwitter />
                  <p>Twitter</p>
                </div>

                <div className="flex items-center gap-1">
                  <FaInstagram />
                  <p>Instagram</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs text-center pt-16">
            Whether you&apos;re a startup looking for a brand-new website or a
            business seeking a redesign,<br></br> I&apos;m here to bring your vision
            to life. Let&apos;s collaborate and create something extraordinary
            together.
          </p>

          <h6 className="text-xs font-bold pt-12 pb-10">
            LETS CREATE SOMETHING BEAUTIFUL
          </h6>
        </div>
        {/* licence and certifications */}
          <div className=" text-xs md:text-sm py-10 ">
            <h4 className="ps-8 pb-4 font-semibold text-lg">CERTIFICATIONS</h4>
           <Swiper 
           
  slidesPerView={5}
  spaceBetween={20}
  pagination={false}
  autoplay={{
    delay: 1, // Delay between slides in milliseconds
    disableOnInteraction: false, // Keep autoplay even after user interaction
    
  }}
  speed={1800} // Controls the speed of slide transition
  loop={true} // Enables looping of slides
  modules={[Pagination, Autoplay]} // Include Autoplay in modules
  className="mySwiper"
>
  <SwiperSlide className="flex items-center justify-center h-full ">
  <div className="flex gap-2 flex-col items-center justify-center text-center">
    {/* <img src="/psm.jpg" alt="" className=" "/> */}
    <Image
  src="/psm.jpg"
  alt="PSM image"
  width={500}   // Adjust based on actual size or layout needs
  height={300}  // Adjust as needed
  className=""
/>
    <p>Professional Scrum Master (PSM)</p>
  </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center h-full">
  <div className="flex gap-2 flex-col items-center justify-center text-center">
   {/* <img src="/training.png" alt="" className=" "/> */}
   <Image
  src="/training.png"
  alt="Training image"
  width={500}   // Adjust based on actual size or layout needs
  height={300}  // Adjust as needed
  className=""
/>
    <p>PSM Training </p>
  </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center h-full">
  <div className="flex gap-2 flex-col items-center justify-center text-center">
   {/* <img src="/dev.png" alt="" className=" "/> */}
   <Image
  src="/dev.png"
  alt="DEV image"
  width={500}   // Adjust based on actual size or layout needs
  height={300}  // Adjust as needed
  className=""
/>
    <p>Product Management </p>
  </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center h-full">
  <div className="flex gap-2 flex-col items-center justify-center text-center">
    {/* <img src="/arti.png" alt="" className=" "/> */}
    <Image
  src="/arti.png"
  alt="PSM image"
  width={500}   // Adjust based on actual size or layout needs
  height={300}  // Adjust as needed
  className=""
/>
    <p>Artificial Intelligence Micro-Certificate</p>
  </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center h-full">
  <div className="flex gap-2 flex-col items-center justify-center text-center">
   {/* <img src="/analytics.png" alt="" className=" "/> */}
   <Image
  src="/analytics.png"
  alt="analytics image"
  width={500}   // Adjust based on actual size or layout needs
  height={300}  // Adjust as needed
  className=""
/>
    <p>Product Analytics Micro-Certificate</p>
  </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center h-full">
  <div className="flex gap-2 flex-col items-center justify-center text-center">
    {/* <img src="/led.png" alt="" className=" "/> */}
    <Image
  src="/led.png"
  alt="led image"
  width={500}   // Adjust based on actual size or layout needs
  height={300}  // Adjust as needed
  className=""
/>
    <p>Product Led Growth Micro-Certification</p>
  </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center h-full">
  <div className="flex gap-2 flex-col items-center justify-center text-center">
    {/* <img src="/launch.png" alt="" className=" "/> */}
    <Image
  src="/launch.png"
  alt="launch image"
  width={500}   // Adjust based on actual size or layout needs
  height={300}  // Adjust as needed
  className=""
/>
    <p>Product Launches Micro-Certificate</p>
  </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center h-full">
  <div className="flex gap-2 flex-col items-center justify-center text-center">
    {/* <img src="/strategy.png" alt="" className=" "/> */}
    <Image
  src="/strategy.png"
  alt="strategy image"
  width={500}   // Adjust based on actual size or layout needs
  height={300}  // Adjust as needed
  className=""
/>
    <p>Product Strategy Micro-Certificate</p>
  </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center h-full">
  <div className="flex gap-2 flex-col items-center justify-center text-center">
    {/* <img src="/roadmap.png" alt="" className=" "/> */}
    <Image
  src="/roadmap.png"
  alt="roadmap image"
  width={500}   // Adjust based on actual size or layout needs
  height={300}  // Adjust as needed
  className=""
/>
    <p>Product Roadmapping Micro-Certificate</p>
  </div>
</SwiperSlide>
<SwiperSlide className="flex  items-center justify-center h-full">
  <div className="flex gap-2 flex-col items-center justify-center text-center">
   {/* <img src="/pm.png" alt="" className=" "/> */}
   <Image
  src="/pm.png"
  alt="PM image"
  width={500}   // Adjust based on actual size or layout needs
  height={300}  // Adjust as needed
  className=""
/>
    <p>Product Management</p>
  </div>
</SwiperSlide>
<SwiperSlide className="flex  items-center justify-center h-full">
  <div className="flex gap-2 flex-col items-center justify-center text-center">
    {/* <img src="/react.png" alt="" className=" "/> */}
    <Image
  src="/react.png"
  alt="react image"
  width={500}   // Adjust based on actual size or layout needs
  height={300}  // Adjust as needed
  className=""
/>
    <p>React Basics</p>
  </div>
</SwiperSlide>
<SwiperSlide className="flex  items-center justify-center h-full">
  <div className="flex  gap-2 flex-col items-center justify-center text-center">
    {/* <img src="/pm1.png" alt="" className=" "/> */}
    <Image
  src="/pm1.png"
  alt="PM1 image"
  width={500}   // Adjust based on actual size or layout needs
  height={300}  // Adjust as needed
  className=""
/>
    <p>Product Management</p>
  </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center h-full">
  <div className="flex gap-2 flex-col items-center justify-center text-center">
    {/* <img src="/pm2.png" alt="" className=" "/> */}
    <Image
  src="/pm2.png"
  alt="PM2 image"
  width={500}   // Adjust based on actual size or layout needs
  height={300}  // Adjust as needed
  className=""
/>
    <p> Product Management Internship</p>
  </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center h-full">
  <div className="flex gap-2 flex-col items-center justify-center text-center">
   {/* <img src="/html.png" alt="" className=" "/> */}
   <Image
  src="/html.png"
  alt="html image"
  width={500}   // Adjust based on actual size or layout needs
  height={300}  // Adjust as needed
  className=""
/>
    <p>HTML5</p>
  </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center h-full">
  <div className="flex gap-2 flex-col items-center justify-center text-center">
   {/* <img src="/ai.png" alt="" className=" "/> */}
   <Image
  src="/ai.png"
  alt="ai image"
  width={500}   // Adjust based on actual size or layout needs
  height={300}  // Adjust as needed
  className=""
/>
    <p>AI for Product Management</p>
  </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center h-full">
  <div className="flex gap-2 flex-col items-center justify-center text-center">
   {/* <img src="/pac.png" alt="" className=" "/> */}
   <Image
  src="/pac.png"
  alt="Pac image"
  width={500}   // Adjust based on actual size or layout needs
  height={300}  // Adjust as needed
  className=""
/>
    <p>Product Analytics Certified</p>
  </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center h-full">
  <div className="flex gap-2 flex-col items-center justify-center text-center">
   {/* <img src="/pmb.png" alt="" className=" "/> */}
   <Image
  src="/pmb.png"
  alt="PSM image"
  width={500}   // Adjust based on actual size or layout needs
  height={300}  // Adjust as needed
  className=""
/>
    <p>Product Management Basics</p>
  </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center h-full">
  <div className="flex gap-2 flex-col items-center justify-center text-center">
   {/* <img src="/plc.png" alt="" className=" "/> */}
   <Image
  src="/plc.png"
  alt="Plc image"
  width={500}   // Adjust based on actual size or layout needs
  height={300}  // Adjust as needed
  className=""
/>
    <p>Product-Led Certified</p>
  </div>
</SwiperSlide>
</Swiper>
           </div>
      </section>
      <div className="mt-[20px] mb-5">
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
