import React from "react";
import img from "../img/lab.png";
import laboratorio from '../img/labor.png'

const CardLab = ({ title, subtitle, labLink, githubLink }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-2">
      <img
        className="w-full rounded-md shadow-inner"
        src={img}
        alt="Intestazione"
      />
      <div className="px-4 py-2">
        <h2 className="text-gray-800 text-xl font-bold">{title}</h2>
        <p className="text-gray-600 text-sm mt-1">{subtitle}</p>
        <div className="mt-4">
          <p className="mb-2">
            {" Qui puoi sbirciare i miei progetti in fase di sviluppo."}
            <br />
          </p>
          <a
            href={labLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primarypink text-sm font-semibold hover:text-gray-500 mr-2 mb-2"
          >
            Visita il laboratorio
          </a>

          <hr className="my-5" />
          <p className="mb-4">
            Qui puoi trovare una vecchia versione del codice sorgente di questo sito. <br />
            Se sei appassionato di programmazione o semplicemente curioso di
            vedere come è stato realizzato, ti invito a dare
            un'occhiata.
            <br />
            Se hai consigli sarei felice di sentirli. <br />
            Compila il{" "}
            <a
              className="text-primarypink hover:text-zinc-700"
              href="/contatti"
            >
              form
            </a>
            .
          </p>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-primarypink p-2 rounded-md text-sm font-semibold hover:bg-zinc-700"
          >
            <i className="fi fi-brands-github"></i> GitHub
          </a>

          <img className="rounded-lg cardm opacity-80 mt-5" src={laboratorio}></img>
        </div>
      </div>
    </div>
  );
};

export default CardLab;
