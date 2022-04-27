import React, { useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

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
          <Easlog />
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
          className="absolute top-14 right-6 md:relative md:top-0 md:right-0 flex flex-col items-center md:flex-row md:w-full w-52 bg-white shadow-lg rounded-lg mt-2 md:bg-none md:shadow-none divide-y md:divide-y-0 divide-gray-100 primary-navigation z-50"
        >
          <ul className="flex flex-col md:flex-row md:mx-auto md:gap-3 md:divide-y-0 divide-y divide-gray-100 w-full md:w-auto md:p-0 p-1">
            <li className="px-4 py-4">
              <Menu as="div" className="relative inline-block text-left">
                <Menu.Button className="inline-flex items-center">
                  Board <ChevronDownIcon className="h-5 w-5" />
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
                  <Menu.Items className="origin-top-right absolute right-0 md:left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 z-50">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/board"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                          onClick={() => setShow(!show)}
                        >
                          CBSE
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/board"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                          onClick={() => setShow(!show)}
                        >
                          ICSE/ISC
                        </Link>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
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
                          onClick={() => setShow(!show)}
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
                          onClick={() => setShow(!show)}
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
                          onClick={() => setShow(!show)}
                        >
                          Panjabi University &#40;Patiala&#41;
                        </Link>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
            <Link
              to="/govt"
              onClick={() => setShow(!show)}
              className="flex items-end px-4 py-4"
            >
              Govt.Jobs
            </Link>
            <Link
              to="/contact"
              onClick={() => setShow(!show)}
              className="flex items-end px-4 py-4"
            >
              Contact
            </Link>
          </ul>

          <div className="flex gap-4 flex-col m-2 md:m-0 md:flex-row">
            <Link
              to="signup"
              onClick={() => setShow(!show)}
              className="bg-black text-white px-5 py-2 rounded-lg"
            >
              Sign up
            </Link>
            <Link
              to="login"
              onClick={() => setShow(!show)}
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

const Easlog = () => {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="42"
        height="42"
        rx="9.54545"
        fill="url(#paint0_radial_40_2)"
      />
      <g filter="url(#filter0_d_40_2)">
        <path
          d="M27.2662 34.23H13.0558C12.8041 34.23 12.6 34.0259 12.6 33.7742V22.2705C12.6 21.8871 13.0446 21.675 13.3426 21.9162L27.553 33.4199C27.8869 33.6902 27.6958 34.23 27.2662 34.23Z"
          fill="white"
        />
      </g>
      <g filter="url(#filter1_d_40_2)">
        <path
          d="M13.3541 9.05266L27.0188 20.8785C27.2279 21.0595 27.229 21.3833 27.0213 21.5657L13.3566 33.5655C13.062 33.8242 12.6 33.615 12.6 33.223V9.39733C12.6 9.00687 13.0588 8.79714 13.3541 9.05266Z"
          fill="white"
        />
      </g>
      <g filter="url(#filter2_d_40_2)">
        <path
          d="M13.3597 8.40002H26.2378H27.0882C27.5164 8.40002 27.7083 8.93706 27.3771 9.20844L26.7192 9.74739L13.8411 20.2981L13.3447 20.7049C13.0471 20.9487 12.6 20.737 12.6 20.3523V19.7105V9.15973V8.85585C12.6 8.6041 12.8041 8.40002 13.0558 8.40002H13.3597Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_40_2"
          x="12.6"
          y="21.8138"
          width="17.402"
          height="14.6952"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1.13955" dy="1.13955" />
          <feGaussianBlur stdDeviation="0.569777" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_40_2"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_40_2"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_40_2"
          x="11.4604"
          y="8.94067"
          width="16.8555"
          height="27.0181"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.13955" />
          <feGaussianBlur stdDeviation="0.569777" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_40_2"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_40_2"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_40_2"
          x="11.4604"
          y="8.40002"
          width="17.2241"
          height="14.688"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.13955" />
          <feGaussianBlur stdDeviation="0.569777" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_40_2"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_40_2"
            result="shape"
          />
        </filter>
        <radialGradient
          id="paint0_radial_40_2"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(21 21) rotate(45) scale(29.6985)"
        >
          <stop stop-color="#314BD5" />
          <stop offset="0.3125" stop-color="#2451F0" />
          <stop offset="0.666667" stop-color="#3E6ADB" />
          <stop offset="1" stop-color="#3186D5" />
        </radialGradient>
      </defs>
    </svg>
  );
};
