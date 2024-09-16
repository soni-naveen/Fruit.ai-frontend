import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { email, password, confirmPassword } = formData;
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className="flex justify-evenly h-screen items-center md1:flex-col md1:justify-center md1:gap-5 md1:my-10 sm:my-0">
        <div className="mb-5 font-[cursive] sm:mb-2">
          <p className="text-8xl drop-shadow-lg font-[cursive] text-center font-bold text-teal-100 xl:text-7xl md1:text-6xl sm:text-5xl sm2xl:text-4xl">
            Fruit.Ai
          </p>
          <p className="text-xl mt-2 text-right font-[cursive] font-medium text-teal-100 xl:text-base md1:text-sm md1:text-center sm:text-xs">
            Boost your health, naturally!
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="rounded-xl bg-teal-50 py-6 px-10 flex flex-col gap-5 items-center sm2xl:px-6 sm2xl:py-4">
            <h1 className="text-[28px] font-bold text-teal-500 smxl:text-2xl">
              SignUp
            </h1>
            <p className="text-center text-sm smxl:text-xs">
              By signup in you are agreeing <br /> our{" "}
              <span className="text-blue-500 hover:underline cursor-pointer">
                Term and privacy policy
              </span>
            </p>
            <button className="gap-5 flex items-center justify-center">
              <FcGoogle className="text-4xl sm:text-3xl" />
              <FaFacebook className="text-4xl sm:text-3xl text-blue-600" />
              <FaInstagram className="text-4xl sm:text-3xl text-pink-500" />
              <FaLinkedin className="text-4xl sm:text-3xl text-blue-700" />
            </button>
            <div className="--or-- flex items-center justify-between my-1">
              <div className="bg-gray-300 w-[120px] h-[0.5px] sm:w-[90px]"></div>
              <p className="text-sm text-gray-400 px-5">or</p>
              <div className="bg-gray-300 w-[120px] h-[0.5px] sm:w-[90px]"></div>
            </div>
            <form className="flex w-full flex-col gap-y-4">
              <label className="w-full">
                <p className="mb-1 text-xs leading-[1.375rem]">
                  Email Address <sup className="text-pink-500">*</sup>
                </p>
                <input
                  required
                  autoComplete="off"
                  type="text"
                  name="email"
                  value={email}
                  onChange={handleOnChange}
                  placeholder="Enter email address"
                  className="w-[300px] bg-teal-50 px-3 py-3 text-black border border-gray-400 outline-none rounded-md text-sm sm:w-[250px] sm:py-2.5"
                />
              </label>
              <label className="relative">
                <p className="mb-1 text-xs leading-[1.375rem]">
                  Password <sup className="text-pink-500">*</sup>
                </p>
                <input
                  required
                  autoComplete="off"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={handleOnChange}
                  placeholder="Enter Password"
                  className="w-[300px] bg-teal-50 px-3 py-3 text-black border border-gray-400 outline-none rounded-md text-sm sm:w-[250px] sm:py-2.5"
                />
                <span
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-[38px] z-[10] cursor-pointer sm:top-[35px]"
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                  )}
                </span>
              </label>
              <label className="relative">
                <p className="mb-1 text-xs leading-[1.375rem] text-richblack-5">
                  Confirm Password <sup className="text-pink-500">*</sup>
                </p>
                <input
                  required
                  autoComplete="off"
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleOnChange}
                  placeholder="Confirm Password"
                  className="w-[300px] bg-teal-50 px-3 py-3 text-black border border-gray-400 outline-none rounded-md text-sm sm:w-[250px] sm:py-2.5"
                />
                <span
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute right-3 top-[38px] z-[10] cursor-pointer sm:top-[35px]"
                >
                  {showConfirmPassword ? (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                  )}
                </span>
              </label>
              <button
                onClick={() => {
                  alert("This feature is not available yet......");
                }}
                className="rounded-sm text-white bg-teal-400 font-semibold hover:bg-teal-500 mt-5 py-1.5 sm:mt-4"
              >
                Signup
              </button>
              <div className="gotosignup flex flex-col justify-center items-start">
                <p className="text-xs font-normal mt-4">
                  Already an account? &nbsp;
                  <Link to="/login" className="text-xs underline text-blue-500">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
