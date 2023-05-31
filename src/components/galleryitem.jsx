import React from "react";

const ImageGalleryItem = ({ image, onImageClick }) => {
  const handleClick = () => {
    onImageClick(image);
  };

  return (
    <div className="p-2">
      <img
        src={image}
        alt="Gallery Item"
        className="w-full h-auto cursor-pointer"
        onClick={handleClick}
      />
    </div>
  );
};

export default ImageGalleryItem;
