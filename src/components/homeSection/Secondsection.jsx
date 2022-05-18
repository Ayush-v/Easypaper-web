import React, { useState, useEffect } from "react";
import { ArrowSmRightIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

import puc from "../../assets/uni/puc.webp";
import gndu from "../../assets/uni/gndu.webp";
import pup from "../../assets/uni/pu_p.webp";

const container = {
  hidden: {
    opacity: 0,
    translateY: 30,
  },
  show: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

const unidata = [
  {
    describe:
      "Previous years paper of both UG & PG Courses under PANJAB UNIVERSITY (PU CHANDIGARH) are provided. Just click the link below.",

    image: puc,
  },

  {
    describe:
      "Previous years paper of both UG & PG Courses under GURU NANAK DEV UNIVERSITY AMRITSAR are provided. Just click the link below.",

    image: gndu,
  },
  {
    describe:
      "Previous years paper of both UG & PG Courses under PUNJABI UNIVERSITY (PU PATIALA) are provided. Just click the link below.",

    image: pup,
  },
];

const Secondsection = () => {
  const [uniData, setUniData] = useState(null);

  async function api() {
    try {
      await axios
        .post("/user/getAlluniversities")
        .then((res) => {
          return res.data;
        })
        .then((data) => {
          setUniData(data.responseData.universityList);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    api();
  }, []);

  return (
    <>
      <section id="university" className="max-w-screen-lg mx-auto p-8 my-20">
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="text-3xl md:text-4xl max-w-[450px] w-auto"
        >
          We are happy to Say that we work with
        </motion.h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-28 justify-items-center mt-24">
          {uniData &&
            uniData.map((i, index) =>
              i.uniName === "Panjab University" ? (
                <UniCols
                  key={index}
                  title={`${i.uniName} Chandigarh`}
                  desc={unidata[0].describe}
                  to={`/${i.uniName.trim()}/${i.uniId}`}
                  image={unidata[0].image}
                />
              ) : i.uniName === "Punjabi University" ? (
                <UniCols
                  key={index}
                  title={`${i.uniName} Chandigarh`}
                  desc={unidata[2].describe}
                  to={`/${i.uniName.trim()}/${i.uniId}`}
                  image={unidata[2].image}
                />
              ) : i.uniName === "GNDU" ? (
                <UniCols
                  key={index}
                  title={`${i.uniName} Chandigarh`}
                  desc={unidata[1].describe}
                  to={`/${i.uniName.trim()}/${i.uniId}`}
                  image={unidata[1].image}
                />
              ) : null
            )}
        </div>
      </section>
    </>
  );
};

export default Secondsection;

const UniCols = ({ title, desc, to, image, state }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="bg-white shadow-lg rounded-[30px] relative max-w-[450px] h-full p-4"
    >
      <div className="absolute -top-24 left-3">
        <img src={image} alt="uni" className="w-[250px] h-[250px]" />
      </div>

      <div className="flex flex-col mt-36 items-start text-left">
        <h1 className="text-xl md:text-3xl text-zinc-800">{title}</h1>
        <p className="text-sm md:text-md text-gray-400 mt-2 md:mt-4">{desc}</p>
        <Link
          to={to}
          className="p-1 hover:ring-2 ring-gray-600 rounded-full transition duration-300 mt-6"
        >
          <div className="flex items-center gap-5 bg-white rounded-full drop-shadow-md px-5 py-3 md:px-8 md:py-4">
            <h1 className="text-lg">Visit Course</h1>
            <ArrowSmRightIcon className="h-6 w-6 -rotate-[32deg]" />
          </div>
        </Link>
      </div>
    </motion.div>
  );
};
