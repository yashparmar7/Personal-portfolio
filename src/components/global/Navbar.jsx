import { useState } from "react";
import hackerImage from "../../assets/hacker.gif";
import search from "../../assets/human-resources.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="container w-full flex items-center justify-between bg-[#292F36] p-4 md:p-6">
      {/* Logo Section */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.4,
        }}
        className="logo flex items-center cursor-pointer"
      >
        <img
          src={hackerImage}
          alt="Hacker Logo"
          className="h-10 w-10 border border-[#12F7D6] rounded-md shadow-lg"
        />
        <h1
          className="ml-3 text-lg md:text-2xl uppercase font-semibold text-[#12F7D6] hover:text-white"
          style={{ minWidth: "160px" }} // Adjusted for smaller screens
        >
          <Typewriter
            options={{
              strings: ["Yash Parmar"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </motion.div>

      {/* Menu Icon for Small Screens */}
      <div className="md:hidden flex items-center">
        <FontAwesomeIcon
          icon={menuOpen ? faTimes : faBars}
          className="text-white text-2xl cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {/* Navigation Links and Social Icons */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.6,
        }}
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex md:items-center md:space-x-6 text-white font-semibold absolute md:static top-[60px] left-0 right-0 bg-[#292F36] md:bg-transparent p-5 md:p-0 z-50`}
      >
        <ul className="flex flex-col items-center md:flex-row md:space-x-6 space-y-4 md:space-y-0">
          <li className="hover:text-[#12F7D6]">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-[#12F7D6]">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-[#12F7D6]">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-[#12F7D6]">
            <a href="#projects">Projects</a>
          </li>
          {/* <li className="hover:text-[#12F7D6]">
            <a href="#">Blogs</a>
          </li> */}
          <li className="hover:text-[#12F7D6]">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.8,
          }}
          className="relative mt-4 md:mt-0 flex justify-center"
        >
          <input
            type="text"
            placeholder="Search"
            className="p-2 pr-10 text-[#292F36] hidden md:block rounded-md border-none outline-none w-40"
          />
          <img
            src={search}
            alt="Search Icon"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 h-6 w-6 hidden md:block"
          />
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 1,
          }}
          className="flex flex-col items-center md:flex-row md:items-center md:space-x-4 mt-4 md:mt-0 space-y-4 md:space-y-0"
        >
          <div className="flex items-center space-x-2 cursor-pointer">
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-[#12F7D6] text-xl"
              />
            </motion.div>
            <span className="text-white">
              <a href="https://github.com/Yashparmar7">Github</a>
            </span>
          </div>

          <div className="flex items-center space-x-2 cursor-pointer">
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-[#12F7D6] text-xl"
              />
            </motion.div>
            <span className="text-white">
              <a href="https://www.instagram.com/__yashhh_x/">Instagram</a>
            </span>
          </div>

          <div className="flex items-center space-x-2 cursor-pointer">
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-[#12F7D6] text-xl"
              />
            </motion.div>
            <span className="text-white">
              <a href="https://www.linkedin.com/in/yash-parmar-8367a025b/">
                LinkedIn
              </a>
            </span>
          </div>
        </motion.div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
