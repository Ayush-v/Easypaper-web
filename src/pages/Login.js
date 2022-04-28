import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";

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
                  <h2 className="mb-8 text-3xl text-cyan-900 font-bold">
                    Log in
                  </h2>
                  <form action="" className="space-y-8" autoComplete="off">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300 focus:ring-2 focus:ring-sky-300 focus:outline-none invalid:ring-2 invalid:ring-red-400"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <label htmlFor="pwd" className="text-gray-700">
                          Password
                        </label>
                        <button className="p-2 -mr-2" type="reset">
                          <span className="text-sm text-sky-500">
                            Forgot your password ?
                          </span>
                        </button>
                      </div>
                      <input
                        type="password"
                        name="pwd"
                        id="pwd"
                        className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300 focus:ring-2 focus:ring-sky-300 focus:outline-none invalid:ring-2 invalid:ring-red-400"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-6 rounded-md bg-sky-600 focus:bg-sky-700 active:bg-sky-500"
                    >
                      <span className="text-white">Continue</span>
                    </button>

                    <p className="border-t pt-6 text-sm">
                      Don't have an account ? {""}
                      <a href="/signup" className="text-sky-500">
                        Sign up
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
            <div className="text-center space-x-4">
              <span>&copy; Easypaper</span>
              <a href="/" className="text-sm hover:text-sky-900">
                Contact
              </a>
              <a href="/" className="text-sm hover:text-sky-900">
                Privacy & Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
