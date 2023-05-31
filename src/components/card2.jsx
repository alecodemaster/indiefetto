import React from "react";
import alex from "../alex.jpg";

const CardWithOverlay = () => {
  return (
    <div class="relative">
      <img class="w-full h-64 object-cover" src={alex} alt="Card Image" />
      <div class="absolute inset-0 bg-gray-800 opacity-50"></div>
      <div class="absolute inset-0 flex justify-center items-center">
        <h3 class="text-3xl text-white font-bold">Card Title</h3>
      </div>
    </div>
  );
};

export default CardWithOverlay;
