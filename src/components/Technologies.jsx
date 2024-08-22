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
        className="my-20 text-center text-4xl"
      >
        Tech Stacks
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
          <SiReact className="text-6xl text-cyan-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <SiTypescript className="text-6xl text-[#2F74C0]" />
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <IoLogoJavascript className="text-6xl text-yellow-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <GrNode className="text-6xl text-green-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <SiExpress className="text-6xl text-white" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <RiNextjsFill className="text-6xl" />
        </motion.div>

        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-6xl text-green-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <SiMysql className="text-6xl text-green-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <FaDocker className="text-6xl text-blue-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <SiRedux className="text-6xl text-pink-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <FaGithub className="text-6xl text-white-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <FaGitAlt className="text-6xl text-orange-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <IoLogoFirebase className="text-6xl text-yellow-600" />
        </motion.div>

        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <FaCss3 className="text-6xl text-blue-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <FaHtml5 className="text-6xl text-red-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <FaBootstrap className="text-6xl text-pink-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <FaJava className="text-6xl text-orange-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <FaPython className="text-6xl text-yellow-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <TbBrandCpp className="text-6xl text-red-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <BiLogoPostgresql className="text-6xl text-[#31638C]" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <SiTailwindcss className="text-6xl text-cyan-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <FaSass className="text-6xl text-orange-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
