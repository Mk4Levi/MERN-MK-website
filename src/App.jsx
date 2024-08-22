import React from "react";
import "./App.css";

import ProjectsProvider from "./contexts/ProjectsContext";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <ProjectsProvider>
      <div className="text-neutral-300 overflow-x-hidden antialised selection:bg-darkblue-25 selection:text-darkblue-400">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        </div>

        <div className="mx-auto px-20">
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Projects />
          <Contact />
        </div>
      </div>
    </ProjectsProvider>
  );
};

export default App;
