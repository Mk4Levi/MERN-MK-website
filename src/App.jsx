import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import { motion } from "framer-motion";
// import { useFollowPointer } from "./use-follow-pointer";
// import { useRef } from 'react'

const App = () => {
  // const ref = useRef(null);
  // const { x, y } = useFollowPointer(ref);
  return (
    <div className="text-neutral-300 overflow-x-hidden antialised selection:bg-darkblue-25 selection:text-darkblue-400">
      {/* <motion.div ref={ref} style={{ x, y }} className='box'></motion.div> */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>

      <div className="mx-auto px-20">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        {/* <Experience /> */}
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Home from './pages/Home';
// import About from './pages/About';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';
// import Footer from './components/Footer';

// const App = () => {
//   return (
//     <Router>
//       <div className='flex flex-col bg-darkblue-600 text-white min-h-screen'>
//         <Header />
//         <div className="bg-darkblue-600 text-white flex-1">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//         </div>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
