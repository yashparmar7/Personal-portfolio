import { motion } from "framer-motion";
import About from "./components/global/About";
import HeroSection from "./components/global/HeroSection";
import Navbar from "./components/global/Navbar";
import Skills from "./components/global/Skills";
import Projects from "./components/global/Projects";
import Contact from "./components/global/Contact";
import Footer from "./components/global/Footer";

const App = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.8,
        }}
        className="container border-b border-[#43454D] mt-2 "
      ></motion.div>
      {/* Navbar */}

      {/* Hero */}
      <HeroSection />
      {/* Hero */}

      {/* About */}
      <About />
      {/* About */}

      {/* Skills */}
      <Skills />
      {/* Skills */}

      {/* Projects */}
      <Projects />
      {/* Projects */}

      {/* Contact */}
      <Contact />
      {/* Contact */}

      {/* Footer */}
      <Footer />
      {/* Footer */}
    </>
  );
};

export default App;
