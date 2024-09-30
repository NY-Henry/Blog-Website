import React, { useState } from "react";

const Model = ({
  modalTitle = "Modal Title",
  modalMessage = "This is a simple modal",
  modalCloseButtonText = "Close",
  handleClick,
  closeModal,
  modalStatus = false,
}) => {
  return (
    <>
      {modalStatus && (
        <div
          onClick={closeModal}
          id="modal"
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-96 rounded-lg bg-white p-6 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">{modalTitle}</h2>
              <button
                onClick={closeModal}
                id="close-btn"
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>

            <div className="mt-4 text-lg">
              <p className="text-gray-600">{modalMessage}</p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={handleClick}
                id="close-footer-btn"
                className="rounded-md bg-red-500 px-4 py-2 text-white"
              >
                {modalCloseButtonText}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Model;
