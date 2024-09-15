import React from "react";
import Apples from "../../assets/apple.jpeg";
import Bananas from "../../assets/bananas.jpeg";
import Cucumbers from "../../assets/cucumber.jpeg";
import Oranges from "../../assets/oranges.jpeg";
import Pineapple from "../../assets/pineapple.jpeg";
import Strawberry from "../../assets/strawberry.jpeg";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botmsg = createChatBotMessage("Hello nice to meet you! How can I help you?");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botmsg],
    }));
  };

  const handleBye = () => {
    const botmsg = createChatBotMessage(
      "I am happy, I was able to help. Fell free to contact me again."
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botmsg],
    }));
  };

  const handlePrices = () => {
    const fruitList = [
      {
        name: "Apple",
        price: "$1.20",
        perKgPrice: "$2.50",
        img: Apples,
      },
      {
        name: "Banana",
        price: "$0.75",
        perKgPrice: "$1.80",
        img: Bananas,
      },
      {
        name: "Orange",
        price: "$2.50",
        perKgPrice: "$5.00",
        img: Oranges,
      },
      {
        name: "Pineapple",
        price: "$3.00",
        perKgPrice: "$6.00",
        img: Pineapple,
      },
      {
        name: "Strawberry",
        price: "$4.00",
        perKgPrice: "$8.00",
        img: Strawberry,
      },
      {
        name: "Cucumber",
        price: "$2.75",
        perKgPrice: "$5.50",
        img: Cucumbers,
      },
    ];

    const fruitItems = fruitList.map((fruit, index) => (
      <div
        key={index}
        className="flex items-center py-4 border-b border-gray-200"
      >
        <img
          src={fruit.img}
          alt={fruit.name}
          className="w-12 h-12 object-cover rounded-full mr-4 md:w-8 md:h-8"
        />
        <div className="flex-1">
          <span className="text-lg font-medium text-blue-500 md:text-base sm2xl:text-sm">
            {fruit.name}
          </span>
          <div className="text-sm text-gray-600 md:text-xs sm2xl:text-[10px]">
            Price: <span className="font-bold">{fruit.price}</span> | price/kg:{" "}
            {fruit.perKgPrice}
          </div>
        </div>
      </div>
    ));

    const botmsg = createChatBotMessage(
      <div className="p-4 bg-white rounded-lg shadow-lg smxl:p-3">
        <h3 className="text-xl font-bold underline text-center mb-2 md:text-lg sm2xl:text-base">
          Fruits & Prices
        </h3>
        {fruitItems}
      </div>
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botmsg],
    }));
  };

  const handleContactUs = () => {
    const botmsg = createChatBotMessage(
      "You can contact our team via mail : naveennsonii@gmail.com"
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botmsg],
    }));
  };

  const handleDefault = () => {
    const botmsg = createChatBotMessage(
      "Sorry! I can't understand. Contact team : naveennsonii@gmail.com"
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botmsg],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handlePrices,
            handleContactUs,
            handleBye,
            handleDefault,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
