import React, { useState, useEffect, useRef } from "react";
import { languages } from "../utils/languages";
import { FaChevronDown } from "react-icons/fa";
import Navbar from "../components/Navbar";

const Translator = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [inputLanguage, setInputLanguage] = useState("en");
  const [outputLanguage, setOutputLanguage] = useState("hi");
  const [inputDropdown, setInputDropdown] = useState(true);
  const [outputDropdown, setOutputDropdown] = useState(true);

  const inputTextRef = useRef(null);
  const outputTextRef = useRef(null);

  useEffect(() => {
    if (inputText.trim()) {
      translate();
    } else {
      setOutputText("");
    }
  }, [inputText, inputLanguage, outputLanguage]);

  const handleLanguageSelect = (dropdownType, code) => {
    if (dropdownType === "input") {
      setInputLanguage(code);
      setInputDropdown(false);
    } else {
      setOutputLanguage(code);
      setOutputDropdown(false);
    }
  };

  const handleDropdownToggle = (dropdownType) => {
    if (dropdownType === "input") {
      setInputDropdown((prev) => !prev);
      setOutputDropdown(true);
    } else {
      setOutputDropdown((prev) => !prev);
      setInputDropdown(true);
    }
  };

  const translate = async () => {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${inputLanguage}&tl=${outputLanguage}&dt=t&q=${encodeURI(
      inputText
    )}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setOutputText(data[0].map((item) => item[0]).join(""));
    } catch (error) {
      console.error("Translation error:", error);
    }
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setOutputDropdown(true);
    setInputText(newValue);
  };

  return (
    <>
      <Navbar />
      <div className="mt-20 max-w-4xl mx-auto my-20 lg:max-w-3xl md1:max-w-xl sm:max-w-md smxl:max-w-[21rem] sm2xl:max-w-xs">
        <h1 className="text-4xl drop-shadow font-bold text-center text-teal-300 pb-7 smxl:text-3xl sm2xl:text-2xl">
          Fruit.Ai <span className="text-blue-300">Translator</span>
        </h1>
        <div className="flex bg-white p-10 rounded-3xl gap-5 md1:flex-col smxl:p-8 sm2xl:p-5">
          <div className="w-full">
            <div
              className="relative w-full mb-3 px-4 rounded-full bg-blue-50 border border-blue-200 cursor-pointer"
              onClick={() => handleDropdownToggle("input")}
            >
              <div className="p-2 flex justify-between items-center">
                <span>
                  {languages.find((lang) => lang.code === inputLanguage)?.name}{" "}
                  (
                  {
                    languages.find((lang) => lang.code === inputLanguage)
                      ?.native
                  }
                  )
                </span>
                <FaChevronDown />
              </div>
              <ul
                className={`absolute overflow-y-scroll h-80 left-0 mt-1 w-full bg-white text-black rounded-md shadow-lg ${
                  inputDropdown ? "hidden" : "block"
                }`}
              >
                {languages.map((lang) => (
                  <li
                    key={lang.code}
                    onClick={() => handleLanguageSelect("input", lang.code)}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {lang.name} ({lang.native})
                  </li>
                ))}
              </ul>
            </div>
            <textarea
              ref={inputTextRef}
              placeholder="Enter text to translate"
              value={inputText}
              onChange={handleInputChange}
              className="w-full h-80 p-4 outline-none bg-slate-100 rounded-md"
            />
          </div>
          <div className="w-full">
            <div
              className="relative w-full mb-3 px-4 bg-slate-100 rounded-full bg-teal-50 border border-teal-200 cursor-pointer"
              onClick={() => handleDropdownToggle("output")}
            >
              <div className="p-2 flex justify-between items-center">
                <span>
                  {languages.find((lang) => lang.code === outputLanguage)?.name}{" "}
                  (
                  {
                    languages.find((lang) => lang.code === outputLanguage)
                      ?.native
                  }
                  )
                </span>
                <FaChevronDown />
              </div>
              <ul
                className={`absolute overflow-y-scroll h-80 left-0 mt-1 w-full bg-white text-black rounded-md shadow-lg ${
                  outputDropdown ? "hidden" : "block"
                }`}
              >
                {languages.map((lang) => (
                  <li
                    key={lang.code}
                    onClick={() => handleLanguageSelect("output", lang.code)}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {lang.name} ({lang.native})
                  </li>
                ))}
              </ul>
            </div>
            <textarea
              ref={outputTextRef}
              placeholder="Translation"
              value={outputText}
              readOnly
              className="w-full h-80 p-4 outline-none bg-slate-100 rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Translator;
