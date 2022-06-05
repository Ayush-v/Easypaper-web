import React from "react";
import Heroimage from "../../assets/home/heroImage.webp";
import lines from "../../assets/home/lines.png";
import { Link as LinkS } from "react-scroll";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, translateY: 90 },
  show: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const item = {
  hidden: { opacity: 0, translateY: 30 },
  show: { opacity: 1, translateY: 0 },
};

const Herosection = () => {
  return (
    <>
      <section className="flex flex-col items-center my-12">
        <div className="flex md:flex-row flex-col gap-8 items-center justify-center max-w-screen-lg mx-auto py-20 px-8">
          <div className="max-w-[1fr] relative">
            <motion.div
              className="w-[80%]"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={item}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl">
                  Welcome To <span className="text-[#3675F0]">EasyPaper</span>
                </h1>
                <img src={lines} alt="" className="absolute -top-4 -left-7" />
              </motion.div>
              <motion.p
                variants={item}
                className="text-lg text-gray-400 md:max-w-[75%] mt-2 mb-8"
              >
                one stop solution for your upcoming Uni Exam and many more...
              </motion.p>

              <motion.div variants={item}>
                <LinkS
                  to="download"
                  smooth={true}
                  spy={true}
                  duration={1000}
                  className="text-lg text-white bg-black px-6 py-4 rounded-xl cursor-pointer hover:-translate-y-1"
                >
                  Download App
                </LinkS>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            className="max-w-[1fr]"
            initial={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={Heroimage} alt="img" className="w-full h-auto max-w-lg" />
          </motion.div>
        </div>
        <motion.p
          initial={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1.5 }}
          className="text-gray-400"
        >
          over 20,000+ trusted users around all the sectors
        </motion.p>
      </section>
    </>
  );
};

export default Herosection;
