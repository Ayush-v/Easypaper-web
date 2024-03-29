import { ReactComponent as Iphone } from "../../assets/downloadapp/iphone.svg";
import { ReactComponent as Appstore } from "../../assets/downloadapp/appstore.svg";
import { ReactComponent as Playstore } from "../../assets/downloadapp/playstore.svg";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, translateY: 30 },
  show: {
    opacity: 1,
    translateY: 0,
    transition: {
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
};

const item = {
  hidden: { opacity: 0, translateY: 30 },
  show: { opacity: 1, translateY: 0 },
};

const DownloadAppSection = () => {
  return (
    <>
      <section className="max-w-screen-lg mx-auto mb-24 mt-52" id="download">
        <motion.div className="flex flex-col md:flex-row justify-evenly items-center mx-3 p-8 md:p-0 bg-[#F8F8FA] shadow-lg rounded-[40px]">
          <div className="-translate-y-[160px]">
            <Iphone className="max-w-[328px] max-h-[678.27px]" />
          </div>
          <motion.div
            className="md:w-1/3 -mt-32 md:m-0"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h1 className="text-3xl" variants={item}>
              Download Mobile App
            </motion.h1>
            <motion.div variants={item}>
              <p className="opacity-50 mt-2">
                Download easy paper app on Android and IOS. For more features
                like solved question papers,Important questions and many more...
              </p>
            </motion.div>
            <motion.div
              variants={item}
              className="mt-6 flex flex-col items-start gap-5"
            >
              <p className="opacity-50">Available on the</p>
              <a
                href="https://apps.apple.com/in/app/easypaper/id1490101799"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-6 ring-1 ring-gray-300 rounded-xl hover:ring-gray-700 transition duration-300 pl-4 pr-11 py-3 w-fit hover:scale-[0.98] active:scale-[0.97]"
              >
                <Appstore className="w-[44px] h-[44px]" />
                <h1>App Store</h1>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.easy.paper&hl=en"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-6 ring-1 ring-gray-300 hover:ring-gray-700 transition duration-300 rounded-xl pl-4 pr-11 py-3 w-fit hover:scale-[0.98] active:scale-[0.97]"
              >
                <Playstore className="w-[44px] h-[44px]" />
                <h1>Play Store</h1>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default DownloadAppSection;
