import React from "react";
import logo from "../img/nuovologo.png";
import { Link } from "react-router-dom";
import Navbar from "./dropdown";
import { Helmet } from "react-helmet";

function Header() {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <header className="bg-zinc-800 h-30 flex justify-between items-center px-4 sm:px-8 shadow-md shadow-pink-700 select-none">
      <Helmet>
        <meta
          name="description"
          content="Ciao! Sono una scrittrice e sviluppatrice web, ovvero una persona che scrive codice e parole, a volte contemporaneamente! Sul mio sito puoi trovare un mix di creatività e tecnologia, insieme a un pizzico di follia. Non prometto di non impazzire a volte, ma ti prometto un'esperienza unica e divertente. Entra nel mio mondo e lasciati sorprendere!"
        />
        <link rel="canonical" href="https://www.indiefetto.it" />
      </Helmet>
      <div className="flex items-center">
        <Link to="/*">
          <img
            src={logo}
            className="w-16 my-5 mr-2 rounded-full hover:scale-105"
            alt="Indiefetto"
          />
        </Link>
        {/* <span className="text-slate-50 font-bold text-lg hidden lg:block glow-text">
          Indiefetto
        </span> */}
      </div>
      <nav className="hidden sm:block">
        <ul className="flex space-x-6 text-neutralbg font-bold">
          <li className="hover:text-primarypink hover:scale-110">
            <Link to="/*">Home</Link>
          </li>
          <li className="hover:text-primarypink hover:scale-110">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="hover:text-primarypink hover:scale-110">
            <Link to="/libro">Il mio libro</Link>
          </li>
          <li className="hover:text-primarypink hover:scale-110">
            <Link to="/contatti">Contatti</Link>
          </li>
        </ul>
      </nav>
      <Navbar />
      <div className="hidden sm:block">
        <a
          href="https://evitolaforma.altervista.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-white text-primarypink font-bold py-2 px-4 rounded-lg shadow-md shadow-white hover:scale-110">
            Blog
          </button>
        </a>
      </div>
    </header>
  );
}

export default Header;
