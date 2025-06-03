import React from "react";
import Header from "../../components/Header/Header";
import img from "../../assets/Images/LoginImg.png";
import { FaRegEnvelope } from "react-icons/fa";
import { BiLockAlt } from "react-icons/bi";

const LoginPage = () => {
  return (
    <section className="min-h-screen bg-white">
      <Header />

      <div className="flex flex-col lg:flex-row items-center justify-center px-6 py-12 lg:gap-20">
        {/* Left Side Image */}
        <div className="hidden lg:block w-1/2 max-w-xl">
          <img src={img} alt="Login visual" className="rounded-lg shadow-md w-full" />
        </div>

        {/* Right Side Form */}
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Admin Login</h2>
          <p className="text-gray-600 text-base mb-6">
            Caring beyond the clinic — that's Drs-4You.
          </p>

          <form className="space-y-5">
            {/* Email Field */}
            <div className="relative">
              <FaRegEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <BiLockAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Remember Me & Forgot */}
            <div className="flex justify-between items-center text-sm text-gray-600">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-600" />
                Remember Me
              </label>
              <button type="button" className="text-blue-600 hover:underline">
                Forgot Password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
