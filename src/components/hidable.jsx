import React, { useState } from "react";

const HideableContent = ({ children }) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const showContent = () => {
    setIsContentVisible(true);
  };

  const hideContent = () => {
    setIsContentVisible(false);
  };



  return (
    <div>
        <button onClick={hideContent}>Chiudi </button>
        <button onClick={showContent}>| Apri</button>
      {isContentVisible && children}
    </div>
  );
};

export default HideableContent;