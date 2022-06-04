import React from "react";

const IntroSection = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto px-8 my-20 justify-items-center place-items-center gap-5 md:gap-0">
        <h1 className="text-5xl md:text-6xl max-w-[300px] justify-self-start">
          What is EasyPaper?
        </h1>
        <p className="max-w-[500px] opacity-75 text-lg">
          It is a complete student run start-up. We provide previous years
          question papers online and we are making a data base of every
          university in India.
        </p>
      </div>
    </>
  );
};

export default IntroSection;
