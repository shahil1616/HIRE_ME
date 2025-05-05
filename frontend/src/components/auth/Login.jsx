import { RadioGroup } from "@radix-ui/react-radio-group";
import { Label } from "@radix-ui/react-label";
import { Link } from "react-router-dom";

import Navbar from "../shared/Navbar";
import React from "react";

export const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md border border-gray-300">
          <h2 className="text-2xl font-bold text-center mb-2">Login</h2>
          <p className="text-gray-500 text-center mb-4">
            Fill in the details to Login.
          </p>

          <input
            type="email"
            placeholder="Enter Email Address"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex flex-col gap-4 mb-4">
            <RadioGroup className="flex items-center gap-4">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="recruiter"
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>

          <button
            type="submit"
            className="w-full bg-[#3a86ff] text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Signup
          </button>

          <hr className="my-4 border-gray-300" />

          <p className="text-center text-gray-600 mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              {" "}
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
