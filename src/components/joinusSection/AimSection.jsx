const AimSection = () => {
  return (
    <>
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
    </>
  );
};

export default AimSection;
