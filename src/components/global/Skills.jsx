import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import codingImg from "../../assets/coding-1.jpg";
import { faMinus, faTelevision } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import {
  faCss3,
  faHtml5,
  faJs,
  faNode,
  faPhp,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <main
      className="relative bg-[#292F36] min-h-screen flex justify-center items-center"
      id="skills"
    >
      {/* bg-img */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${codingImg})` }}
      />
      <section className="relative w-full max-w-7xl mx-auto px-4 py-8">
        {/* container */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 10,
              delay: 0.2,
            }}
            className="text-5xl font-semibold text-[#12F7D6] mt-4"
          >
            Skills
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 10,
              delay: 0.2,
            }}
          >
            <FontAwesomeIcon
              icon={faMinus}
              className="text-[#12F7D6] mt-2"
              style={{ fontSize: "3rem", width: "3rem", height: "3rem" }}
            />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 10,
              delay: 0.4,
            }}
            className="text-white text-sm md:text-lg mt-2"
          >
            I am striving to never stop learning and improving
          </motion.p>

          {/* Web Dev Card */}
          <div className="mt-16 w-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 10,
                delay: 0.4,
              }}
              className="flex flex-col justify-center items-center rounded-xl bg-[#98FAEC] border-l-8 border-[#0C73B8] p-6"
            >
              <FontAwesomeIcon icon={faTelevision} className="text-black p-1" />
              <h2 className="text-lg font-semibold p-2">Web Development</h2>
              <div>
                <span>HTML - </span>
                <span>CSS - </span>
                <span>JS - </span>
                <span>REACT - </span>
                <span>Express JS - </span>
                <span>Node JS - </span>
                <span>MongoDB - </span>
                <span>MYSQL -</span>
                <span>PHP</span>
              </div>
            </motion.div>
          </div>

          {/* Skills Grid */}
          <div className="mt-12 w-full max-w-4xl mx-auto flex flex-col gap-6">
            {/* First Row: 5 Items */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {/* HTML */}
              <SkillItem icon={faHtml5} color="#E54F26" label="HTML" />
              {/* CSS */}
              <SkillItem icon={faCss3} color="#0C73B8" label="CSS" />
              {/* JavaScript */}
              <SkillItem icon={faJs} color="#E7A020" label="JavaScript" />
              {/* React */}
              <SkillItem icon={faReact} color="#28A9E0" label="React JS" />
              {/* Express */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: false }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 10,
                  delay: 0.9,
                }}
                className="flex flex-col justify-center items-center"
              >
                <div className="w-20 h-20 flex justify-center items-center bg-[#303030] border-2 border-white rounded-full">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
                    alt="Express.js Logo"
                    width="100"
                  />
                </div>
                <h1 className="text-xl text-[#bcbcbc] font-semibold mt-5">
                  Express JS
                </h1>
              </motion.div>
            </div>

            {/* Second Row: 4 Items */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {/* Node JS */}
              <SkillItem icon={faNode} color="#3c873a" label="Node JS" />
              {/* MongoDB */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: false }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 10,
                  delay: 0.9,
                }}
                className="flex flex-col justify-center items-center"
              >
                <div className="w-20 h-20 flex justify-center items-center bg-[#001A2B]  border-2 border-white rounded-full">
                  <img
                    src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
                    alt="MongoDB"
                    className="w-12 h-12"
                  />
                </div>
                <h1 className="text-xl text-[#47A248] font-semibold mt-5">
                  MongoDB
                </h1>
              </motion.div>
              {/* MySQL */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: false }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 10,
                  delay: 1,
                }}
                className="flex flex-col justify-center items-center"
              >
                <div className="w-20 h-20 flex justify-center items-center bg-[#F29111]  border-2 border-white rounded-full">
                  <img
                    src="https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg"
                    alt="MySQL"
                    className="w-10 h-10"
                  />
                </div>
                <h1 className="text-xl text-[#00758F] font-semibold mt-5">
                  MySQL
                </h1>
              </motion.div>
              {/* PHP */}
              <SkillItem icon={faPhp} color="#777BB3" label="PHP" delay={1.1} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Skills;

// 🔧 Helper Component for Skill Items with Font Awesome
const SkillItem = ({ icon, color, label, delay = 0.9 }) => (
  <motion.div
    initial={{ opacity: 0, scaleX: 0 }}
    whileInView={{ opacity: 1, scaleX: 1 }}
    viewport={{ once: false }}
    transition={{
      type: "spring",
      stiffness: 60,
      damping: 10,
      delay,
    }}
    className="flex flex-col justify-center items-center"
  >
    <div
      className="w-20 h-20 flex justify-center items-center rounded-full"
      style={{ backgroundColor: color, border: " 2px solid white" }}
    >
      <FontAwesomeIcon icon={icon} className="text-white text-4xl font-bold" />
    </div>
    <h1 className="text-xl font-semibold mt-5" style={{ color }}>
      {label}
    </h1>
  </motion.div>
);
