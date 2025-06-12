import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGitSquare } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaProductHunt, FaJira, FaTrello } from "react-icons/fa6";
import { FaFigma, FaSlack } from "react-icons/fa";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss, SiStyledcomponents, SiMiro } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

const About = () => {
  return (
    <div className="mb-5 text-purple dark:bg-black dark:text-white">
      <Navbar />
      <section className="pt-[150px]">
        <div className="about mx-5 py-7">
          <h5 className="font-bold lg:text-2xl">About</h5>
          <div className="flex flex-col-reverse lg:flex-row justify-between gap-5">
            <div>
              <h1 className="font-bold py-5 text-sm lg:text-4xl">
                Innovative Dreamweaver and Tech pioneer || Mastering the Art of
                Product innovations and Frontend Magic || Navigating the
                Intersections of Management, Education, and Digital Innovation ||
                Crafting Tomorrow&apos;s Experiences Today.
              </h1>
              <div className="flex gap-5 lg:pt-[80px] pb-12">
                <a
                  href="https://www.linkedin.com/in/sunday-akinlose"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex justify-center items-center rounded-full bg-purple text-white w-14 h-14 transition-transform ease-in-out duration-300 hover:scale-110 cursor-pointer">
                    <FaLinkedin className="h-10" />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/akinlose_sunday"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex justify-center items-center rounded-full bg-purple text-white w-14 h-14 transition-transform ease-in-out duration-300 hover:scale-110 cursor-pointer">
                    <FaInstagram className="h-10" />
                  </div>
                </a>
                <a
                  href="https://twitter.com/sunepafolksy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex justify-center items-center rounded-full bg-purple text-white w-14 h-14 transition-transform ease-in-out duration-300 hover:scale-110 cursor-pointer">
                    <FaSquareXTwitter className="h-10" />
                  </div>
                </a>
                <a
                  href="mailto:akinlosesunday8@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex justify-center items-center rounded-full bg-purple text-white w-14 h-14 transition-transform ease-in-out duration-300 hover:scale-110 cursor-pointer">
                    <MdMarkEmailUnread className="h-10" />
                  </div>
                </a>
              </div>
            </div>
            <div>
              <Image
                src="/self.jpg"
                alt="Sunday Akinlose"
                className="h-[28rem] w-[90rem]"
                width={1440}
                height={448}
              />
            </div>
          </div>
        </div>

        <div>
          <p className="m-5 lg:py-8 text-sm lg:text-base">
            I am a certified scrum master with a multifaceted background that
            seamlessly integrates key areas of expertise in product management,
            frontend development, and technical product management. My journey
            began with a strong foundation in Management, supported by the
            acquisition of a Master&apos;s degree in Educational Management and
            Personnel Administration (University of Ibadan). This educational
            background has equipped me with a deep understanding of management
            principles, fostering my ability to apply strategic leadership and
            administrative prowess within educational institutions.
            <br />
            <br />
            Beyond academia, my passion for technology has driven me to
            cultivate proficiency in Product Management. I excel in
            conceptualizing, developing, and launching innovative products,
            leveraging my skills to craft superior user experiences. In
            parallel, my adeptness in Frontend Web Development adds a technical
            edge, enabling me to translate ideas into user-centric, functional,
            and visually appealing interfaces.
            <br />
            <br />
            Currently engaged in both corporate and freelance capacities, I
            steer projects as a Product Manager while leveraging my Frontend
            Development skills. This fusion of roles positions me as a Technical
            Product Manager, adept at bridging the gap between product strategy
            and technical implementation. My leadership skills, honed through
            personnel administration, contribute to effective team
            collaboration and project execution.
            <br />
            <br />
            I hold certifications in Professional Scrum Master (PSM), Product
            Strategy (PLC), Product-Led Growth (PLGC), Product Analysis, and
            Product Roadmapping (PRC) from Product School, showcasing my
            commitment to staying at the forefront of industry trends.
            Additionally, certifications in Product-Led Certification, Product
            Management Basics, Product Analytics, and AI for Product Management
            underscore my dedication to continuous learning and professional
            growth.
            <br />
            <br />
            My holistic expertise, combining management insights with technical
            acumen, allows me to spearhead projects that harmonize innovation,
            user experience, and strategic objectives. I thrive in dynamic
            environments where I can leverage my multifaceted skill set to drive
            impactful outcomes and foster the seamless integration of management
            and technology. As a leader, I bring strategic vision, effective
            communication, and a collaborative approach to achieving
            organizational goals in both educational and technological realms.
          </p>
        </div>

        <div className="bg-purple/40 m-5 rounded-3xl py-12 px-5 mb-[80px]">
          <h6 className="font-bold">Skills</h6>
          <h1 className="lg:py-5 font-bold lg:text-5xl">tools and technologies</h1>
          <p className="py-3 pb-10 text-sm lg:text-base lg:text-center">
            I am a tool-agnostic individual who embraces versatility in working
            with a variety of tools and technologies. While I have hands-on
            experience with specific tools and technologies, I maintain an open
            mindset and am always eager to explore and learn new tools and
            technologies.
          </p>

          <div className="mx-auto grid grid-cols-3 lg:grid-cols-5 gap-7 items-center text-sm lg:text-base">
            {[
              [FaReact, "React JS"],
              [FaHtml5, "HTML5"],
              [FaCss3, "CSS"],
              [IoLogoJavascript, "JavaScript"],
              [FaGitSquare, "Git"],
              [FaGithub, "Github"],
              [FaBootstrap, "Bootstrap"],
              [SiTailwindcss, "Tailwind CSS"],
              [SiStyledcomponents, "Styled Component"],
              [FaProductHunt, "ProductPlan"],
              [FaJira, "Jira"],
              [FaTrello, "Trello"],
              [FaFigma, "Figma"],
              [FaSlack, "Slack"],
              [SiMiro, "Miro"],
            ].map(([IconComponent, label], index) => (
              <div key={index} className="flex flex-col justify-center items-center">
                <div className="shadow-xl flex justify-center items-center rounded-full bg-purple text-white w-[70px] h-[70px] transition-transform ease-in-out duration-300 hover:scale-110 cursor-pointer">
                  <IconComponent className="h-[30px] w-[30px]" />
                </div>
                <h6 className="mt-2">{label}</h6>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
