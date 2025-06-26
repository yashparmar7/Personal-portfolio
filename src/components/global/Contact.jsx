import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { faMinus, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [resultMsg, setResultMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_v63mn7s",
        "template_3mb0gi9",
        formRef.current,
        "dUN_OHQ4MtdLnDqyI"
      )
      .then(
        (result) => {
          setResultMsg("✅ Message sent successfully!");
          console.log(result);
          formRef.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error.text || error);
          setResultMsg("❌ Failed to send message. Try again.");
        }
      )
      .finally(() => {
        setLoading(false);
        setTimeout(() => setResultMsg(""), 5000); // Clear message after 5s
      });
  };

  return (
    <section
      className="relative min-h-screen bg-[#292F36] flex justify-center items-center"
      id="contact"
    >
      <div className="container relative z-20 flex flex-col items-center justify-center text-center px-4">
        {/* TITLE SECTION - same as your code */}
        {/* ... [Keep your animated title and intro text here] */}

        <div className="mt-16 w-full max-w-3xl mx-auto px-4">
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
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="w-full flex flex-col justify-center items-center mt-16 space-y-6"
            >
              <div className="flex flex-col space-y-14 w-full">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-11">
                  <div className="flex flex-col justify-start items-start w-full space-y-4">
                    <label htmlFor="name" className="text-[#12F7D6]">
                      Your name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Enter your name"
                      className="w-full border-b-2 border-[#12F7D6] bg-transparent focus:outline-none placeholder:text-[#FFFFFF] text-white"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start w-full space-y-4">
                    <label htmlFor="email" className="text-[#12F7D6]">
                      Your email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Enter your email"
                      className="w-full border-b-2 border-[#12F7D6] bg-transparent focus:outline-none placeholder:text-[#FFFFFF] text-white"
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-start items-start w-full space-y-4">
                  <label htmlFor="message" className="text-[#12F7D6]">
                    Your message *
                  </label>
                  <textarea
                    name="message"
                    required
                    placeholder="Enter your message"
                    rows="4"
                    className="w-full border-b-2 border-[#12F7D6] bg-transparent focus:outline-none placeholder:text-[#FFFFFF] text-white"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                className={`mt-6 px-8 py-2 bg-[#12F7D6] text-black rounded-full flex items-center justify-center ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
                  </>
                )}
              </motion.button>

              {/* Result Message */}
              {resultMsg && <p className="text-white mt-4">{resultMsg}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
