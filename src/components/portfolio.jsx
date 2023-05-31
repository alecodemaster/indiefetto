import React from "react";
import "../App.css";
import ProjectCard from "./projectcard";
import CardPort from "./cardport";
import Costantino from "../img/costantinosanna.png";
import Giuseppe from "../img/giuseppedt.png";
import Colon from "../img/colon.png";
import enchanted from "../img/enchanted.png";
import enter from "../img/enter.jpg";
import { Link } from "react-router-dom";
import Skills from "./skills";
import Feedbackg from "../img/feedback1.PNG";
import Feedbackc from "../img/feedback2.PNG";
import CardLab from "./labcard";
import Utility from "./utility";
import Mui from "./muitest";

function Portfolio() {
  const projects = [
    {
      id: 4,
      title: "Enchanted Team",
      image: enchanted,
      description:
        "Una coppia fantastica, due ragazzi coraggiosi che respirano arte e che per essa sono disposti a rischiare tutto.",
      technologies: ["ReactJS", "Tailwind CSS"],
      liveUrl: "https://enchantedteam.altervista.org/",
      // githubUrl: "https://github.com/example/project-2",
      feedback: Feedbackg,
    },

    {
      id: 1,
      title: "Costantino Sanna",
      image: Costantino,
      description:
        "Costantino è uno scrittore sardo, un visionario, ha posti nella mente dove rifugiarsi, sogni in cui riconoscersi, ricordi in cui specchiarsi, storie che gli scivolano dalle dita. Durante la realizzazione del sito gli ho fatto un'ora di intervista e in alcune cose ho scoperto che siamo simili. Ama follemente la sua terra: la Sardegna, della quale sembra amico e custode, odia la noia e la banalità.",
      technologies: ["Tailwind CSS"],
      liveUrl: "https://www.costantinosanna.it",
      feedback: Feedbackc,
      // githubUrl: "https://github.com/example/project-1",
    },
    {
      id: 2,
      title: "Colostomia 2.0",
      image: Colon,
      description:
        "Un giovane programmatore, durante l'ennesima giornata in ufficio, preda della quotidiana noia, provò a reindirizzare nell'interfaccia audio del suo sistema Linux un file di testo con il quale aveva giornalmente a che fare. Generò così un rumore sgradevole che ricordava quello di una vecchia stampante...",
      technologies: ["ReactJS", "Tailwind CSS"],
      liveUrl: "https://colostomia.altervista.org",
      // githubUrl: "https://github.com/example/project-2",
    },
    {
      id: 3,
      title: "Giuseppe De Tommasi",
      image: Giuseppe,
      description:
        "Il primo ospite del mio progetto è Giuseppe de Tommasi, un Maestro Cartapestaio leccese che ha portato i suoi presepi in tutto il mondo, dando fregio al nostro paese e alla nobile arte della cartapesta.",
      technologies: [
        "Html5",
        "CSS3",
        "Bootstrap",
        "Javascript",
        "JQuery",
        "PHP",
      ],
      liveUrl: "https://www.giuseppedetommasi.it",
      // githubUrl: "https://github.com/example/project-2",
      feedback: Feedbackg,
    },
  ];

  return (
    <div className="p-4 md:p-8 select-none">
      {/* <DropdownMenu /> */}
      <CardPort />
      <div id="skills">
      <Skills />
      </div>
      <div className="mx-auto px-4 py-8 lg:flex">
        <Utility />
        <CardLab
          title="Indiefetto Lab"
          subtitle="Live Lab"
          labLink="https://indiefetto.altervista.org/"
          githubLink="https://github.com/alecodemaster/indiefetto"
        />
      </div>

      <hr className="my-5" />
      <div className="pt-8">
        <p className="origin-bottom mx-auto max-w-lg skew[-6deg] rounded-tr-[10%] bg-neutralbg p-8 text-left md:text-center rounded-md shadow-inner shadow-zinc-900">
          <h1 className="font-bold text-primarypink text-2xl">Get a light</h1>
          Tanti artisti svaniscono, lontani dalle vetrine virtuali: scrittori,
          musicisti, pittori, scultori... nascosti tra le pieghe di un paese
          dove i musicisti son solo quelli dei talent e i libri li scrivono gli
          influencer.
          <br />
          Vorrei dare loro una vetrina, provare ad illuminarla, e poi chissà...
          la cosa più importante sarà la collaborazione e divertirsi creando
          insieme qualcosa. <br />
          <br />
          Tutti i progetti saranno in costante evoluzione, più imparo, più
          applico.
          <br />
          <br />
          Stay tuned!
        </p>
        <div className="flex flex-wrap justify-center lg:justify-start">
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-full 2xl:w-1/4 sm:w-1/2 px-4 mb-4 flex-shrink-0"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      <div class="flex flex-wrap justify-center">
        {/* <div class="p-4">

                    <a
                        href="https://www.behance.net/alessiagaudioso"
                        target={'_blank'}
                        class=" bg-primarypink mt-10 text-gray-50 py-2 px-4 rounded-lg block text-center shadow-md shadow-zinc-900 hover:bg-zinc-700">
                        Behance profile

                    </a>
                </div> */}
      </div>

      <Mui />

      <button>
        <Link to="/pixel">
          <img
            className="mt-5 grayscale brightness-50 rounded-md shadow-md shadow-zinc-800 animate-bounce"
            src={enter}
            alt="Project"
          />
        </Link>
      </button>
    </div>
  );
}

export default Portfolio;
