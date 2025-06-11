// import React from "react";
// import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
// import { MdMarkEmailUnread } from "react-icons/md";
// import Link from "next/link";

// const AsideNav = () => {
//   return (
//     <div className="fixed inset-0 bg-purple text-white flex flex-col p-5 z-50 lg:hidden">
//       <div className="flex justify-center py-4">
//         <img src="memoji.png" alt="Momoji" className="w-[80px] h-" />
//       </div>

//       <ul className="flex flex-col items-center space-y-4 py-8">
//         <li>
//           <Link href="/home">
//             <span className="text-xl">Home</span>
//           </Link>
//         </li>
//         <li>
//           <Link href="/about">
//             <span className="text-xl">About</span>
//           </Link>
//         </li>
//         <li>
//           <Link href="/service">
//             <span className="text-xl">Services</span>
//           </Link>
//         </li>
//         <li>
//           <Link href="/project">
//             <span className="text-xl">Projects</span>
//           </Link>
//         </li>
//         <li>
//           <Link href="/contact">
//             <span className="text-xl">Contacts</span>
//           </Link>
//         </li>
//       </ul>
//       <div className="flex justify-center gap-4 mt-auto py-4">
//         <a href="https://www.linkedin.com/in/sunday-akinlose" target="_blank" rel="noopener noreferrer">
//           <FaLinkedin size={24} />
//         </a>
//         <a href="https://www.instagram.com/akinlose_sunday" target="_blank" rel="noopener noreferrer">
//           <FaInstagram size={24} />
//         </a>
//         <a href="https://twitter.com/sunepafolksy" target="_blank" rel="noopener noreferrer">
//           <FaTwitter size={24} />
//         </a>
//         <a href="mailto:akinlosesunday8@gmail.com" target="_blank" rel="noopener noreferrer">
//           <MdMarkEmailUnread size={24} />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default AsideNav;

import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

const AsideNav = ({ toggleAsideNav }) => {
  return (
    <div className="fixed inset-0 bg-purple text-white flex flex-col p-5 z-50 lg:hidden">
      {/* Close Icon Inside AsideNav */}
      <div className="flex justify-end">
        <IoMdClose
          className="text-3xl text-white cursor-pointer"
          onClick={toggleAsideNav}
        />
      </div>

      <div className="flex justify-center py-4">
        <img src="/memoji.png" alt="Momoji" className="w-[80px] h-auto" />
      </div>

      <ul className="flex flex-col items-center space-y-4 py-8">
        <li>
          <Link href="/home">
            <span className="text-xl">Home</span>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <span className="text-xl">About</span>
          </Link>
        </li>
        <li>
          <Link href="/service">
            <span className="text-xl">Services</span>
          </Link>
        </li>
        <li>
          <Link href="/project">
            <span className="text-xl">Projects</span>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <span className="text-xl">Contacts</span>
          </Link>
        </li>
      </ul>
      <div className="flex justify-center gap-4 mt-auto py-4">
        <a
          href="https://www.linkedin.com/in/sunday-akinlose"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://www.instagram.com/akinlose_sunday"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://twitter.com/sunepafolksy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="mailto:akinlosesunday8@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdMarkEmailUnread size={24} />
        </a>
      </div>
    </div>
  );
};

export default AsideNav;
