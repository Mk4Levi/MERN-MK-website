import React from "react";
import {
  SiReact,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { GrNode } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  FaGitAlt,
  FaDocker,
  FaGithub,
  FaBootstrap,
  FaHtml5,
  FaCss3,
  FaJava,
  FaPython,
  FaSass,
} from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { motion } from "framer-motion";

import harkirat from "../assets/achievements/harkirat.png";
import scrimba from "../assets/achievements/scrimba.png";
import udemy from "../assets/achievements/udemy.jpg";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-blue-200 text-center text-4xl"
      >
        My Certificates of Achievements
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/*  */}

        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          {/* <SiReact className="text-6xl text-cyan-400" /> */}
          <a
            href="https://app.100xdevs.com/certificate/verify/ZZN8ZT7Z"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={harkirat} width={700} alt="harkirat" />
          </a>
        </motion.div>

        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          {/* <SiTypescript className="text-6xl text-[#2F74C0]" /> */}
          <a
            href="https://www.udemy.com/certificate/UC-58c5951d-d5ab-49b2-a8e6-1976f479d47c"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={udemy} width={700} alt="udemy" />
          </a>
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          {/* <IoLogoJavascript className="text-6xl text-yellow-400" /> */}
          <a
            href="https://v1.scrimba.com/certificate/un2n92sD/gfrontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={scrimba} width={700} alt="scrimba" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
