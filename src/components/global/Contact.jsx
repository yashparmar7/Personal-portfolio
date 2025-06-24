import { faMinus, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      className="relative min-h-screen bg-[#292F36] flex justify-center items-center"
      id="contact"
    >
      <div className="container relative z-20 flex flex-col items-center justify-center text-center px-4">
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
          className="text-4xl sm:text-5xl font-semibold text-[#12F7D6] mt-4"
        >
          Contact
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
        >
          <FontAwesomeIcon
            icon={faMinus}
            className="text-[#12F7D6] mt-2"
            style={{ fontSize: "3rem", width: "3rem", height: "3rem" }}
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
          className="text-white text-sm md:text-lg mt-2"
        >
          I{"'"}m currently available for work
        </motion.p>

        <div className="mt-16 w-full max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 10,
              delay: 0.6,
            }}
            className="w-[80%] sm:w-[60%] mx-auto flex items-center justify-center py-2 px-6 sm:px-10 rounded-tl-[30px] rounded-br-[30px] bg-[#292F36] border-4 border-[#12F7D6] shadow-lg"
          >
            <h1 className="text-xl sm:text-2xl text-[#12F7D6] tracking-widest">
              Send Me A Message
            </h1>
          </motion.div>

          {/* Form */}
          <div className="w-full flex flex-col justify-center items-center mt-16 space-y-6">
            <div className="flex flex-col space-y-14 w-full">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-11">
                <motion.div
                  initial={{ opacity: 0, x1: 100 }}
                  whileInView={{ opacity: 1, x1: 0 }}
                  viewport={{ once: false }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.7,
                  }}
                  className="flex flex-col justify-start items-start w-full space-y-4"
                >
                  <label htmlFor="name" className="text-[#12F7D6]">
                    Your name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border-b-2 border-[#12F7D6] bg-transparent focus:outline-none focus:border-teal-500 placeholder:text-[#FFFFFF] text-white"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x1: 100 }}
                  whileInView={{ opacity: 1, x1: 0 }}
                  viewport={{ once: false }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.7,
                  }}
                  className="flex flex-col justify-start items-start w-full space-y-4"
                >
                  <label htmlFor="email" className="text-[#12F7D6]">
                    Your email *
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border-b-2 border-[#12F7D6] bg-transparent focus:outline-none focus:border-teal-500 placeholder:text-[#FFFFFF] text-white"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x1: 100 }}
                whileInView={{ opacity: 1, x1: 0 }}
                viewport={{ once: false }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.7,
                }}
                className="flex flex-col justify-start items-start w-full space-y-4"
              >
                <label htmlFor="message" className="text-[#12F7D6]">
                  Your message *
                </label>
                <input
                  type="text"
                  placeholder="Enter your needs"
                  className="w-full border-b-2 border-[#12F7D6] bg-transparent focus:outline-none focus:border-teal-500 placeholder:text-[#FFFFFF] text-white"
                />
              </motion.div>
            </div>

            <motion.button
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.8,
              }}
              className="mt-6 px-8 py-2 bg-[#12F7D6] text-black rounded-full flex items-center justify-center"
            >
              <a href="#">
                Send Message
                <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
              </a>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
