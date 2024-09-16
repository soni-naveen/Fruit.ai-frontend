import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import FAQCard from "../components/FaqCard";

const FAQSection = () => {
  const defaultFaqs = [
    {
      _id: "1",
      question: "How is Tangerine healthy?",
      answer:
        "Tangerine are a great health booster due to their high vitamin C content, which supports the immune system and skin health.",
      isDefault: true,
    },
    {
      _id: "2",
      question: "What makes spinach a healthy choice?",
      answer:
        "Spinach is rich in vitamins A, C, and K, as well as iron and antioxidants. It supports eye health, boosts the immune system, and aids in blood clotting.",
      isDefault: true,
    },
  ];

  const [faqItems, setFaqItems] = useState(defaultFaqs);
  const [showDialog, setShowDialog] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [editItem, setEditItem] = useState(null);
  const [newItem, setNewItem] = useState({
    question: "",
    answer: "",
  });

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch("http://localhost:4000/faqs");
        const data = await response.json();
        setFaqItems(data.length > 0 ? data : defaultFaqs);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
    };
    fetchFaqs();
  }, [newItem]);

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setShowDialog(true);
  };

  const handleConfirmDelete = async () => {
    try {
      const response = await fetch(`http://localhost:4000/faqs/${deleteId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setFaqItems(faqItems.filter((item) => item._id !== deleteId));
        setShowDialog(false);
      } else {
        console.error("Error deleting FAQ:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting FAQ:", error);
    }
  };

  const handleCancelDelete = () => {
    setShowDialog(false);
  };

  const handleEditClick = (item) => {
    setEditItem(item);
    setShowEditForm(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditItem({ ...editItem, [name]: value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:4000/faqs/${editItem._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            question: editItem.question,
            answer: editItem.answer,
          }),
        }
      );
      if (response.ok) {
        const updatedFaq = await response.json();
        setFaqItems(
          faqItems.map((item) =>
            item._id === editItem._id ? updatedFaq : item
          )
        );
        setShowEditForm(false);
      } else {
        console.error("Failed to update FAQ");
      }
    } catch (error) {
      console.error("Error updating FAQ:", error);
    }
  };

  const handleCancelEdit = () => {
    setShowEditForm(false);
  };

  const handleNewChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleNewSubmit = async (e) => {
    e.preventDefault();
    const newOrUpdatedFAQ = {
      _id: Date.now().toString(),
      ...newItem,
    };
    setFaqItems((prevFaqItems) => [...prevFaqItems, newOrUpdatedFAQ]);

    try {
      const response = await fetch("http://localhost:4000/faqs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: newItem.question,
          answer: newItem.answer,
        }),
      });
      console.log(response);
      if (response.ok) {
        const newFaq = await response.json();
        setFaqItems((prevFaqItems) =>
          prevFaqItems.map((item) =>
            item._id === newOrUpdatedFAQ._id ? newFaq : item
          )
        );
        setShowAddForm(false);
        setNewItem({ question: "", answer: "" });
      } else {
        console.error("Failed to create FAQ");
        setFaqItems((prevFaqItems) =>
          prevFaqItems.filter((item) => item._id !== newOrUpdatedFAQ._id)
        );
      }
    } catch (error) {
      console.error("Error creating FAQ:", error);
      setFaqItems((prevFaqItems) =>
        prevFaqItems.filter((item) => item._id !== newOrUpdatedFAQ._id)
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-64px)] grid place-items-center sm:mx-7">
        <h2 className="text-4xl mt-5 drop-shadow font-bold text-center text-teal-300 smxl:text-3xl sm2xl:text-2xl">
          FAQ Section
        </h2>
        <div className="flex self-baseline justify-around w-full mb-10 mt-5 lg:flex-col lg:items-center lg:gap-10 lg:mt-5 lg:mb-10">
          <div className="flex flex-col gap-6">
            {faqItems.map((faq) => (
              <FAQCard
                key={faq._id}
                id={faq._id}
                title={faq.question || newItem.question}
                description={faq.answer || newItem.answer}
                showEditDelete={!faq.isDefault}
                onDelete={handleDeleteClick}
                onEdit={handleEditClick}
              />
            ))}
          </div>
          <div className="h-full text-center flex flex-col gap-5">
            <p className="text-white text-xl font-sans font-semibold sm2xl:text-base">
              Add, Delete and Edit FAQ
            </p>
            <button
              className="bg-teal-600 text-white py-3 px-4 rounded-md hover:bg-teal-700 transition duration-300 sm2xl:py-2 text-sm"
              onClick={() => setShowAddForm(true)}
            >
              Add FAQ
            </button>
          </div>
        </div>
        {showAddForm && (
          <div className="fixed inset-0 flex items-center justify-center px-5 bg-gray-950 bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
              <h3 className="text-xl text-center font-semibold text-teal-600 mb-4">
                Add New FAQ
              </h3>
              <form onSubmit={handleNewSubmit}>
                <label className="block mb-4">
                  <span className="block text-gray-600 font-medium mb-2">
                    Question:
                  </span>
                  <input
                    type="text"
                    name="question"
                    value={newItem.question}
                    onChange={handleNewChange}
                    required
                    className="block w-full border border-gray-400 rounded-md p-2"
                  />
                </label>
                <label className="block mb-4">
                  <span className="block text-gray-600 font-medium mb-2">
                    Answer:
                  </span>
                  <textarea
                    name="answer"
                    value={newItem.answer}
                    onChange={handleNewChange}
                    required
                    className="block w-full border border-gray-400 rounded-md p-2"
                  />
                </label>
                <div className="flex justify-center gap-5 mt-10">
                  <button
                    type="submit"
                    className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition duration-300"
                  >
                    Add FAQ
                  </button>
                  <button
                    type="button"
                    className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition duration-300"
                    onClick={() => setShowAddForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {showDialog && (
          <div className="fixed inset-0 flex items-center justify-center px-5 bg-gray-950 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
              <p className="text-lg text-black mb-4">
                Are you sure you want to delete this item?
              </p>
              <div className="flex justify-center gap-4">
                <button
                  className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300"
                  onClick={handleConfirmDelete}
                >
                  Yes, Delete
                </button>
                <button
                  className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition duration-300"
                  onClick={handleCancelDelete}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
        {showEditForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-950 bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
              <h3 className="text-xl text-center font-semibold text-teal-600 mb-4">
                Edit FAQ Item
              </h3>
              <form onSubmit={handleEditSubmit}>
                <label className="block mb-4">
                  <span className="block text-gray-600 font-medium mb-2">
                    Question:
                  </span>
                  <input
                    type="text"
                    name="question"
                    value={editItem.question}
                    onChange={handleEditChange}
                    required
                    className="block w-full border border-gray-400 rounded-md p-2"
                  />
                </label>
                <label className="block mb-4">
                  <span className="block text-gray-600 font-medium mb-2">
                    Answer:
                  </span>
                  <textarea
                    name="answer"
                    value={editItem.answer}
                    onChange={handleEditChange}
                    required
                    className="block w-full border border-gray-400 rounded-md p-2"
                  />
                </label>
                <div className="flex justify-center gap-5 mt-10">
                  <button
                    type="submit"
                    className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition duration-300"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition duration-300"
                    onClick={handleCancelEdit}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FAQSection;
