import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import workImg from "../../assets/work.png";
import { motion } from "framer-motion";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import CarouselWork from "./Carousel";

const Projects = () => {
  return (
    <main
      className="relative bg-[#1A1E23] min-h-screen flex justify-center items-center py-4 sm:py-8"
      id="projects"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-center bg-repeat opacity-30 md:bg-[length:calc(100%/3)] lg:bg-[length:calc(100%/4)]"
        style={{
          backgroundImage: `url(${workImg})`,
          backgroundSize: "calc(100% / 2)",
        }}
      />

      <section className="relative w-full max-w-7xl mx-auto px-4 py-8 sm:py-12">
        {/* Container */}
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
            className="text-5xl sm:text-4xl md:text-5xl font-semibold text-[#12F7D6]"
          >
            Projects
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 10,
              delay: 0.2,
            }}
            className="mt-2"
          >
            <FontAwesomeIcon
              icon={faMinus}
              className="text-[#12F7D6]"
              style={{ fontSize: "2rem", width: "2rem", height: "2rem" }} // Adjusted size for smaller screens
            />
          </motion.div>

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
            className="text-white text-xs sm:text-sm md:text-lg mt-2 px-4"
          >
            I had the pleasure of working with these awesome projects
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 10,
              delay: 0.6,
            }}
            className="w-full max-w-full md:max-w-screen-md mt-6 px-4 md:px-0 mx-auto"
          >
            <CarouselWork />
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
