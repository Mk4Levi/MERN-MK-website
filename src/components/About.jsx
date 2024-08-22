import React from "react";
import aboutGif from "../assets/userAsset/about.gif";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="overflow-y-hidden">
      <h1 className="my-20 text-center text-blue-200 text-4xl">About Me</h1>
      <div className="flex items-center flex-wrap overflow-x-hidden">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="" src={aboutGif} alt="aboutGif" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">
              {" "}
              I'm Manthan Kumar, a passionate Full Stack Developer with a deep
              interest for crafting innovative and high-quality digital
              solutions. I thrive on the thrill of problem-solving and enjoy
              turning complex challenges into elegant solutions. Whether it's
              creating intuitive user interfaces, optimizing database
              performance, or implementing secure authentication systems, I am
              driven by a commitment to delivering exceptional results.
              Collaboration and communication are at the core of my work
              philosophy. I thrive in diverse teams, where I can leverage my
              strong interpersonal skills to effectively communicate ideas,
              contribute insights, and work together towards a common goal.
              Education: - B.Tech. Engineering from National Institute of
              Technology, AP (2020 - 2024) - CGPA: 8.4/10. Feel free to explore
              my portfolio to see some of the projects I've worked on. If you
              have any questions or would like to discuss a potential
              collaboration, please don't hesitate to reach out via "Contact Me"
              section. I'm excited to connect with like-minded individuals and
              organizations who share a passion for leveraging technology to
              make a positive impact.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
