import React, { useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

import Logo from "../assets/Logo.svg";
import { ChevronDownIcon, MenuAlt1Icon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center max-w-[1234px] mx-auto h-[60px] p-8">
        <Link to="/">
          <img src={Logo} alt="logo" className="w-[42px] h-[42px] rounded-xl" />
        </Link>

        <button
          className="md:hidden absolute top-6 right-6"
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
          className="absolute top-14 right-6 md:relative md:top-0 md:right-0 flex flex-col items-center md:flex-row md:w-full w-40 bg-white shadow-lg mt-2 md:bg-none md:shadow-none divide-y md:divide-y-0 divide-gray-100 primary-navigation"
        >
          <ul className="flex flex-col md:flex-row md:mx-auto md:gap-8 md:divide-y-0 divide-y divide-gray-100">
            <Link to="/board" className="flex items-end px-4 py-4">
              Board <ChevronDownIcon className="h-5 w-5" />
            </Link>
            <li className="px-4 py-4">
              <Menu as="div" className="relative inline-block text-left">
                <Menu.Button className="inline-flex items-center">
                  University <ChevronDownIcon className="h-5 w-5" />
                </Menu.Button>

                <Transition
                  as={Fragment}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Menu.Items className="origin-top-right absolute right-0 md:left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/university"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Panjab University &#40;CHD&#41;
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/university"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          GNDU &#40;Amritsar&#41;
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/university"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Panjabi University &#40;Patiala&#41;
                        </Link>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
            <Link to="/govt" className="flex items-end px-4 py-4">
              Govt.Jobs
            </Link>
            <Link to="/contact" className="flex items-end px-4 py-4">
              Contact
            </Link>
          </ul>

          <div className="flex gap-4 flex-col m-2 md:m-0 md:flex-row">
            <Link
              to="signup"
              className="bg-black text-white px-5 py-2 rounded-lg"
            >
              Sign up
            </Link>
            <Link
              to="login"
              className="border-solid border-2 border-black px-5 py-2 rounded-lg"
            >
              Log In
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
