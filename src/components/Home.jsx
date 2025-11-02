import React from "react";
import { Link } from "react-router-dom";
import Coin from "../GameLogo/coin.png";

const Home = () => {
  return (
    <div className="min-h-[80vh] bg-white flex items-center justify-center px-4 sm:px-6 md:px-10 overflow-x-hidden">
      {/* Container */}
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-8 sm:gap-10">
        
        {/* Left Text Section */}
        <div className="text-center md:text-left space-y-6 md:w-1/2 w-full px-2 sm:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Here You Earn <span className="text-green-600">Free Money</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Join <b>Paisa Party</b> today and start earning rewards instantly. 
            Simple, transparent, and rewarding.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link 
              to="/game"
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl shadow-md hover:bg-green-700 transition"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src={Coin}
            alt="Money Coins"
            className="w-48 sm:w-64 md:w-80 drop-shadow-lg hover:scale-105 transition-transform duration-300 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
