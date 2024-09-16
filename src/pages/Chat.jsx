import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./Chatbot/chatbot.css";
import Navbar from "../components/Navbar";

import config from "./Chatbot/config";
import MessageParser from "./Chatbot/MessageParser";
import ActionProvider from "./Chatbot/ActionProvider";

function Chat() {
  return (
    <>
      <Navbar />
      <div className="py-14 min-h-[calc(100vh-64px)] flex flex-col justify-center gap-7 py-10 items-center">
        <div>
          <h1 className="font-semibold text-lg text-center text-white md:text-sm sm2xl:text-xs">
            Chat With Confidence! We have got you covered.
          </h1>
        </div>
        <div>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      </div>
    </>
  );
}

export default Chat;
