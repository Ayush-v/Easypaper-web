import illus from "../../assets/illustrations/saly.png";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <>
      <div className="my-16 max-w-screen-xl mx-auto px-10 sm:pb-8 lg:pb-0 sm:pt-24 py-14 bg-gradient-to-br from-[#3675F0] to-[#2651A6] clipping rounded-b-3xl text-white flex flex-col relative overflow-hidden md:flex-row gap-9">
        <div className="md:my-8">
          <p className="opacity-[0.8]">intern's welcome</p>
          <h1 className="text-5xl lg:text-6xl mb-8">
            Unleash Your <br /> Potensial Here At <br /> Easypaper
          </h1>
          <div className="space-y-2 sm:space-y-0">
            <Link
              className="bg-white text-[#2651A6] px-7 md:px-9 py-3 rounded-lg mr-3 hover:scale-[0.98] active:scale-[0.97] transition duration-200 cursor-pointer"
              to="form"
              smooth={true}
              spy={true}
              duration={1000}
            >
              Register
            </Link>
          </div>
        </div>
        <div className="mx-auto md:-translate-y-20">
          <img src={illus} alt="" className="max-w-md h-auto w-full" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
