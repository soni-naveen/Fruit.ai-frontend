import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (
      message.toLowerCase() === "hello" ||
      message.toLowerCase() === "hi" ||
      message.toLowerCase() === "hlo"
    ) {
      actions.handleHello();
    } else if (
      message.toLowerCase() === "bye" ||
      message.toLowerCase() === "by" ||
      message.toLowerCase().includes("thanks") ||
      message.toLowerCase().includes("thank you") ||
      message.toLowerCase().includes("thankyou") ||
      message.toLowerCase() === "ok"
    ) {
      actions.handleBye();
    } else if (
      message.toLowerCase().includes("contact you") ||
      message.toLowerCase().includes("contact ecoride") ||
      message.toLowerCase().includes("contact team")
    ) {
      actions.handleContactUs();
    } else if (
      message.toLowerCase().includes("List") ||
      message.toLowerCase().includes("lists") ||
      message.toLowerCase().includes("list") ||
      message.toLowerCase().includes("price")
    ) {
      actions.handlePrices();
    } else {
      actions.handleDefault();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
