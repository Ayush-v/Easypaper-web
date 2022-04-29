import React from "react";

import login from "../../assets/workingImages/login.png";
import course from "../../assets/workingImages/course.png";
import sem from "../../assets/workingImages/sem.png";
import pay from "../../assets/workingImages/pay.png";

const Worksection = () => {
  return (
    <>
      <section className="max-w-screen-lg mx-auto p-8">
        <div>
          <h1 className="text-center text-4xl md:text-5xl mb-16">
            How it Works
          </h1>
          <div className="flex flex-col md:flex-row w-full justify-between items-center gap-10 md:gap-0">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Worksection;
