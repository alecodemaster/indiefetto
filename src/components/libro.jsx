import React from "react";
import "../App.css";
import vitamina from "../img/vitamina.jpg";
import "../style/general-module.css";

function Libro() {
  const quotes = [
    {
      text: "Capii che Paolo non aveva niente, che tutto quello che gli restava era qualche vestito, la dignità, un fiume di ricordi, qualche rimpianto, un’anima tappata piena di cose da scrivere e la sua fedele amica: Seta. Non provai pena per lui, ma gioia. Lui era arrivato ad un punto molto interessante dell’esistenza: quello dei resoconti. Non tutti ci possono arrivare, non tutti ci arrivano perché la maggior parte della gente consuma una vita ciclica e sterile, fatta di sbagli perpetuati e migliorati di volta in volta, ma mai corretti. In pochi, sono quelli che si fermano a pensare e a contare le proprie cicatrici, toccandole con la punta delle dita stanche.",
    },
    {
      text: "Va bene nuvola, sono qui. Hai tutta la mia attenzione! Ho buttato via i popcorn, ho nascosto il sole, fammi vedere cosa vuoi piovere, mostrami cosa ancora ti fa male, disegnami il cielo sereno che può farti esplodere per sempre.",
    },
    {
      text: "Il mare di notte perdeva il suo blu e la sua grandezza, diventando solo un rumore e una certezza impalpabile. Nemmeno affacciandosi dalla cima dello scoglio più alto lo si poteva osservare eppure non vi era dubbio che ci fosse e che, impetuoso come sempre, restasse in disparte solo per riposarsi. Il mare si dona a noi e appaga il nostro bisogno di pace dall’alba fino al tramonto e di notte ha bisogno di nascondersi per ricaricarsi. Non facciamo forse così anche noi?",
    },
    {
      text: "L’ingresso era angusto e impersonale, ma poco mi importava. Non ero partita per rilassarmi. Non sapevo nemmeno perché diavolo fossi partita in realtà. Presi un posto letto in una stanza da quattro, che al mio arrivo era vuota. Dopo aver sistemato in un angolo la valigia, mi lanciai sul letto e mi distesi supina. Le pareti avevano un colore ibrido tra piscio e Solero, i due letti a castello avevano scheletri rossi e l’aria odorava di birra stantia, lavanda e fumo. Cercai una crepa che nessuno avesse stuccato da osservare, per sentirmi un po’ a casa. Ovviamente la trovai.",
    }
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div>
    <div className="flex flex-col lg:flex-row md:justify-center md:items-center m-2 md:m-20 select-none text-sm mb-5 text-black">
      <div className="w-full mx-auto md:mx-0">
        <a
          href="https://www.amazon.it/Vitamina-D-Alessia-Gaudioso-ebook/dp/B08P9QYJC1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={vitamina}
            alt="Vitamina D, Alessia Gaudioso"
            className="transform cardm origin-right rotate-[-4deg] skew[-2deg] rounded-tr-[25%] w-1/2 mx-auto shadow-sm shadow-zinc-700 my-10"
          />
        </a>
      </div>
      <div className="w-full mx-auto px-4 shadow-md shadow-zinc-700 m-5 from-white to-pink-300 bg-gradient-to-l max-w-md">
        <h2 className="text-2xl md:text-3xl font-bold m-2 text-primarypink">
          Vitamina D
        </h2>
        <h1 className="mb-1 font-bold">Alessia Gaudioso</h1>
        <br />
        <h1 className="m-2 text-md font-semibold">
          Immagina una strada assolata, le cuffiette a venti, gli sbagli
          appallottolati nella tasca dei jeans... e di parlare da solo.
        </h1>
        <p className="mb-4 text-left p-4">
          Nella vita capita di imbattersi in persone e situazioni tossiche e se
          si ha la giusta fragilità d'animo, capita anche di restarne
          intrappolati. Solo con il tempo ci si accorge che da ogni fallimento è
          possibile trarre qualcosa di positivo per la propria crescita.
          <br />
          Martina, la protagonista di questa storia, non ha fretta di voltare
          pagina e si gode il viaggio, facendo quotidianamente i conti con la
          sofferenza, generoso lascito di una relazione passata.{" "}
          <br />
          Accarezzata da una fredda Torino cerca di smaltirla piano, come se
          fosse una brutta sbornia. <br />
          <br />
          <button className="bg-primarypink hover:bg-zinc-700 shadow-md shadow-zinc-900 text-gray-50 font-bold py-2 px-4 rounded-lg mt-5 w-full">
            <a
              href="https://www.amazon.it/Vitamina-D-Alessia-Gaudioso-ebook/dp/B08P9QYJC1"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Adottami
            </a>
          </button>
        </p>
        <div className="p-4">
          <h2 className="text-xl font-bold text-primarypink mb-2">
            Informazioni
          </h2>
          <p>
            <strong>Data di pubblicazione:</strong> 28 novembre 2020
          </p>
          <p>
            <strong>Numero di pagine:</strong> 116
          </p>
          <p>
            <strong>Genere:</strong> Narrativa
          </p>
          <p>
            <strong>Formato disponibile:</strong> Kindle - Copertina flessibile - Audiolibro
          </p>
          <p>
            <strong>Lingua:</strong> Italiano
          </p>
        </div>
      </div>

      <div className="w-full mx-auto md:px-0 max-w-md">
        <div className="text-left p-4 bg-gradient-to-r from-white to-pink-300 rounded-tr-[25%] shadow-md shadow-zinc-700 hover:text-md">
          <h2 className="text-2xl md:text-3xl font-bold text-primarypink mb-4">
            Nota
          </h2>
          Ti dedico l’Indie, la grandine, il caffè senza zucchero, la cioccolata
          fondente, il tacco 12, una notte in tenda a 0 gradi, il mare in
          burrasca, i chiodi di garofano.
          <br /> Ti dedico Naypyidaw, un viaggio di 14 ore in bus, una piazza
          alle 5 di mattina, i sobborghi dove hai paura che ti scippino, lo zip
          che non parte, la fondazza della birra. <br />
          Per seguirmi ci vuole orecchio, empatia, gusto, insensatezza,
          coraggio, pelle dura, amore per l’ignoto, stupore, stomaco,
          autoironia. <br />
          Io sono come me, quando entro nel panico perché non mi ricordo come
          girare la frittata in padella, sono come me, quando inciampo sui lacci
          legati male, sono come me quando piango alla luna e nessuno mi vede.
          Quando scrivo sono come me.
          <br /> Nella notte si sveglia il fantasma di tutti i miei Natali e mi
          salta sopra al letto, sotto al letto ci nascondo i folletti cattivi e
          prima di addormentarmi imbocco uno scivolo imburrato di sogni e
          fiducia.
          <br /> Continua a leggere solo se di mattina nel latte ci pucci i
          pensieri, se di notte le stelle ti bruciano il cuscino.
        </div>
      </div>
    </div>

    <div className="text-right p-4 bg-gradient-to-r from-white to-gray-200 rounded-tr-[25%] shadow-md shadow-zinc-700 hover:text-md">
          <h3 className="text-lg font-semibold text-primarypink">Citazione del giorno:</h3>
          <p className="text-sm italic text-gray-600">{randomQuote.text}</p>
        </div>

    </div>

    
  );
}

export default Libro;
