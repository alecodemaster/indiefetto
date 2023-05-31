import React, { useState } from "react";
import ImageGalleryItem from "./galleryitem";
import Modal from "./modalimages";

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <ImageGalleryItem
          key={index}
          image={image}
          onImageClick={handleImageClick}
        />
      ))}
      {selectedImage && (
        <Modal image={selectedImage} onCloseModal={handleCloseModal} />
      )}
    </div>
  );
};

export default ImageGallery;
