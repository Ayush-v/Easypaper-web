import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import googleLogo from "../assets/google.svg";
import facebookLogo from "../assets/facebook.svg";
import { XIcon, ArrowRightIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const LoginModal = ({ navState, setNavState }) => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setNavState(!navState);
    setIsOpen(true);
  }

  return (
    <>
      <button
        onClick={openModal}
        className="ring-1 hover:ring-2 hover:-translate-y-[2px] active:translate-y-0 transition duration-300 ring-black px-4 py-[10px] rounded-xl flex gap-[10px] items-center mb-3 md:mb-0 whitespace-nowrap text-center"
      >
        <p>Sign In</p>
        <ArrowRightIcon className="w-5 h-5" />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex flex-col min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all">
                  <div className="flex justify-start items-center gap-2">
                    <Easylogo />
                    <h1 className="text-2xl">Easypaper</h1>
                  </div>

                  <Dialog.Title
                    as="h3"
                    className="text-3xl font-medium leading-6 text-gray-900 mt-6"
                  >
                    Log in or Sign up
                  </Dialog.Title>
                  <div className="mt-10 flex flex-col gap-4">
                    <button className="h-12 w-full mx-auto px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-black/[0.6] hover:-translate-y-[3px] active:translate-y-0">
                      <div className="flex items-center">
                        <img src={googleLogo} className="w-7" alt="" />
                        <span className="block mx-auto w-full text-gray-800 tracking-wide text-base sm:text-lg transition duration-300">
                          Continue with Google
                        </span>
                      </div>
                    </button>
                    <button className="h-12 w-full mx-auto px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-black/[0.6] hover:-translate-y-[3px] active:translate-y-0">
                      <div className="flex items-center">
                        <img src={facebookLogo} className="w-7" alt="" />
                        <span className="block mx-auto w-full text-gray-800 tracking-wide text-base sm:text-lg transition duration-300">
                          Continue with Facebook
                        </span>
                      </div>
                    </button>
                  </div>

                  <p className="text-sm text-gray-500 mt-8">
                    By continuing, you acknowledge that you have read and
                    understood, and agree to Easypaper’s{" "}
                    <Link
                      className="underline hover:text-gray-800 cursor-pointer transition duration-300"
                      to="/terms-and-services"
                      onClick={closeModal}
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      className="underline hover:text-gray-800 cursor-pointer transition duration-300"
                      to="/privacy-policy"
                      onClick={closeModal}
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>

                  <div className="absolute -top-3 -right-3 z-50">
                    <button
                      type="button"
                      className="bg-white drop-shadow-md rounded-full"
                      onClick={closeModal}
                    >
                      <XIcon className="w-6 h-6 m-1 hover:scale-[1.1] transition duration-300 active:scale-0" />
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default LoginModal;

const Easylogo = () => {
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
