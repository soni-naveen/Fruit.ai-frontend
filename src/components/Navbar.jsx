import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-teal-500 z-10 sticky top-0 text-white p-4 flex items-center justify-between shadow-md">
      <div className="flex items-center space-x-4">
        <div
          onClick={() => navigate("/home")}
          className="text-2xl font-bold cursor-pointer"
        >
          Fruit<span className="text-yellow-300">.Ai</span>
        </div>
      </div>
      <div
        onClick={() => navigate("/login")}
        className="flex items-center space-x-4 cursor-pointer"
      >
        <a className="flex items-center text-lg">
          <FaUserCircle className="w-8 h-8 text-white" />
        </a>
      </div>
    </header>
  );
};

export default Header;
