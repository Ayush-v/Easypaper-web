import React, { useState } from "react";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/outline";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import LoginModal from "./LoginModal";
import { motion } from "framer-motion";
import Logo from "./Logo";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <motion.header
      className="fixed top-0 z-50 w-full mx-auto bg-white/[0.4] backdrop-blur-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center max-w-[1234px] mx-auto h-[60px] p-8">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
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
          <ul className="flex flex-col md:flex-row md:mx-auto md:gap-3 md:divide-y-0 divide-y divide-gray-100 w-full md:w-auto md:p-0 p-1 mb-2 md:mb-0">
            <UniLink show={show} setShow={setShow} />
            <NavLink
              to="/govt"
              onClick={() => setShow(!show)}
              className="px-4 py-4 try-test"
              style={({ isActive }) => ({
                color: isActive ? "#2f5ce8" : "black",
                borderBottom: isActive ? "4px solid #2f5ce8" : "none",
              })}
            >
              Govt.Jobs
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setShow(!show)}
              className="px-4 py-4"
              style={({ isActive }) => ({
                color: isActive ? "#2f5ce8" : "black",
                borderBottom: isActive ? "4px solid #2f5ce8" : "none",
              })}
            >
              Contact
            </NavLink>
            <NavLink
              to="/joinUs"
              onClick={() => setShow(!show)}
              className="px-4 py-4"
              style={({ isActive }) => ({
                color: isActive ? "#2f5ce8" : "black",
                borderBottom: isActive ? "4px solid #2f5ce8" : "none",
              })}
            >
              Join Us
            </NavLink>
          </ul>
          <LoginModal navState={show} setNavState={setShow} />
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;

const UniLink = ({ show, setShow }) => {
  const location = useLocation();

  if (location.pathname === "/") {
    return (
      <LinkS
        className="px-4 py-4 cursor-pointer"
        to="university"
        smooth={true}
        spy={true}
        offset={-90}
        duration={1000}
        onClick={() => setShow(!show)}
        activeClass="active"
      >
        University
      </LinkS>
    );
  } else {
    return (
      <NavLink to="/" onClick={() => setShow(!show)} className="px-4 py-4">
        University
      </NavLink>
    );
  }
};
