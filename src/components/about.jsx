import React from "react";
import "../App.css";
import studio from "../img/alex2.jpg";
import "../style/general-module.css";

function About() {
  return (
    <div className="flex flex-col md:flex-row text-xs mb-10">
      {/* Colonna sinistra */}
      <div className="md:w-1/3 flex justify-center items-center px-4">
        <img
          className="rounded-lg grayscale cardm opacity-80"
          src={studio}
          alt="Alessia Gaudioso"
        ></img>
      </div>

      {/* Colonna destra */}
      <div className="md:w-2/3 flex justify-center items-center px-4">
        <div className="m-10 text-left">
          <h1 className="text-3xl font-bold mb-4">Hi there!</h1>
          <p className="text-base mb-6">
            Alessia, scritta nel 1985. Torinese di nascita, sarda nel cuore. Ho
            un profondissimo legame con Torino e la sua malinconia danzante e
            con la Sardegna che non riesco a vivere quanto vorrei.
          </p>
          <p className="text-base mb-6">
            Sono una scrittrice a tempo perso e da poco una sviluppatrice web.
            La mia idea è quella di unire queste due grandi passioni per
            generare una forza unica che mi somigli il più possibile e poter
            portare passione e creatività in tutto ciò che faccio.
            <br />
            Non prometto troppo ordine ma belle idee.
          </p>
          <p className="text-base mb-6">
            Amo passeggiare da sola, leggere, la musica indie, rock, urban, il
            cantautorato italiano (vecchio e nuovo), il cinema, il calcio,
            l'odore della pioggia, camminare a piedi nudi e mordere il culo
            delle fragole.
          </p>
          <p className="text-base mb-6">
            Da anni pratico yoga, meditazione e cristalloterapia. Tiro bei pugni
            e bei calci di rigore, ma con la penna blu in mano forse sto più a
            mio agio. In 37 anni tante cose ho scritto e ne sono rimaste poche,
            mi piace definirmi un'appallottolatrice seriale: gran parte dei miei
            pensieri sono finiti nel cestino della carta.
            <br />
            Il codice mi sta aiutando a creare, per una volta, qualcosa che
            resti.
          </p>

          <p className="text-base">
            Grazie a chi è già qui e grazie a chi arriverà.
            <br /> <br />
            Love,
            <br /> <br />
            A.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
