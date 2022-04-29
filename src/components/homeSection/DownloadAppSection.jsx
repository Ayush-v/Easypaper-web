import React from "react";

import appstore from "../../assets/appstore.png";
import playstore from "../../assets/playstore.png";

const DownloadAppSection = () => {
  return (
    <>
      <section className="max-w-screen-lg mx-auto p-8 my-8 bg-[#F8F8FA] rounded-[40px]">
        <div className="flex flex-col md:flex-row justify-evenly items-center">
          <div className=""></div>
          <h1>Mobile Image</h1>
          <div className="w-1/3">
            <h1 className="text-3xl ">Download mobile App</h1>
            <p className="opacity-50">
              Download easy paper app on Android and IOS. Nisl, convallis risus
              semper facilisis. Eget morbi ut urna, at nec.
            </p>

            <div className="mt-6 flex flex-col items-start gap-5">
              <p className="opacity-50">Available on the</p>
              <a
                href="/"
                className="flex items-center gap-6 ring-1 ring-gray-300 rounded-xl pl-4 pr-11 py-3 w-fit"
              >
                <img src={appstore} alt="" />
                <h1>App Store</h1>
              </a>
              <a
                href="/"
                className="flex items-center gap-6 ring-1 ring-gray-300 rounded-xl pl-4 pr-11 py-3 w-fit"
              >
                <img src={playstore} alt="" />
                <h1>Play Store</h1>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DownloadAppSection;
