import React from "react";
import GoogleTranslator from "../assets/Google_Translate_logo.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-300 to-teal-300">
      <h1 className="text-4xl font-medium text-white mb-4 sm2xl:text-3xl">
        Fruit.Ai
      </h1>
      <p className="text-lg text-white mb-8 sm2xl:text-base">"Be Healthy"</p>

      <div className="grid grid-cols-2 gap-6">
        <div className="group flex items-center justify-center w-32 h-32 bg-green-200 rounded-lg shadow-lg cursor-pointer hover:bg-green-400 ease-in-out duration-300 sm2xl:w-28 sm2xl:h-28">
          <p className="text-2xl text-green-500 font-bold group-hover:text-white sm2xl:text-xl">
            Chat
          </p>
        </div>

        <div className="flex items-center justify-center w-32 h-32 bg-blue-200 rounded-lg shadow-lg cursor-pointer hover:bg-blue-300 ease-in-out duration-300 sm2xl:w-28 sm2xl:h-28">
          <img
            src={GoogleTranslator}
            alt="Translate"
            className="h-12 w-12 sm2xl:h-10 sm2xl:w-10"
          />
        </div>

        <div className="group flex items-center justify-center w-32 h-32 bg-purple-300 rounded-lg shadow-lg cursor-pointer hover:bg-purple-400 ease-in-out duration-300 sm2xl:w-28 sm2xl:h-28">
          <p className="text-2xl text-purple-700 font-bold group-hover:text-white sm2xl:text-xl">
            FAQs
          </p>
        </div>

        <div
          onClick={() => navigate("/about")}
          className="group flex items-center justify-center w-32 h-32 bg-pink-200 rounded-lg shadow-lg cursor-pointer hover:bg-pink-300 ease-in-out duration-300 sm2xl:w-28 sm2xl:h-28"
        >
          <p className="text-2xl text-pink-500 font-bold group-hover:text-white sm2xl:text-xl">
            About
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
