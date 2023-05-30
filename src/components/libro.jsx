import React from "react";
import '../App.css'
import vitamina from '../img/vitamina.jpg'
import '../style/general-module.css'

function Libro() {
  return (
    <div className="flex flex-col lg:flex-row md:justify-center md:items-center m-2 md:m-20 select-none text-sm mb-5 text-black">
      <div className="w-full mx-auto md:mx-0">
      <a href="https://www.amazon.it/Vitamina-D-Alessia-Gaudioso-ebook/dp/B08P9QYJC1" target="blank"> <img src={vitamina} alt="Vitamina D, Alessia Gaudioso" className="transform hover:scale-105 origin-right rotate-[-4deg] skew[-2deg] rounded-tr-[25%] w-1/2 mx-auto shadow-sm shadow-zinc-700 my-10"/>
     </a> </div>
      <div className="w-full mx-auto px-4 shadow-md shadow-zinc-700 m-5 from-white to-pink-300 bg-gradient-to-l max-w-md">
        <h2 className="text-2xl md:text-3xl font-bold m-2 text-primarypink">Vitamina D</h2>
        <h1 className="mb-1 font-bold">Alessia Gaudioso</h1>
        <br />
        <h1 className="m-2 text-md font-semibold">Immagina una strada assolata, le cuffiette a venti, gli sbagli appallottolati nella tasca dei jeans... e di parlare da solo.</h1>
        <p className="mb-4 text-left p-4">
          Nella vita capita di imbattersi in persone e situazioni tossiche e se si ha la giusta fragilità d'animo, capita anche di restarne intrappolati. Solo con il tempo ci si accorge che da ogni fallimento è possibile trarre qualcosa di positivo per la propria crescita.<br />
          Martina, la protagonista di questa storia, non ha fretta di voltare pagina e si gode il viaggio, facendo quotidianamente i conti con la sofferenza, generoso lascito di una grottesca relazione passata. <br />
          Accarezzata da una fredda Torino cerca di smaltirla piano, come se fosse una brutta sbornia. <br />
          <br />
          <button class="bg-primarypink hover:bg-zinc-700 shadow-md shadow-zinc-900 text-gray-50 font-bold py-2 px-4 rounded-lg mt-5">
            <a href="https://www.amazon.it/Vitamina-D-Alessia-Gaudioso-ebook/dp/B08P9QYJC1" target="blank"> Adottami</a>
          </button>
        </p>

   
      </div>

      <div className="w-full mx-auto md:px-0 max-w-md cardm">
        <p className="text-left p-4 bg-gradient-to-r from-white to-pink-300 rounded-tr-[25%] shadow-md shadow-zinc-700 hover:text-md">
          <h2 className="text-2xl md:text-3xl font-bold text-primarypink mb-4">Nota</h2>
          Ti dedico l’Indie, la grandine, il caffè senza zucchero, la cioccolata fondente, il tacco 12, una notte in tenda a 0 gradi, il mare in burrasca, i chiodi di garofano.<br /> Ti dedico Naypyidaw, un viaggio di 14 ore in bus, una piazza alle 5 di mattina, i sobborghi dove hai paura che ti scippino, lo zip che non parte, la fondazza della birra. <br />Per seguirmi ci vuole orecchio, empatia, gusto, insensatezza, coraggio, pelle dura, amore per l’ignoto, stupore, stomaco, autoironia. <br />Io sono come me, quando entro nel panico perché non mi ricordo come girare la frittata in padella, sono come me, quando inciampo sui lacci legati male, sono come me quando piango alla luna e nessuno mi vede. Quando scrivo sono come me.<br /> Nella notte si sveglia il fantasma di tutti i miei Natali e mi salta sopra al letto, sotto al letto ci nascondo i folletti cattivi e prima di addormentarmi imbocco uno scivolo imburrato di sogni e fiducia.<br /> Continua a leggere solo se di mattina nel latte ci pucci i pensieri, se di notte le stelle ti bruciano il cuscino.
        </p>

      </div>
    </div>
  );
}

export default Libro; 