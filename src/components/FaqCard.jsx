import React from "react";

const FAQCard = ({
  id,
  title,
  description,
  showEditDelete,
  onDelete,
  onEdit,
}) => {
  return (
    <div className="bg-teal-100 shadow-md rounded-xl max-w-xl overflow-hidden border border-gray-200">
      <div className="p-5">
        <h3 className="font-semibold text-teal-600 mb-2 sm2xl:text-sm">
          {title}
        </h3>
        <p className="text-gray-600 text-sm sm2xl:text-xs">{description}</p>
      </div>
      {showEditDelete && (
        <div className="flex justify-end space-x-4 px-4 pb-4 border-gray-200">
          <button
            onClick={() => onEdit(id)}
            className="border text-sm rounded font-medium border-teal-600 text-teal-600 px-4 py-1 hover:bg-teal-500 hover:text-white hover:border-teal-500 transition sm2xl:text-xs sm2xl:py-1 sm2xl:px-3"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(id)}
            className="border text-sm rounded font-medium border-red-500 text-white bg-red-500 px-4 py-1 hover:bg-red-500 hover:text-white transition sm2xl:text-xs sm2xl:py-1 sm2xl:px-3"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default FAQCard;
