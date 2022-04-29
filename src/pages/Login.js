import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import googleLogo from "../assets/google.svg";
import facebookLogo from "../assets/facebook.svg";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login | Easypaper</title>
      </Helmet>

      <div className="relative py-16 before:absolute before:inset-0 before:w-full before:h-[50%] before:bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div className="m-auto space-y-8 md:w-8/12 lg:w-full">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="logo" className="w-[44px] h-[44px]" />
              <h1 className="text-2xl text-white">EasyPaper</h1>
            </Link>
            <div className="rounded-xl overflow-hidden border bg-opacity-50 backdrop-blur-2xl bg-white shadow-xl">
              <div className="lg:grid lg:grid-cols-2">
                <div className="rounded-lg lg:block" hidden>
                  {/* <img
                    src="images/smiling.webp"
                    class="rounded-l-xl object-cover"
                    loading="lazy"
                    height=""
                    width=""
                    alt="music mood"
                  /> */}
                  <div className="w-full h-full bg-purple-300"></div>
                </div>
                <div className="p-6 sm:p-16">
                  <h2 className="mb-8 text-3xl text-center text-cyan-900 font-bold">
                    Log in or Sign up
                  </h2>
                  <div className="space-y-8">
                    <button className="h-12 w-full mx-auto px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                      <div className="flex items-center space-x-4 justify-center">
                        <img src={googleLogo} className="w-5" alt="" />
                        <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                          Continue with Google
                        </span>
                      </div>
                    </button>
                    <button className="h-12 w-full mx-auto px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                      <div className="flex items-center space-x-4 justify-center">
                        <img src={facebookLogo} className="w-5" alt="" />
                        <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                          Continue with Facebook
                        </span>
                      </div>
                    </button>

                    <p className="text-center text-sm">
                      By continuing, you acknowledge that you have read and
                      understood, and agree to Easypaper’s{" "}
                      <u>Terms of Service</u> and
                      <u> Privacy Policy</u>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center space-x-4">
              <span>&copy; Easypaper</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
