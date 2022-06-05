import { Helmet } from "react-helmet-async";
import { MailOpenIcon, PhoneIcon, UserIcon } from "@heroicons/react/outline";
import { ReactComponent as TwitterIcon } from "../assets/socialMediaIcons/twitter.svg";
import { ReactComponent as FacebookIcon } from "../assets/socialMediaIcons/facebook.svg";
import { ReactComponent as InstagramIcon } from "../assets/socialMediaIcons/instagram.svg";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | Easypaper</title>
      </Helmet>
      <div className="my-16 max-w-screen-lg mx-auto px-6 sm:py-24 py-14">
        <h1 className="text-center text-5xl md:text-6xl">
          We’d Love to hear from you
        </h1>
        <div className="bg-gradient-to-br from-[#3675F0] to-[#2651A6] mt-10 sm:p-8 text-white rounded-3xl flex flex-col md:flex-row gap-16">
          <div className="md:w-1/2 h-auto flex flex-col justify-between">
            <div className="m-6">
              <h1 className="text-3xl">
                Feel free to get in touch with us in any convenient way
              </h1>
              <p className="text-white/70 mt-4">
                Internships allow students the opportunity to apply their
                knowledge and skills in a professional setting while still in
                college. Internships offer carefully planned and monitored work
                experience with the goal being to gain additional knowledge from
                on the job exposure.
              </p>
            </div>

            <div className="m-6">
              <div className="flex items-center gap-3 mt-10 md:mt-0 hover:-translate-y-1 transition duration-200">
                <PhoneIcon className="w-6 h-6" />
                <a href="tel:" className="text-sm">
                  +91-8699443948
                </a>
              </div>
              <div className="flex items-center gap-3 mt-5 hover:-translate-y-1 transition duration-200">
                <MailOpenIcon className="w-6 h-6" />
                <a href="mailto:" className="text-sm">
                  easypaper.in@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-10 flex gap-10 ml-6 mr-6">
              <a
                href="https://www.instagram.com/easypaper.in/"
                target="_blank"
                rel="noreferrer"
                className="hover:-translate-y-1 transition duration-300"
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/easypaper.in"
                target="_blank"
                rel="noreferrer"
                className="hover:-translate-y-1 transition duration-300"
              >
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/easypaperIN"
                target="_blank"
                rel="noreferrer"
                className="hover:-translate-y-1 transition duration-300"
              >
                <TwitterIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="bg-white text-black md:w-1/2 rounded-3xl p-6 m-3 sm:m-6">
            <form autoComplete="off">
              <div className="flex flex-col">
                <label htmlFor="name">Your Name</label>
                <div className="flex gap-3 border rounded-lg mt-2 group focus-within:border-[#3186D5] transition duration-200 items-center">
                  <UserIcon className="w-6 h-6 group-focus:text-[#3186D5] opacity-70 ml-3" />
                  <input
                    id="name"
                    type="text"
                    className="w-full h-full focus:outline-none px-2 py-4 rounded-lg"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col mt-3">
                <label htmlFor="mobile">Mobile</label>
                <div className="flex gap-3 border rounded-lg mt-2 group focus-within:border-[#3186D5] transition duration-200 items-center">
                  <PhoneIcon className="w-6 h-6 group-focus:text-[#3186D5] opacity-70 ml-3" />
                  <input
                    id="mobile"
                    type="tel"
                    className="w-full h-full focus:outline-none px-2 py-4 rounded-lg"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col mt-3">
                <label htmlFor="mail">Mail</label>
                <div className="flex gap-3  border rounded-lg mt-2 group focus-within:border-[#3186D5] transition duration-200 items-center">
                  <MailOpenIcon className="w-6 h-6 opacity-70 ml-3" />
                  <input
                    id="mail"
                    type="email"
                    className="w-full h-full focus:outline-none px-2 py-4 rounded-lg"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col mt-3">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="w-full h-32 border rounded-lg px-2 py-2 mt-2"
                />
              </div>
              <button className="mt-6 bg-[#3E6ADB] px-5 py-4 rounded-xl text-white hover:scale-[0.98] active:scale-[0.97] transition duration-200">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
