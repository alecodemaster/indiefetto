import React, { useState } from 'react';
import css from '../img/css.jpg'
import html from '../img/html.jpg'
import javascript from '../img/javascript.jpg'
import jquery from '../img/jquery.jpg'


function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedImage('');
    setIsOpen(false);
  };

  return (
    <div>
      <div className="md:flex md:flex-col justify-center mt-10 gap-2 items-center">
        <button className="bg-primarypink text-gray-50 font-bold md:w-1/4 w-full text-xs md:text-md p-2 mb-1 hover:rotate-3 hover:scale-110" onClick={() => handleOpenModal(html)}>
          Html5
        </button>
        <button className="bg-primarypink text-gray-50 font-bold md:w-1/4 w-full text-xs md:text-md p-2 mb-1 hover:rotate-3 hover:scale-105" onClick={() => handleOpenModal(css)}>
          CSS3
        </button>
        <button className="bg-primarypink text-gray-50 font-bold md:w-1/4 w-full text-xs md:text-md p-2 mb-1 hover:rotate-3 hover:scale-105" onClick={() => handleOpenModal(javascript)}>
          Javascript
        </button>
        <button className="bg-primarypink text-gray-50 font-bold md:w-1/4 w-full text-xs md:text-md p-2 mb-1 hover:rotate-3 hover:scale-105" onClick={() => handleOpenModal(jquery)}>
          JQuery
        </button>

      </div>

      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-3xl w-full">
            <button onClick={handleCloseModal} className="absolute top-0 right-0 m-4 text-black font-bold focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img src={selectedImage} className="mx-auto" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;