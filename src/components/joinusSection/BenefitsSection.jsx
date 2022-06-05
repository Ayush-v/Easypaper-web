const BenefitsSection = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto p-8 my-14 flex justify-center flex-wrap gap-14">
        <div className="py-8 px-10  ring-1 rounded-3xl text-center max-w-[420px] flex flex-col justify-between items-center">
          <h1 className="text-4xl opacity-80">
            How internship will Benifit you?
          </h1>
          <p className="text-md opacity-60">
            Gain hands-on experience at a local business to build upon skills
            learned in the classroom and to establish a clear connection between
            education and work.
          </p>
        </div>
        <div className="py-8 px-10  ring-1 rounded-3xl text-center max-w-[420px] flex flex-col justify-between items-center gap-8">
          <h1 className="text-4xl opacity-80">
            Why do we Provide Internships to students?
          </h1>
          <p className="text-md opacity-60">
            Internships allow students the opportunity to apply their knowledge
            and skills in a professional setting while still in college.
            Internships offer carefully planned and monitored work experience.
          </p>
        </div>
        <div className="py-8 px-10  ring-1 rounded-3xl text-center max-w-[420px] flex flex-col justify-between items-center">
          <h1 className="text-4xl opacity-80 mb-16">What we provide?</h1>
          <p className="text-md opacity-60">
            We provide online tutorials for honing your skills. Apart from the
            primary focus on making the question papers largely available
            online, the intern also has to initiate and stimulate the students
            to think out of the box.
          </p>
        </div>
      </div>
    </>
  );
};

export default BenefitsSection;
