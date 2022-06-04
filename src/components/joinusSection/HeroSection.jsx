const HeroSection = () => {
  return (
    <>
      <div className="mb-16 mt-20 max-w-screen-xl mx-auto px-10 sm:py-24 py-14 bg-gradient-to-br from-[#3675F0] to-[#2651A6] clipping rounded-xl text-white">
        <p>intern's welcome</p>
        <h1 className="text-4xl md:text-6xl mb-8">
          Unleash Your Talent <br /> Potensial Here At <br /> Easypaper
        </h1>
        <button className="bg-white text-[#2651A6] px-7 md:px-9 py-2 rounded-lg mr-3 hover:scale-[0.98] active:scale-[0.97] transition duration-200">
          Register
        </button>
        <button className="text-white px-7 md:px-9 py-2 ring-1 ring-white rounded-lg hover:scale-[0.98] active:scale-[0.97] transition duration-200">
          Brochure
        </button>
      </div>
    </>
  );
};

export default HeroSection;
