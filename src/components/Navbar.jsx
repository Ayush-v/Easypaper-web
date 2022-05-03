import React, { useState, useEffect } from "react";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/outline";
import { Link, useLocation } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import LoginModal from "./LoginModal";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [show, setShow] = useState(false);

  const [navHide, setNavHide] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/signup" || location.pathname === "/login") {
      setNavHide(true);
    } else {
      setNavHide(false);
    }
  }, [navHide, location]);

  return (
    <header
      className={classNames(
        navHide ? "hidden" : "visible",
        "fixed top-0 z-50 w-full mx-auto bg-white/[0.4] backdrop-blur-xl"
      )}
    >
      <div className="flex justify-between items-center max-w-[1234px] mx-auto h-[60px] p-8">
        <Link to="/" className="flex items-center gap-2">
          <Easlog />
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
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
          <stop stopColor="#314BD5" />
          <stop offset="0.3125" stopColor="#2451F0" />
          <stop offset="0.666667" stopColor="#3E6ADB" />
          <stop offset="1" stopColor="#3186D5" />
        </radialGradient>
      </defs>
    </svg>
  );
};
