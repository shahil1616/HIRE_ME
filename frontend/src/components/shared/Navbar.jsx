import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isToggle, setIsToggel] = useState(false);
  const toggleDB = () => {
    setIsToggel(!isToggle);
  };

  return (
    <div className="bg-gray-100 shadow-lg rounded-2xl  mt-2 ml-20 mr-20">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
        <div>
          <h1 className="text-2xl font-bold">
            Hire
            <span className="text-[#3a86ff]">Me</span>
          </h1>
        </div>

        <div>
          <ul className="flex items-center gap-5">
            <li className="cursor-pointer hover:text-[#3a86ff] transition">
              Home
            </li>
            <li className="relative">
              <button
                onClick={toggleDB}
                className="hover:text-[#3a86ff] transition"
              >
                Job Category ⌄
              </button>
              {isToggle && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  <ul className="py-2 text-gray-700">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Software Developer
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Data Analyst
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      UI/UX Designer
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="cursor-pointer hover:text-[#3a86ff] transition">
              Overview
            </li>
            <li className="cursor-pointer hover:text-[#3a86ff] transition">
              How It's works?
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <Link to={"/login"}>
            <button className="border border-gray-500 text-gray-700 px-4 py-1.5 rounded-2xl hover:bg-gray-200 transition shadow-sm">
              Sign In
            </button>
          </Link>

          <button className="bg-[#3a86ff] text-white px-4 py-1.5 rounded-2xl hover:bg-blue-600 transition shadow-sm">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
