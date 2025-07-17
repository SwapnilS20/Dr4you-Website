import React from "react";
import robot from "../../assets/Images/robot.png"; // Use your provided robot image
import noiseBg from "../../assets/Images/noisebg.png"; // Optional noise texture
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const ErrorPage = () => {
  return (
    <section className="min-h-screen bg-white flex justify-center items-center px-4 relative ">
      {/* Noise + Gradient Background */}
      <div
        className="absolute  h-[550px] w-[1200px]"
        style={{
          backgroundImage: ` url(${noiseBg})`,
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          opacity: 0.3,
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 bg-transparent rounded-[2rem]  max-w-6xl w-full flex flex-col md:flex-row items-center justify-between px-6 py-12 gap-10">
        {/* Left - Image */}
        <div className="flex-shrink-0">
          <img src={robot} alt="404 Robot"/>
          <svg
            viewBox="0 0 900 200"
            className="absolute sm:top-32 sm:-left-9  left-20 top-28 "
          >
            <defs>
              <path
                id="curvePath"
                d="M 100 150 A 100 100 0 0 1 300 150"
                fill="none"
              />
            </defs>
            <text className="fill-Neutral-800 font-extrabold sm:text-7xl text-9xl">
              <textPath href="#curvePath" startOffset="50%" textAnchor="middle">
                404
              </textPath>
            </text>
          </svg>
        </div>

        {/* Right - Text */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-bold text-Neutral-900 mb-2">
            PAGE NOT FOUND
          </h2>
          <p className="text-lg md:text-xl text-Neutral-600 mb-6">
            We Couldn't Find The Page You Were Looking For
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="bg-Primary-Blue-500 hover:bg-Primary-Blue-600 text-white px-6 py-3 rounded-full transition-all"
          >
            Back To Home
          </button>
        </div>
      </div>

    
    </section>
  );
};

export default ErrorPage;
