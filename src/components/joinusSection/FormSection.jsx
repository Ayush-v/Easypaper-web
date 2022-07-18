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
import { useState } from "react";

const FormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    mail: "",
    city: "",
    mobile: "",
    college: "",
    courseAndYear: "",
    field: "Human Resources",
  });
  const [laoding, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function submitInternDetails(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(process.env.REACT_APP_HEROKU_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setSuccess(data.message);
          setFormData({
            name: "",
            address: "",
            mail: "",
            city: "",
            mobile: "",
            college: "",
            courseAndYear: "",
            field: "Human Resources",
          });
          setLoading(false);
          setTimeout(() => {
            setSuccess(null);
          }, 2500);
        });
    } catch (err) {
      setLoading(false);
      setError(
        "something went wrong please try again! or this email or mobile already exist"
      );
    }
  }

  return (
    <>
      <div className="max-w-screen-xl mx-auto sm:p-8 p-4 my-14">
        <h1 className="text-left text-4xl md:text-5xl">
          INTERNSHIP APPLICATION FORM
        </h1>

        <div
          className="bg-white shadow-xl mt-5 text-black rounded-3xl p-6"
          id="form"
        >
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
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
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
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full h-full focus:outline-none px-2 py-4 rounded-lg"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-3">
                  <label htmlFor="mail">E-Mail</label>
                  <div className="flex gap-3  border rounded-lg mt-2 group focus-within:border-[#3186D5] transition duration-200 items-center">
                    <MailOpenIcon className="w-6 h-6 opacity-70 ml-3 group-focus-within:text-[#3186D5] group-focus-within:opacity-100" />
                    <input
                      id="mail"
                      type="email"
                      name="mail"
                      value={formData.mail}
                      onChange={handleChange}
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
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
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
                      maxLength="10"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
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
                      name="college"
                      value={formData.college}
                      onChange={handleChange}
                      className="w-full h-full focus:outline-none px-2 py-4 rounded-lg"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-3">
                  <label htmlFor="courseAndYear">Course & Year</label>
                  <div className="flex gap-3 border rounded-lg mt-2 group focus-within:border-[#3186D5] transition duration-200 items-center">
                    <BookmarkAltIcon className="w-6 h-6 group-focus-within:text-[#3186D5] group-focus-within:opacity-100 opacity-70 ml-3" />
                    <input
                      id="courseAndYear"
                      type="text"
                      name="courseAndYear"
                      value={formData.courseAndYear}
                      onChange={handleChange}
                      className="w-full h-full focus:outline-none px-2 py-4 rounded-lg"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-3">
                  <label htmlFor="hear">Choose Your Internship Field</label>
                  <div className="flex gap-3 border rounded-lg mt-2 group focus-within:border-[#3186D5] transition duration-200 items-center">
                    <UsersIcon className="w-6 h-6 opacity-70 ml-3 group-focus-within:text-[#3186D5] group-focus-within:opacity-100" />
                    <select
                      id="hear"
                      className="w-full h-full focus:outline-none px-2 py-4 active:bg-white active:bg-transparent appearance-none bg-white bg-transparent"
                      name="field"
                      value={formData.field}
                      onChange={handleChange}
                    >
                      <option value="Human Resources">
                        Human Resources (HR)
                      </option>
                      <option value="Marketing">Marketing</option>
                      <option value="Data Analytics">Data Analytics</option>
                      <option value="Content Development">
                        Content Development
                      </option>
                      <option value="Other">Others</option>
                    </select>
                    <ChevronDownIcon className="w-4 h-4 opacity-70 mr-4" />
                  </div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              disabled={laoding ? true : false}
              className="mt-6 mx-auto bg-[#3E6ADB] px-10 py-4 rounded-xl text-white hover:scale-[0.98] active:scale-[0.97] transition duration-200"
            >
              <div className="flex justify-center items-center">
                <span>
                  {laoding ? <span className="loader mr-2"></span> : null}
                </span>
                <span className={laoding ? "opacity-60" : ""}>Submit</span>
              </div>
            </button>
            {success && (
              <p className="text-green-500 bg-white shadow-lg px-9 py-3 mt-6 rounded-lg top-3 left-2">
                {success}!
              </p>
            )}
            {error && (
              <p className="text-red-500 bg-white shadow-lg px-9 py-3 mt-6 rounded-lg top-3 left-2">
                {error}
                {Error}
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default FormSection;
