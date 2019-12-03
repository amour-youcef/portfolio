import React from 'react';
import Project from './Project';
import './Projects.css';
import MsgBoardImg from './Images/AnonMsgBoard.png';
import StockPriceImg from './Images/b_table_Img.png';
import PersonalLibraryImg from './Images/Galerie_VDb.png';
import IssueTrackerImg from './Images/langerba.png';
import MIConverterImg from './Images/bleus.png';
import CortalaImg from './Images/balise_html.png';
const Projects = props => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">Mes Projects</h3>
          <p className="separator" />
          <p className="subtitle">
           <p> Tous mes projets, logiciels | applications mobile | sites web, se trouvent ici, dans mon  portefeuille de compétences. </p>
           <span>NB : Il n'y a pas encore d'application mobile publiée.</span> 
          </p>
        </div>
        <div className="projects-wrapper">
          <Project
            title="projet Kritik ."
            img={MsgBoardImg}
            tech="php js css html"
            link="https://youssoufa.promo-31.codeur.online/Kritik/"
            repo="https://github.com/amour-youcef/kritik"
          >
            <small>
              j'ai utilisé PHP , JAVASCRIPT ,CSS + HTML.
            </small>
            <p>
              un site web qui permet de lister plusieurs films et de les afficher par Genre, Acteurs, Réalisateurs.
            </p>
          </Project>
          <Project
            title="Table de multiplication."
            img={StockPriceImg}
            tech="js css react node"
            link="https://youssoufa.promo-31.codeur.online/Table-de-multiplication/"
            repo="https://github.com/amour-youcef/Table-de-multiplication"
          >
            <small>
              j'ai utilisé PHP , MSQL ,CSS + HTML.
            </small>
            <p>
            Une table de multiplication affiche  le résultat de la multiplication des petits nombres entiers naturels.
            </p>
          </Project>
          <Project
            title="Galerie_VDB."
            img={PersonalLibraryImg}
            tech="js css react node"
            link="https://youssoufa.promo-31.codeur.online/Galerie_VDB/"
            repo="https://github.com/amour-youcef/Galerie_VDB"
          >
            <small>
              j'ai utilisé PHP , MSQL ,CSS + HTML.
            </small>
            <p>
            Une table de multiplication affiche  le résultat de la multiplication des petits nombres entiers naturels.
            </p>
          </Project>
          <Project
            title="Langerba"
            img={IssueTrackerImg}
            tech="js css react node"
            link="https://youssoufa.promo-31.codeur.online/langerba/Langerba.html"
            repo="https://github.com/amour-youcef/maquette_langerba"
          >
            <small>
              j'ai utilisé Bootstrap4 ,CSS + HTML.
            </small>
            <p>
            Une table de multiplication affiche  le résultat de la multiplication des petits nombres entiers naturels.
            </p>
          </Project>
          <Project
            title="BLUESY"
            img={MIConverterImg}
            tech="js css react node"
            link="https://youssoufa.promo-31.codeur.online/bleuesy/blues.html"
            repo="https://github.com/amour-youcef/maquette_langerba"
          >
            <small>
              j'ai utilisé Bootstrap4 ,CSS + HTML.
            </small>
            <p>
            Une table de multiplication affiche  le résultat de la multiplication des petits nombres entiers naturels.
            </p>
          </Project>
          <Project
            title="balises HTML"
            img={CortalaImg}
            tech="js css react node"
            link="https://youssoufa.promo-31.codeur.online/balises-html/page/"
            repo="https://github.com/amour-youcef/balises_html"
          >
            <small>
              j'ai utilisé Bootstrap4 ,CSS + HTML.
            </small>
            <p>
            Presentation des balises HTML.
            </p>
          </Project>
        </div>
      </div>
    </section>
  );
};

export default Projects;
