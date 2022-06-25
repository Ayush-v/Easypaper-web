import illus from "../../assets/illustrations/joinus.png";

const HeroSection = () => {
  return (
    <>
      <div className="mb-16 mt-20 max-w-screen-xl mx-auto px-10 sm:pb-8 lg:pb-0 sm:pt-24 py-14 bg-gradient-to-br from-[#3675F0] to-[#2651A6] clipping rounded-xl text-white flex flex-col relative overflow-hidden md:flex-row gap-9">
        <div>
          <p>intern's welcome</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-8">
            Unleash Your Talent <br /> Potensial Here At <br /> Easypaper
          </h1>
          <div>
            <button className="bg-white text-[#2651A6] px-7 md:px-9 py-2 rounded-lg mr-3 hover:scale-[0.98] active:scale-[0.97] transition duration-200">
              Register
            </button>
            <button className="text-white px-7 md:px-9 py-2 ring-1 ring-white rounded-lg hover:scale-[0.98] active:scale-[0.97] transition duration-200">
              Brochure
            </button>
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
