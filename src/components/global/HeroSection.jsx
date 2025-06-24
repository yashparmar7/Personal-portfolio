import { motion } from "framer-motion";
import MyPhoto from "../../assets/my-photo-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typewriter from "typewriter-effect";
import MyPdf from "../../Resume/Yashparmar_resume.pdf";
import {
  faBagShopping,
  faDownload,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  return (
    <div className="container mx-auto min-h-screen p-4 md:p-8" id="home">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 10,
          delay: 0.4,
        }}
        className="flex justify-center items-start mb-10 md:mb-0"
      >
        <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] text-[#98FAEC]">
          Developer
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 bg-[#292F36] p-6 md:p-8 rounded-lg">
        {/* First Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 10,
            delay: 0.6,
          }}
          className="flex justify-center items-center"
        >
          <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md bg-[#1A1E23] text-white rounded-br-[120px] rounded-tl-[120px] p-6 md:p-8 lg:p-12 border-t-4 border-l-4 border-[#12F7D6]">
            {/* Profile Picture */}
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-[#12F7D6] overflow-hidden">
              <img
                src={MyPhoto}
                alt="My Photo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* User Info */}
            <div className="mt-10 text-center">
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold tracking-wider">
                Yash Parmar
              </h1>
              <p className="text-xs md:text-sm lg:text-md font-mono text-gray-400 tracking-widest">
                <Typewriter
                  options={{
                    strings: ["MERN Stack Developer", "PHP Web Developer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-start space-x-2 md:space-x-4 lg:space-x-6">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-[#12F7D6]"
                  />
                  <span className="text-xs md:text-sm lg:text-base">
                    yashparmar2772004@gmail.com
                  </span>
                </div>
                <div className="flex items-center justify-start space-x-2 md:space-x-4 lg:space-x-6">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-[#12F7D6]"
                  />
                  <span className="text-xs md:text-sm lg:text-base">
                    Surat, Gujarat
                  </span>
                </div>
                <div className="flex items-center justify-strat space-x-2 md:space-x-4 lg:space-x-6">
                  <FontAwesomeIcon
                    icon={faBagShopping}
                    className="text-[#12F7D6]"
                  />
                  <span className="text-xs md:text-sm lg:text-base">
                    Full-time / Fresher
                  </span>
                </div>
                {/* <div className="flex items-center justify-start space-x-2 md:space-x-4 lg:space-x-6">
                  <FontAwesomeIcon icon={faLink} className="text-[#12F7D6]" />
                  <span className="text-xs md:text-sm lg:text-base">
                    www.yashparmar07.com
                  </span>
                </div> */}
              </div>

              {/* Skills */}
              <div className="mt-6 grid grid-cols-3 gap-2 md:gap-3">
                <span className="px-2 py-1 bg-[#12F7D6] text-black text-xs md:text-sm lg:text-base rounded-full">
                  HTML
                </span>
                <span className="px-2 py-1 bg-[#12F7D6] text-black text-xs md:text-sm lg:text-base rounded-full">
                  CSS
                </span>
                <span className="px-2 py-1 bg-[#12F7D6] text-black text-xs md:text-sm lg:text-base rounded-full">
                  JS
                </span>
                <span className="px-2 py-1 bg-[#12F7D6] text-black text-xs md:text-sm lg:text-base rounded-full">
                  REACT
                </span>
                <span className="px-2 py-1 bg-[#12F7D6] text-black text-xs md:text-sm lg:text-base rounded-full">
                  MYSQL
                </span>
                <span className="px-2 py-1 bg-[#12F7D6] text-black text-xs md:text-sm lg:text-base rounded-full">
                  PHP
                </span>
              </div>

              {/* Download CV */}
              <motion.div
                className="mt-8 flex justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <button className="flex items-center space-x-2 px-4 py-2 text-xs md:text-sm lg:text-base bg-white text-black rounded-full shadow-md">
                  <a
                    href={MyPdf}
                    download
                    className="flex items-center space-x-2 px-4 py-2 text-xs md:text-sm lg:text-base bg-white text-black rounded-full shadow-md"
                  >
                    <span>Download CV</span>
                    <FontAwesomeIcon icon={faDownload} />
                  </a>
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Second Column */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 10,
            delay: 0.6,
          }}
          className="flex flex-col justify-start items-start text-white gap-3"
        >
          <h3 className="text-[#12F7D6] text-[14px]">{"<h1>"}</h3>
          <div>
            <h1 className="text-[18px] md:text-[28px] lg:text-[35px] font-semibold">
              Hey
            </h1>
            <h1 className="text-[18px] md:text-[28px] lg:text-[35px] font-semibold">
              I{"'"}m <span className="text-[#12F7D6]">Yash Parmar</span>
            </h1>
            <h1
              className="text-[16px] md:text-[14px] lg:text-[32px] font-semibold"
              style={{ minWidth: "200px" }}
            >
              <Typewriter
                options={{
                  strings: ["MERN Stack Developer", "PHP Web Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
          <h3 className="text-[#12F7D6] text-[14px]">{"</h1>"}</h3>
          <h3 className="text-[#12F7D6] text-[14px]">{"<p>"}</h3>
          <div>
            <h1 className="text-[10px] md:text-[15px] lg:text-[18px]">
              I help business grow by crafting amazing web experiences. If you
              {"'"}re looking for a developer that likes to get stuff done,
            </h1>
          </div>
          <h3 className="text-[#12F7D6] text-[14px]">{"</p>"}</h3>
          <div className="mt-10">
            <a href="#">
              <h1 className="text-3xl text-[#12F7D6] font-mono tracking-normal">
                Let{"'"}s Talk
                <FontAwesomeIcon icon={faEnvelope} className="ml-3" />
              </h1>
            </a>
          </div>
        </motion.div>

        {/* Third Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 10,
            delay: 0.6,
          }}
          className="flex justify-center items-center mt-4 md:mt-0"
        >
          <div className="flex flex-col gap-4 md:gap-6 text-white w-full max-w-[280px] md:max-w-sm bg-[#1A1E23] rounded-[30px] md:rounded-[40px] p-4 md:p-6">
            {/* Section Item */}
            {[
              {
                title: "Programming Languages",
                count: 2,
                desc: "JavaScript, PHP",
              },
              { title: "Libraries", count: 1, desc: "React.js" },
              { title: "Frameworks", count: 1, desc: "Express.js" },
              { title: "Databases", count: 2, desc: "MongoDB, MySQL" },
              { title: "Runtime", count: 1, desc: "Node.js" },
              {
                title: "Total Projects",
                count: 4,
                desc: "StayNest, Let's Notes, VirtualR, Coffee Culture",
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col gap-0.5">
                <div className="flex items-center gap-3">
                  <h1 className="text-xl md:text-2xl text-[#12F7D6]">
                    {item.count}
                  </h1>
                  <p className="text-sm md:text-base">{item.title}</p>
                </div>
                <p className="text-xs text-gray-400 ml-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
