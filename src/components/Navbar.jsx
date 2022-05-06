import React, { useState } from "react";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import LoginModal from "./LoginModal";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full mx-auto bg-white/[0.4] backdrop-blur-xl">
      <div className="flex justify-between items-center max-w-[1234px] mx-auto h-[60px] p-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="" className="max-w-[42px] rounded-[10px]" />
        </Link>

        <button
          className="md:hidden absolute top-[4.5] right-6"
          aria-controls="primary-navigation"
          aria-expanded="false"
          onClick={() => setShow(!show)}
        >
          {show ? (
            <XIcon className="w-8 h-8" />
          ) : (
            <MenuAlt1Icon className="h-8 w-8" />
          )}
        </button>

        <nav
          id="primary-navigation"
          data-visible={show ? "true" : "false"}
          className="absolute top-12 right-6 md:relative md:top-0 md:right-0 flex flex-col items-center md:flex-row md:w-full w-52  shadow-lg rounded-lg mt-2 md:shadow-none divide-y md:divide-y-0 divide-gray-100 primary-navigation z-50 bg-white md:bg-transparent"
        >
          <ul className="flex flex-col md:flex-row md:mx-auto md:gap-3 md:divide-y-0 divide-y divide-gray-100 w-full md:w-auto md:p-0 p-1">
            <LinkS
              className="px-4 py-4 cursor-pointer"
              to="university"
              smooth={true}
              duration={1000}
              onClick={() => setShow(!show)}
            >
              University
            </LinkS>
            <Link
              to="/govt"
              onClick={() => setShow(!show)}
              className="px-4 py-4"
            >
              Govt.Jobs
            </Link>
            <Link
              to="/contact"
              onClick={() => setShow(!show)}
              className="px-4 py-4"
            >
              Contact
            </Link>
            <Link
              to="/joinUs"
              onClick={() => setShow(!show)}
              className="px-4 py-4"
            >
              Join Us
            </Link>
          </ul>
          <LoginModal navState={show} setNavState={setShow} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
