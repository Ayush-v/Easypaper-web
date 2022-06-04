import React from "react";
import { Helmet } from "react-helmet-async";

const JoinUs = () => {
  return (
    <>
      <Helmet>
        <title>Board | Easypaper</title>
      </Helmet>
      <div>
        <div className="my-16 max-w-screen-xl mx-auto px-10 sm:py-24 py-14 bg-gradient-to-br from-[#3675F0] to-[#2651A6] clipping rounded-xl text-white">
          <p>intern's welcome</p>
          <h1 className="text-4xl md:text-6xl mb-8">
            Unleash Your Talent <br /> Potensial Here At <br /> Easypaper
          </h1>
          <button className="bg-white text-[#2651A6] px-7 md:px-9 py-2 rounded-lg mr-3">
            Register
          </button>
          <button className="text-white px-7 md:px-9 py-2 ring-1 ring-white rounded-lg ">
            Brochure
          </button>
        </div>

        <div className="flex flex-wrap max-w-screen-xl px-8 gap-6 mx-auto my-14 justify-center">
          <div className="bg-white  rounded-lg p-8 max-w-[380px]">
            <div className="bg-white rounded-full w-10 h-10 shadow-lg mb-6"></div>
            <h3 className="text-2xl">Our Aim</h3>
            <p className="opacity-75">
              An endeavor to make it the biggest online education quantum.We
              provide support to students to encapsulate their ideas.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-[380px]">
            <div className="bg-white rounded-full w-10 h-10 shadow-lg mb-6"></div>
            <h3 className="text-2xl">Who We are Seeking ?</h3>
            <p className="opacity-75">
              The program is seeking the most highly motivated students.
              Candidates must have completed atleast 12th standard.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 max-w-[380px]">
            <div className="bg-white rounded-full w-10 h-10 shadow-lg mb-6"></div>
            <h3 className="text-2xl">Purpose</h3>
            <p className="opacity-75">
              The purpose of our internship program is to allow students to
              explore a possible career field through real-world experience.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto px-8 my-16 justify-items-center place-items-center gap-5 md:gap-0">
          <h1 className="text-5xl md:text-6xl max-w-[300px] justify-self-start">
            What is EasyPaper?
          </h1>
          <p className="max-w-[500px] opacity-75 text-lg">
            It is a complete student run start-up. We provide previous years
            question papers online and we are making a data base of every
            university in India.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#3675F0] to-[#2651A6] px-6 py-16 my-12">
          <div className="max-w-screen-xl mx-auto text-white flex justify-center items-center flex-wrap gap-14 text-center">
            <div>
              <h1 className="text-4xl">20000+</h1>
              <p className="text-2xl">WEBSITE HITS</p>
            </div>
            <div>
              <h1 className="text-4xl">1000+</h1>
              <p className="text-2xl">PAPER COMPLETE</p>
            </div>
            <div>
              <h1 className="text-4xl">400+</h1>
              <p className="text-2xl">STUDENT APPLIED</p>
            </div>
            <div>
              <h1 className="text-4xl">1400+</h1>
              <p className="text-2xl">SESSIONS</p>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto p-8 my-14 flex justify-center items-center flex-wrap gap-14">
          <div className="py-8 px-10  ring-1 rounded-3xl text-center max-w-[420px]">
            <h1 className="text-4xl opacity-80 mb-16">
              How internship will Benifit you?
            </h1>
            <p className="text-md opacity-60">
              Gain hands-on experience at a local business to build upon skills
              learned in the classroom and to establish a clear connection
              between education and work.
            </p>
          </div>
          <div className="py-8 px-10  ring-1 rounded-3xl text-center max-w-[420px]">
            <h1 className="text-4xl opacity-80 mb-16">
              Why do we Provide Internships to students?
            </h1>
            <p className="text-md opacity-60">
              Internships allow students the opportunity to apply their
              knowledge and skills in a professional setting while still in
              college. Internships offer carefully planned and monitored work
              experience.
            </p>
          </div>
          <div className="py-8 px-10  ring-1 rounded-3xl text-center max-w-[420px]">
            <h1 className="text-4xl opacity-80 mb-16">What we provide?</h1>
            <p className="text-md opacity-60">
              We provide online tutorials for honing your skills. Apart from the
              primary focus on making the question papers largely available
              online, the intern also has to initiate and stimulate the students
              to think out of the box.
            </p>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto p-8 my-14">
          <h1 className="text-left text-4xl md:text-5xl">
            INTERNSHIP APPLICATION FORM
          </h1>

          <form></form>
        </div>
      </div>
    </>
  );
};

export default JoinUs;
