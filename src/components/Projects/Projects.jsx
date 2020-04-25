import React from 'react';
import Project from './Project';
import './Projects.css';
import MsgBoardImg from './Images/AnonMsgBoard.png';
import StockPriceImg from './Images/b_table_Img.png';
import PersonalLibraryImg from './Images/Galerie_VDb.png';
import IssueTrackerImg from './Images/langerba.png';
import MIConverterImg from './Images/bleus.png';
import CortalaImg from './Images/balise_html.png';
import Bomberman from './Images/bomberman.png';
import Birdy from './Images/Birdy.png';
import Carte from './Images/carte.png' ;
const Projects = props => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">Mes Projects</h3>
          <p className="separator" />
          <p className="subtitle">
           <p> Tous mes projets, logiciels | applications mobiles | sites web, se trouvent ici, dans mon  portefeuille de compétences. </p>
           {/* <span>NB : Il n'y a pas encore d'application mobile publiée.</span>  */}
          </p>
        </div>
        <div className="projects-wrapper">
        <Project
            title="Carte de voeux ."
            img={Carte}
            tech="php js css html "
            link="https://youssoufa.promo-31.codeur.online/carte-voeux/carte.html"
            repo="https://github.com/amour-youcef/Carte-de-voeux"
          >
            <small>
              {/* test git */}
              <h2>Projet seul à l'ACS</h2>
              j'ai utilisé PHP, JAVASCRIPT, CSS + HTML. Durée 4 jours.
            </small>
            <p>
            j'ai réalisé une carte de voeux en html.
            </p>
          </Project>
        <Project
            title="Projet Birdy ."
            img={Birdy}
            tech="php js css html "
            link="https://youssoufa.promo-31.codeur.online/ProjetBirdy/"
            repo="https://github.com/amour-youcef/ProjetBirdy"
          >
            <small>
              <h2>Projet en groupe à l'ACS</h2>
              j'ai utilisé PHP, JAVASCRIPT, CSS + HTML. Durée 4 jours.
            </small>
            <p>
              j'ai recréé l'application web "Wetransfer", avec upload, stockage, envoi de mail automatique.
            </p>
          </Project>
          <Project
            title="projet Kritik ."
            img={MsgBoardImg}
            tech="php js css html "
            link="https://youssoufa.promo-31.codeur.online/Kritik/"
            repo="https://github.com/amour-youcef/kritik"
          >
            <small>
              <h2>Projet en groupe à l'ACS</h2>
              j'ai utilisé PHP, JAVASCRIPT, CSS + HTML. Durée 4 jours.
            </small>
            <p>
              un site web qui permet de lister plusieurs films et de les afficher par Genre, Acteurs, Réalisateurs.
            </p>
          </Project>
          <Project
            title="Table de multiplication."
            img={StockPriceImg}
            tech="php js css html"
            link="https://youssoufa.promo-31.codeur.online/Table-de-multiplication/"
            repo="https://github.com/amour-youcef/Table-de-multiplication"
          >
            <small>
            <h2>Projet en groupe à l'ACS</h2>
              j'ai utilisé PHP, js, CSS + HTML. Durée 2 jours.
            </small>
            <p>
            Utilisation des sessions en PHP pour créer un site qui affiche le résultat de la multiplication des petits nombres entiers naturels.
            </p>
          </Project>
          <Project
            title="jeu bomberman."
            img={Bomberman}
            tech="js css html"
            link="https://youssoufa.promo-31.codeur.online/bomberman/"
            repo="https://github.com/amour-youcef/bomberman"
          >
            <small>
             <h2>Projet en groupe à l'ACS</h2>
              j'ai utilisé JavaScript, CSS + HTML.Durée 3 jours
            </small>
            <p>
            j'ai réalisé le jeu mythique bomberman.
            </p>
          </Project>
          <Project
            title="Galerie_VDB."
            img={PersonalLibraryImg}
            tech="js css "
            link="https://youssoufa.promo-31.codeur.online/Galerie_VDB/"
            repo="https://github.com/amour-youcef/Galerie_VDB"
          >
            <small>
            <h2>Projet en groupe à l'ACS</h2>
              j'ai utilisé Bootstrap, CSS + HTML. Durée 3 jours.
            </small>
            <p>
            j'ai réalisé un site de galerie d'art.
            </p>
          </Project>
          <Project
            title="Intégration avec Bootstrap"
            img={IssueTrackerImg}
            tech="Bootstrap css html"
            link="https://youssoufa.promo-31.codeur.online/langerba/Langerba.html"
            repo="https://github.com/amour-youcef/maquette_langerba"
          >
            <small>
            <h2>Projet seul à l'ACS</h2>
              j'ai utilisé Bootstrap4, CSS + HTML. Durée 2 jours.
            </small>
            <p>
            Intégration d'une maquette en utillisant le framework Bootstrap.
            </p>
          </Project>
          <Project
            title="BLUEASY"
            img={MIConverterImg}
            tech=" css "
            link="https://youssoufa.promo-31.codeur.online/bleuesy/blues.html"
            repo="https://github.com/amour-youcef/maquette_langerba"
          >
            <small>
              j'ai utilisé CSS + HTML.
            </small>
            <p>
            Intégration d'une maquette en utillisant HTML et CSS.
            </p>
          </Project>
          <Project
            title="balises HTML"
            img={CortalaImg}
            tech="php css html"
            link="https://youssoufa.promo-31.codeur.online/balises-html/page/"
            repo="https://github.com/amour-youcef/balises_html"
          >
            <small>
              j'ai utilisé PHP, CSS + HTML.
            </small>
            <p>
            création d'un site de Présentation des balises HTML.
            </p>
          </Project>
        </div>
      </div>
    </section>
  );
};

export default Projects;
