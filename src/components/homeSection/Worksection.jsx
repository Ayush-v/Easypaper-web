import React from "react";

import login from "../../assets/howItworks/login.webp";
import course from "../../assets/howItworks/course.webp";
import sem from "../../assets/howItworks/sem.webp";
import pay from "../../assets/howItworks/pay.webp";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, translateY: 30 },
  show: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 1.5,
    },
  },
};

const Worksection = () => {
  return (
    <>
      <section className="max-w-screen-lg mx-auto p-8">
        <div>
          <h1 className="text-center text-4xl md:text-5xl mb-16">
            How it Works
          </h1>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row w-full justify-between items-center gap-10 md:gap-0"
          >
            <div className="flex flex-col items-center text-center gap-3 connect">
              <img src={login} alt="login" className="w-[80px] h-auto" />
              <h5>Login</h5>
              <p className="max-w-[132px] text-sm opacity-50">
                Login with your personal google or facebook account
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <img src={course} alt="course" className="w-[80px] h-auto" />
              <h5>Choose Course</h5>
              <p className="max-w-[132px] text-sm opacity-50">
                Choose the course you are studing
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <img src={sem} alt="sem" className="w-[80px] h-auto" />
              <h5>Choose Sem</h5>
              <p className="max-w-[132px] text-sm opacity-50">
                Choose your what year you are in and select the semester
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <img src={pay} alt="pay" className="w-[80px] h-auto" />
              <h5>Pay</h5>
              <p className="max-w-[132px] text-sm opacity-50">
                only pay for what you are using
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Worksection;
