import React from "react";
import uomope from "../img/uomopefi.png";
import cent from "../img/cent3.png";
import atr from "../img/alessia_theRing.png";
import ktumov from "../img/ktumov.gif";
import magofanculo from "../img/magofanculo.gif";
import samor from "../img/samor2.png";

function PixelBox() {
  return (
    <div className="pixelbox border-2 border-gray-400">
      <div className="grid flex-row md:grid-cols-2 gap-2">
        <div className="flex justify-center items-center">
          <img className="pixel animate-bounce" src={ktumov} alt="" />
          <img className="pixel" src={cent} alt="" />
          <br />
        </div>

        <div className="flex justify-center items-center">
          <img className="pixel" src={uomope} alt="" />
          <img
            className="pixel"
            src={magofanculo}
            alt=""
            style={{ borderRadius: "60%" }}
          />
        </div>
      </div>
      <div className="flex flex-row justify-center mb-20">
        <img src={samor} alt="" />
      </div>

      <div className="w-full flex justify-center items-center p-5">
        <img className="shadow-md shadow-fuchsia-700" src={atr} alt="" />
      </div>
      <div className="bc">
        Background credits: <br />
        <a
          href="https://commons.wikimedia.org/wiki/File:Computer-screen-code-glitch-animation-gif-background-free.gif"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wikimedia Commons
        </a>
      </div>
    </div>
  );
}

export default PixelBox;
