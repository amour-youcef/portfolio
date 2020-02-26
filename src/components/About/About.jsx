import React from 'react';
import sample from '../../Images/Author_BG.mp4';
import './About.css';

const About = props => {
  return (
    <section id="about">

     
  {/* <video  autoPlay loop muted>
    <source src={sample} type='video/mp4' />
    </video> */}

      <div className="wrapper">
        <article>
      
          <div className="title">

          <h3>Qui suis-je ?</h3>
            
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">À propos de moi.</h4>
            <p>
              Je suis un développeur Web  basé sur Belfort en France.
            </p>
            <p>
              J'aime beaucoup résoudre des problèmes et rendre les choses jolies et faciles à utiliser. Je ne peux pas arrêter d'apprendre de nouvelles choses, je souhaite acquérir de l'expérience dans divers domaines tels que le développement d'applications lourdes et web. Je suis capable de travailler en autonomie dans un environnement dynamique et exigeant. L'informatique a toujours été une passion et je souhaite en faire mon métier. Une forte motivation et des capacités d'analyse, de méthode et de rigueur m'aideront à forger mon avenir afin de devenir un bon développeur.
            </p>
          </div>
          <div className="title">
            <h3>Quelles sont mes compétences ?</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">Mes activités.</h4>
            <p>
              Pour le front-end, je travaille habituellement avec Javascript, qu'il soit autonome ou en incluant des frameworks populaires tels que ReactJS et VueJS. Je fais aussi responsive design en utilisant Sass, CSS et, le cas échéant, l’un de leurs amis: Bootstrap, etc.
  
            </p>
          </div>
          <div className="desc">
            <h4 className="subtitle">Aussi un designer.</h4>
            <p>
              Je me sens à l'aise avec de nombreux produits Adobe. Photoshop, Illustrator, InDesign, Lightroom ou Xd sont des logiciels standards de l'industrie et j'adore travailler avec. 
            </p>
         
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
