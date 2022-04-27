import React from "react";
import { ArrowSmRightIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

import puc from "../../assets/uni/puc.png";
import cbse from "../../assets/uni/cbse.png";
import gndu from "../../assets/uni/gndu.png";
import pup from "../../assets/uni/pu_p.png";
import icse from "../../assets/uni/icse.png";

const unidata = [
  {
    id: "0",
    title: "Panjab University Chandigarh",
    describe:
      "Previous years paper of both UG & PG Courses under PANJAB UNIVERSITY (PU CHANDIGARH) are provided. Just click the link below.",
    link: "/",
    image: puc,
  },
  {
    id: "1",
    title: "CBSE",
    describe:
      "We provide 10th and 12th board previous years paper. Arraged in a systematic way just click the button below to view.",
    link: "/",
    image: cbse,
  },
  {
    id: "2",
    title: "Guru Nanak Dev University (GNDU)",
    describe:
      "Previous years paper of both UG & PG Courses under GURU NANAK DEV UNIVERSITY AMRITSAR are provided. Just click the link below.",
    link: "/",
    image: gndu,
  },
  {
    id: "3",
    title: "Punjabi University Patiala",
    describe:
      "Previous years paper of both UG & PG Courses under PUNJABI UNIVERSITY (PU PATIALA) are provided. Just click the link below.",
    link: "/",
    image: pup,
  },
  {
    id: "4",
    title: "ICSE/ISC",
    describe:
      "We provide 10th and 12th board previous years paper. Arraged in a systematic way just click the button below to view.",
    link: "/",
    image: icse,
  },
];

const Secondsections = () => {
  return (
    <>
      <section className="max-w-screen-lg mx-auto p-8 my-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-28 justify-items-center">
          {unidata.map((index) => (
            <div key={index.id}>
              <UniCols
                title={index.title}
                desc={index.describe}
                to={index.link}
                image={index.image}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Secondsections;

const UniCols = ({ title, desc, to, image }) => {
  return (
    <div className="bg-white drop-shadow-lg rounded-[30px] relative max-w-[450px] h-full p-4">
      <div className="absolute -top-24 left-3">
        <img src={image} alt="uni" className="w-[250px] h-[250px]" />
      </div>
      <div className="flex flex-col mt-36 items-start text-left">
        <h1 className="text-xl md:text-3xl text-zinc-800">{title}</h1>
        <p className="text-sm md:text-md text-gray-400 mt-2 md:mt-4">{desc}</p>
        <Link
          to={to}
          className="p-1 hover:ring-2 ring-gray-600 rounded-full transition-all mt-6"
        >
          <div className="flex items-center gap-5 bg-white rounded-full drop-shadow-md px-5 py-3 md:px-8 md:py-4">
            <h1 className="text-lg">Visit Course</h1>
            <ArrowSmRightIcon className="h-7 w-7 -rotate-[32deg]" />
          </div>
        </Link>
      </div>
    </div>
  );
};