import React from "react";
import { HERO_CONTENT } from "../Constants/index";
import me from "../assets/userAsset/me.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="pb-2 lg:mb-35">
      <div className="flex flex-wrap justify-between items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-10 text-4xl font-thin tracking-tight lg:mt-10 lg:text-7xl"
            >
              <span className="text-3xl tracking-tight">Hello I'm </span>Manthan
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-purple-300 via-slate-500 to-darkblue-50 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              A Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="rounded-full"
              src={me}
              width={350}
              height={400}
              alt="Kamna"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
