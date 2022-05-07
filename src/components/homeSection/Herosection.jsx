import React from "react";
import Heroimage from "../../assets/heroImage.png";
import lines from "../../assets/lines.png";
import { Link as LinkS } from "react-scroll";
import { Fade } from "react-reveal";

const Herosection = () => {
  return (
    <>
      <section className="flex flex-col items-center my-12">
        <div className="flex md:flex-row flex-col gap-8 items-center justify-center max-w-screen-lg mx-auto py-20 md:py-30 px-8">
          <div className="max-w-[1fr] relative">
            <div className="w-[80%]">
              <Fade bottom cascade>
                <h1 className="text-5xl md:text-6xl lg:text-7xl">
                  Welcome To <span className="text-[#3675F0]">EasyPaper</span>
                </h1>
                <img src={lines} alt="" className="absolute -top-4 -left-7" />

                <p className="text-lg text-gray-400 md:max-w-[75%] mt-2 mb-8">
                  one stop solution for your upcoming Uni Exam and many more...
                </p>
              </Fade>

              <LinkS
                to="download"
                smooth={true}
                duration={1000}
                className="text-lg text-white bg-black px-6 py-4 rounded-xl cursor-pointer"
              >
                Download App
              </LinkS>
            </div>
          </div>
          <div className="max-w-[1fr]">
            <img src={Heroimage} alt="img" className="w-full h-auto max-w-lg" />
          </div>
        </div>
        <p className="text-gray-400">
          over 20,000+ trusted users around all the sectors
        </p>
      </section>
    </>
  );
};

export default Herosection;
