import React from "react";
import { useNavigate } from "react-router-dom";
import fruitAi from "../assets/fruit.ai-logo.webp";
import "animate.css";

const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-300 to-teal-300 smxl:items-end">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-lg overflow-hidden p-9 text-center sm:max-w-sm smxl:p-10 smxl:max-w-full smxl:rounded-b-none animate__animated animate__slideInUp">
        <div className="h-40 w-full flex justify-center items-center mb-8">
          <img
            src={fruitAi}
            alt="fruit.ai logo"
            className="h-full w-full object-cover"
          />
        </div>
        <h1 className="text-3xl font-medium text-gray-900 mb-4 sm:text-2xl">
          Fruit.Ai
        </h1>

        <p className="text-gray-600 mb-6">
          Whether you're looking to discover new fruits, understand their
          nutritional values, or find the perfect fruit for your diet, our
          AI-driven chatbot is here to assist. We provide personalized fruit
          recommendations tailored to your health needs, making it easier for
          you to integrate the best fruits into your daily routine.
        </p>

        <button
          onClick={() => navigate("/home")}
          className="px-20 py-2 bg-teal-400 font-semibold text-white rounded-full hover:bg-teal-500 transition duration-300 ease-in-out sm:px-32 sm:py-3"
        >
          HOME
        </button>
      </div>
    </div>
  );
};
export default AboutPage;
