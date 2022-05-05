import React from "react";

import iphone from "../../assets/iphone.png";
import appstore from "../../assets/appstore.png";
import playstore from "../../assets/playstore.png";

const DownloadAppSection = () => {
  return (
    <>
      <section className="max-w-screen-lg mx-auto mb-24 mt-52" id="download">
        <div className="flex flex-col md:flex-row justify-evenly items-center mx-3 p-8 md:p-0 bg-[#F8F8FA] drop-shadow-lg rounded-[40px]">
          <div className="-translate-y-[160px]">
            <img
              src={iphone}
              alt="iphone"
              className="max-w-[328px] max-h-[678.27px]"
            />
          </div>
          <div className="md:w-1/3 -mt-32 md:m-0">
            <h1 className="text-3xl ">Download Mobile App</h1>
            <p className="opacity-50 mt-2">
              Download easy paper app on Android and IOS. For more features like
              solved question papers,Important questions and many more...
            </p>

            <div className="mt-6 flex flex-col items-start gap-5">
              <p className="opacity-50">Available on the</p>
              <a
                href="https://apps.apple.com/in/app/easypaper/id1490101799"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-6 ring-1 ring-gray-300 rounded-xl hover:ring-gray-700 transition duration-300 pl-4 pr-11 py-3 w-fit"
              >
                <img src={appstore} alt="appstore" />
                <h1>App Store</h1>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.easy.paper&hl=en"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-6 ring-1 ring-gray-300 hover:ring-gray-700 transition duration-300 rounded-xl pl-4 pr-11 py-3 w-fit"
              >
                <img src={playstore} alt="playstore" />
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
