import React from "react";
import logo from "../assets/userAsset/logo.png";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="mb-18 flex flex-col md:flex-row items-center justify-between py-6 px-6 md:px-0">
      <div className="flex flex-shrink-0 items-center mb-4 md:mb-0">
        <motion.img
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          src={logo}
          className="w-40"
          alt="Logo"
        ></motion.img>
      </div>
      <div className="flex gap-5">
        <div className="flex items-center justify-center gap-4 text-2xl">
          <a
            href="https://github.com/mk4levi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/mk4coder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/mk4coder/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://manthan-mk-portfolio.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <SiLeetcode /> */}
            <img src={logo} width={40} />
          </a>
        </div>
        {/* <div>
          <button className='bg-white rounded-md p-1 text-black text-extrabold'>Resources</button>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
