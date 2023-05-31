import React from "react";
import { useEffect, useState } from "react";

const Card = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Imposta show su true dopo un ritardo di 500ms
    setTimeout(() => {
      setShow(true);
    }, 500);
  }, []);
  return (
    <div
      className={`flex items-center justify-center mb-5 ${
        show ? "card slide-in" : ""
      }`}
    >
      <div
        className="max-w-2xl w-full p-8 rounded-lg shadow-md bg-white"
        style={{ opacity: show ? 1 : 0 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-primarypink">
          Storia lavorativa
        </h2>
        <p className="text-left">
          Ho iniziato a lavorare giovanissima, in un banco di abbigliamento
          usato del mercato di Santa Giulia. Mi sono poi trovata a ricoprire
          diversi ruoli, imparando ad essere versatile e aperta alle novità.
          <br />
          Non ho mai rifiutato grandi responsabilità, ma riconosco in me
          un'attitudine più da leader che da capo, piuttosto infruttuosa di
          questi tempi.
          <br />
          Ho svolto una moltitudine di lavori fisici, dalla barista notturna
          alla saldatrice, e ho moderatamente amato tutto ciò che ho fatto (amo
          soprattutto le spalle da rugbista e i bicipiti che mi sono rimasti in
          eredità).
          <br />
          <br />
          Attualmente, in un'impavida virata, mi sono gettata nello studio
          approfondito dello sviluppo web, riprendendo così in mano una passione
          nata nell'adolescenza e un mondo che avevo lungamente esplorato da
          autodidatta.
          <br />
          La cosa più bella è stata ritrovare lo stesso divertimento!
        </p>
      </div>
    </div>
  );
};

export default Card;
