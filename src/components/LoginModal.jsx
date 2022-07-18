import React, { useState, Fragment } from "react";
import { Dialog, Transition, Popover } from "@headlessui/react";
import { ReactComponent as GoogleLogo } from "../assets/google.svg";
import { ReactComponent as FacebookLogo } from "../assets/facebook.svg";
import { XIcon, ArrowRightIcon, LogoutIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Logo from "./Logo";
import { useModal } from "../contexts/ModalContext";
import Spinner from "./Spinner";

const LoginModal = ({ navState, setNavState }) => {
  const { open, setOpen } = useModal();
  const [error, setError] = useState("");

  const { googleSignIn, facebookSignIn, currentUser, logout } = useAuth();

  function closeModal() {
    setOpen(false);
  }

  function openModal() {
    setNavState(!navState);
    setOpen(true);
  }

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      closeModal();
    } catch (err) {
      console.log(err, "something went wrong");
    }
  };

  const handleFacebookSignIn = async (e) => {
    e.preventDefault();
    try {
      await facebookSignIn();
      closeModal();
    } catch (err) {
      console.log(err, "something went wrong");
    }
  };

  async function handleLogout() {
    try {
      setError("");
      await logout();
    } catch (err) {
      setError("Failed to log out");
      console.log(err);
    }
  }

  return (
    <>
      {currentUser ? (
        <Popover className="relative">
          <Popover.Button className="flex justify-between gap-3 items-center m-3">
            <img
              src={currentUser.photoURL}
              alt=""
              className="w-8 h-8 rounded-full"
            />
            <div className="text-left">
              <p>{currentUser.displayName}</p>
              <p className="text-sm opacity-60">{currentUser.email}</p>
            </div>
          </Popover.Button>

          <Popover.Panel className="bg-white shadow-lg absolute w-full rounded-xl p-4">
            <div className="text-center">
              <button onClick={handleLogout}>
                <div className="flex items-center gap-1">
                  <h4 className="">Log out</h4>
                  <LogoutIcon className="w-5 h-5" />
                </div>
              </button>
            </div>
          </Popover.Panel>
        </Popover>
      ) : (
        <ModalButton state={openModal} />
      )}
      {error && error}
      <Transition appear show={open} as={Fragment}>
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
                <Dialog.Panel className="w-full max-w-md transform rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all outline-none">
                  <div className="flex justify-start items-center gap-2">
                    <Logo />
                    <h1 className="text-2xl">Easypaper</h1>
                  </div>

                  <Dialog.Title
                    as="h3"
                    className="text-3xl font-medium leading-6 text-gray-900 mt-6"
                  >
                    Log in or Sign up
                  </Dialog.Title>
                  <div className="mt-10 flex flex-col gap-4">
                    <button
                      onClick={handleGoogleSignIn}
                      className="h-12 w-full mx-auto px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-black/[0.6] hover:-translate-y-[3px] active:translate-y-0"
                    >
                      <div className="flex items-center">
                        <GoogleLogo className="w-7" />
                        <span className="block mx-auto w-full text-gray-800 tracking-wide text-base sm:text-lg transition duration-300">
                          Continue with Google
                        </span>
                      </div>
                    </button>
                    <button
                      onClick={handleFacebookSignIn}
                      className="h-12 w-full mx-auto px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-black/[0.6] hover:-translate-y-[3px] active:translate-y-0"
                    >
                      <div className="flex items-center">
                        <FacebookLogo className="w-7" />
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

const ModalButton = ({ state }) => {
  const { loading } = useAuth();

  return (
    <>
      <button
        onClick={state}
        className="group ring-1 hover:ring-2 ring-black  px-4 py-[10px] rounded-xl flex items-center gap-2 mb-3 md:mb-0 hover:-translate-y-[2px] active:translate-y-0 transition duration-[400ms]"
        disabled={loading ? true : false}
      >
        {loading ? <Loading /> : <p>Sign In</p>}
        {loading ? null : <ArrowRightIcon className="w-5 h-5" />}
      </button>
    </>
  );
};

function Loading() {
  return (
    <div className="flex justify-center">
      <Spinner />
    </div>
  );
}
