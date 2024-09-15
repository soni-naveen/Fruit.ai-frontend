import React from "react";
import GoogleTranslator from "../assets/Google_Translate_logo.svg";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center py-14 min-h-[calc(100vh-64px)] bg-gradient-to-r from-purple-300 to-teal-300">
        <h1 className="text-6xl font-bold font-[cursive] text-white mb-4 sm2xl:text-3xl">
          Fruit.Ai
        </h1>
        <p className="text-2xl text-white mb-8 font-[cursive] sm2xl:text-base">
          "Be Healthy"
        </p>

        <div className="flex flex-wrap justify-center gap-7 mx-5">
          <div
            onClick={() => navigate("/chat")}
            className="group flex items-center justify-center w-48 h-48 bg-green-200 rounded-lg shadow-lg cursor-pointer hover:bg-green-400 ease-in-out duration-300 sm2xl:w-28 sm2xl:h-28"
          >
            <p className="text-3xl text-green-500 font-bold group-hover:text-white sm2xl:text-xl">
              Chat
            </p>
          </div>

          <div
            onClick={() => navigate("/translator")}
            className="flex items-center justify-center w-48 h-48 bg-blue-200 rounded-lg shadow-lg cursor-pointer hover:bg-blue-300 ease-in-out duration-300 sm2xl:w-28 sm2xl:h-28"
          >
            <img
              src={GoogleTranslator}
              alt="Translate"
              className="h-14 w-14 sm2xl:h-10 sm2xl:w-10"
            />
          </div>

          <div
            onClick={() => navigate("/faqs")}
            className="group flex items-center justify-center w-48 h-48 bg-purple-300 rounded-lg shadow-lg cursor-pointer hover:bg-purple-400 ease-in-out duration-300 sm2xl:w-28 sm2xl:h-28"
          >
            <p className="text-3xl text-purple-700 font-bold group-hover:text-white sm2xl:text-xl">
              FAQs
            </p>
          </div>

          <div
            onClick={() => navigate("/about")}
            className="group flex items-center justify-center w-48 h-48 bg-pink-200 rounded-lg shadow-lg cursor-pointer hover:bg-pink-300 ease-in-out duration-300 sm2xl:w-28 sm2xl:h-28"
          >
            <p className="text-3xl text-pink-500 font-bold group-hover:text-white sm2xl:text-xl">
              About
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
