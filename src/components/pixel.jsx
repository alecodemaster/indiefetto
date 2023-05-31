import React from "react";
import { Fragment } from "react";
import '../style/pixel.css'

function PixelStory() {
  return (
    <Fragment>
      <div className="striscia text-white text-end p-5 text-2xl font-extrabold">
        <p class="opacity-70">Time Capsule</p>
      </div>
      <div className="pixelstory">
        <h1 className="text-xl text-center font-bold my-2 text-gray-900">
          Pixel Art
        </h1>
        <p className="text-gray-700">
          Benvenuti nella mia pagina: vogliotornàbambina. <br />
          Nel lontano 2005/7, possedevo un sito su Altervista, interamente
          creato da me con Macromedia Dreamweaver. Era un rosissimo contenitore
          per i miei disegni in pixel. <br />
          Qualche tempo fa, grazie a uno snapshot, sono riuscita a reperire lo
          scheletro del sito. Speravo di riuscire a recuperare alcune delle mie
          creazioni, ma purtroppo sono riuscita a trovare solo l'icona
          dell'indice primordiale (che avete appena cliccato per accedere a
          questa pagina). <br />
          Non essendo abituata alla docile resa, ho acquistato Aseprite e mi
          sono rimessa all'opera. <br />
          Ammetto di aver perso un po' di smalto, ma è stato comunque
          divertente. <br />
          <br />
          Qui sotto potete ammirare una battaglia (credo, non lo so, sono
          piuttosto indipendenti) tra alcune delle mie recenti creature.
        </p>
      </div>
    </Fragment>
  );
}

export default PixelStory;
