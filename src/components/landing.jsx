import React, { Fragment } from "react";
import Card from "./card";
import About from "./about";
import '../img/nuovologogrande.png'

const Landing = () => {
  // const images = [
  //   "../nuovologogrande.png",
  //   "../nuovologogrande.png",
  //   "../nuovologogrande.png",
  //   "../nuovologogrande.png",
  //   "../nuovologogrande.png",
  //   "../nuovologogrande.png",
  //   "../nuovologogrande.png",
  //   "../nuovologogrande.png",
  // ];
  return (
    <Fragment>
      <h1 className="text-center m-10 font-bold bg-gradient-to-r from-primarypink via-pink-300 to-black text-transparent bg-clip-text md:text-2xl hidden">
        Scrittura urbana e Sviluppo web
      </h1>
      <div className="flex flex-col items-center justify-center my-10 mx-10">
        <div className="w-full sm:w-1/2 p-4">
          <Card />
        </div>
      </div>

      <hr className="mb-9" />
      <About />

      {/* <div>
        <h1>La mia galleria immagini</h1>
        <ImageGallery images={images} />
      </div> */}
    </Fragment>
  );
};

export default Landing;
