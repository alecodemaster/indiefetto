import React from "react";
import "../style/general-module.css";

const Skills = () => {
  return (
    <section className="p-5">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-10">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg cardm opacity-80">
            <h3 className="text-lg mb-4 text-primarypink font-bold">
              Web Development
            </h3>
            <ul className="text-gray-500 space-y-1">
              <li>
                <i className="devicon-html5-plain-wordmark"></i> HTML5
              </li>
              <li>
                <i className="devicon-css3-plain"></i> CSS3
              </li>
              <li>
            <i className="devicon-javascript-plain"></i> JavaScript</li>
              <li>
                <i className="devicon-react-original"></i> React
              </li>
              <li>
                <i className="devicon-materialui-plain"></i> Material UI
              </li>
              <li>
                <i className="devicon-tailwindcss-plain"></i> Tailwind CSS
              </li>
              <li>
                <i className="devicon-bootstrap-plain"></i> Bootstrap
              </li>
              <li>
                <i className="devicon-jquery-plain"></i> jQuery
              </li>
              <li>
                <i className="devicon-nodejs-plain"></i> Node.js
              </li>
              <li>
                <i className="devicon-git-plain"></i> Git
              </li>
              <li>
                <i className="devicon-gitlab-plain"></i> GitLab
              </li>
              <li>
                <i className="devicon-github-original"></i> GitHub
              </li>
              <li>
                
            <i className="devicon-visualstudio-plain"></i> Visual Studio Code
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg cardm opacity-80">
            <h3 className="text-lg text-primarypink font-bold mb-4">
              Marketing e SEO
            </h3>
            <ul className="text-gray-500 space-y-1">
              <li><i className= "fi fi-rr-key"></i> Keyword research</li>
              <li> <i className= "fi fi-rr-attribution-pen"></i> Copywriting</li>
              <li><i className= "fi fi-rr-feather"></i> Creazione di contenuti per blog e social media</li>
              <li><i className= "fi fi-rr-search-alt"></i> Web analytics</li>
              <li><i className= "fi fi-rr-globe"></i>  Ottimizzazione per la local SEO</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg cardm opacity-80">
            <h3 className="text-lg text-primarypink font-bold mb-4">
              Grafica e Design
            </h3>
            <ul className="text-gray-500 space-y-1">
              <li><i className="devicon-canva-original"></i> Canva</li>
              <li><i className= "fi fi-rr-film"></i>  Video editing - DaVinci Resolve</li>
              <li><i className= "fi fi-rr-picture"></i> Photo editing - Photoshop</li>
              <li><i className= "fi fi-rr-palette"></i> Pixel Art - Aseprite</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
