import React from 'react';

const Modal = ({ image, onCloseModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="relative z-10 bg-black p-4">
        <img src={image} alt="Modal Image" className="w-full h-auto" />
        <button className="absolute top-2 right-2 text-white" onClick={onCloseModal}>
        <i className= "fi fi-ss-cross-circle"></i>
        </button>
      </div>
    </div>
  );
};

export default Modal;
