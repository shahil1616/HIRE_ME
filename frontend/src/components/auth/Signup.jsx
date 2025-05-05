import { RadioGroup } from "@radix-ui/react-radio-group";
import { Label } from "@radix-ui/react-label";
import { Link, useNavigate } from "react-router-dom";
import { USER_API_END_POINT } from "@/utils/constant";
import Navbar from "../shared/Navbar";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

export const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    phoneNumber: "",
    email: "",
    file: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate();
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);

    try {
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.messsage);
      }
    } catch (error) {
      console.log("Response Error:", error.response?.data);

      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md border border-gray-300">
          <h2 className="text-2xl font-bold text-center mb-2">Sign Up</h2>
          <p className="text-gray-500 text-center mb-4">
            Fill in the details to create an account.
          </p>

          <form onSubmit={submitHandler}>
            <input
              type="text"
              value={input.fullname}
              placeholder="Enter Name"
              name="fullname"
              onChange={changeEventHandler}
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              value={input.phoneNumber}
              placeholder="Enter Phone Number"
              name="phoneNumber"
              onChange={changeEventHandler}
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Enter Email Address"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Enter Password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex flex-col gap-4 mb-4">
              <RadioGroup className="flex items-center gap-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="role"
                    value="Student"
                    checked={input.role === "Student"}
                    onChange={changeEventHandler}
                    className="cursor-pointer"
                  />
                  <Label htmlFor="r1">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="role"
                    value="Recruiter"
                    checked={input.role === "Recruiter"}
                    onChange={changeEventHandler}
                    className="cursor-pointer"
                  />
                  <Label htmlFor="r2">Recruiter</Label>
                </div>
              </RadioGroup>

              <div className="flex items-center gap-2">
                <Label>Profile</Label>
                <input
                  type="file"
                  accept="image/*"
                  name="file"
                  onChange={changeFileHandler}
                  className="cursor-pointer"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#3a86ff] text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Signup
            </button>

            <hr className="my-4 border-gray-300" />

            <p className="text-center text-gray-600 mt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
