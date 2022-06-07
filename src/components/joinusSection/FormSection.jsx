import {
  MailOpenIcon,
  PhoneIcon,
  UserIcon,
  AcademicCapIcon,
  BookmarkAltIcon,
  UsersIcon,
  OfficeBuildingIcon,
  LocationMarkerIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";

const FormSection = () => {
  function submitInternDetails(e) {
    e.preventDefault();
  }

  return (
    <>
      <div className="max-w-screen-xl mx-auto sm:p-8 p-4 my-14">
        <h1 className="text-left text-4xl md:text-5xl">
          INTERNSHIP APPLICATION FORM
        </h1>

        <div className="bg-white shadow-xl mt-5 text-black rounded-3xl p-6">
          <form onSubmit={submitInternDetails} autoComplete="off">
            <div className="flex flex-col sm:flex-row w-full justify-center items-center sm:gap-12">
              <div className="w-full">
                <div className="flex flex-col">
                  <label htmlFor="name">Your Name</label>
                  <div className="flex gap-3 border rounded-lg mt-2 group focus-within:border-[#3186D5] transition duration-200 items-center">
                    <UserIcon className="w-6 h-6 group-focus-within:text-[#3186D5] group-focus-within:opacity-100 opacity-70 ml-3" />
                    <input
                      id="name"
                      type="text"
                      className="w-full h-full focus:outline-none px-2 py-4 rounded-lg"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-3">
                  <label htmlFor="address">Address</label>
                  <div className="flex gap-3  border rounded-lg mt-2 group focus-within:border-[#3186D5] transition duration-200 items-center">
                    <LocationMarkerIcon className="w-6 h-6 group-focus-within:text-[#3186D5] group-focus-within:opacity-100 opacity-70 ml-3" />
                    <input
                      id="address"
                      type="text"
                      className="w-full h-full focus:outline-none px-2 py-4 rounded-lg"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-3">
                  <label htmlFor="mail">Mail</label>
                  <div className="flex gap-3  border rounded-lg mt-2 group focus-within:border-[#3186D5] transition duration-200 items-center">
                    <MailOpenIcon className="w-6 h-6 opacity-70 ml-3 group-focus-within:text-[#3186D5] group-focus-within:opacity-100" />
                    <input
                      id="mail"
                      type="email"
                      className="w-full h-full focus:outline-none px-2 py-4 rounded-lg"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-3">
                  <label htmlFor="city">City</label>
                  <div className="flex gap-3  border rounded-lg mt-2 group focus-within:border-[#3186D5] transition duration-200 items-center">
                    <OfficeBuildingIcon className="w-6 h-6 opacity-70 ml-3 group-focus-within:text-[#3186D5] group-focus-within:opacity-100" />
                    <input
                      id="city"
                      type="text"
                      className="w-full h-full focus:outline-none px-2 py-4 rounded-lg"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex flex-col mt-3 sm:mt-0">
                  <label htmlFor="mobile">Mobile</label>
                  <div className="flex gap-3 border rounded-lg mt-2 group focus-within:border-[#3186D5] transition duration-200 items-center">
                    <PhoneIcon className="w-6 h-6 group-focus-within:text-[#3186D5] group-focus-within:opacity-100 opacity-70 ml-3" />
                    <input
                      id="mobile"
                      type="tel"
                      className="w-full h-full focus:outline-none px-2 py-4 rounded-lg"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-3">
                  <label htmlFor="college">College</label>
                  <div className="flex gap-3 border rounded-lg mt-2 group focus-within:border-[#3186D5] transition duration-200 items-center">
                    <AcademicCapIcon className="w-6 h-6 group-focus-within:text-[#3186D5] group-focus-within:opacity-100 opacity-70 ml-3" />
                    <input
                      id="college"
                      type="text"
                      className="w-full h-full focus:outline-none px-2 py-4 rounded-lg"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-3">
                  <label htmlFor="classAndYear">Class & Year</label>
                  <div className="flex gap-3 border rounded-lg mt-2 group focus-within:border-[#3186D5] transition duration-200 items-center">
                    <BookmarkAltIcon className="w-6 h-6 group-focus-within:text-[#3186D5] group-focus-within:opacity-100 opacity-70 ml-3" />
                    <input
                      id="classAndYear"
                      type="text"
                      className="w-full h-full focus:outline-none px-2 py-4 rounded-lg"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-3">
                  <label htmlFor="hear">How did you hear about us ?</label>
                  <div className="flex gap-3 border rounded-lg mt-2 group focus-within:border-[#3186D5] transition duration-200 items-center">
                    <UsersIcon className="w-6 h-6 opacity-70 ml-3 group-focus-within:text-[#3186D5] group-focus-within:opacity-100" />
                    <select
                      id="hear"
                      className="w-full h-full focus:outline-none px-2 py-4 appearance-none"
                    >
                      <option value="Social">Social</option>
                      <option value="Google">Google</option>
                      <option value="friend">From a friend</option>
                      <option value="Other">Other</option>
                    </select>
                    <ChevronDownIcon className="w-4 h-4 opacity-70 mr-4" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="message">Describe your Skills</label>
              <textarea
                id="message"
                className="w-full h-32 border rounded-lg px-2 py-2 mt-2"
              />
            </div>
            <button
              type="submit"
              className="mt-6 mx-auto bg-[#3E6ADB] px-10 py-4 rounded-xl text-white hover:scale-[0.98] active:scale-[0.97] transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormSection;
