import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Translator from "./components/Translator";
import Chat from "./components/Chat";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/translator" element={<Translator />} />
      </Routes>
    </>
  );
}

export default App;
