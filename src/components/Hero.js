import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="bg-fixed bg-image h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/RBkLjDG/pexels-axel-breuer-2247138-4.jpg)",
      }}
    >
      <h1 className="lg:text-9x1 md:text-7x1 sm:text-5x1 text-7xl font-black text-white mb-14">
        FISH MARKET FOR ALL
      </h1>
      <Link
        className="py-6 px-10 bg-blue-500 rounded-full text-3xl hover:bg-blue-800 transition duration-300 ease-in-out flex items-center animate-pulse"
        to="/"
      >
        Grab Now
        <svg
          className="w-6 h-6 ml-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Hero;
