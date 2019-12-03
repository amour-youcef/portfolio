import React from 'react';
import './About.css';

const About = props => {
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>Who's this guy?</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">À propos de moi.</h4>
            <p>
            Je suis un développeur Web  basé sur Belfort France .
            </p>
            <p>
            J'aime beaucoup résoudre des problèmes et rendre les choses jolies et faciles à utiliser. Je ne peux pas arrêter d'apprendre de nouvelles choses, je souhaite acquérir de l'expérience dans divers domaines tels que le développement d'applications lourdes et webs. Je suis capable de travailler en autonomie dans un environnement dynamique et exigeant. L'informatique a toujours été une passion et je souhaite en faire mon métier. Une forte motivation et des capacités d'analyse, de méthode et de rigueur m'aideront à forger mon avenir afin de devenir un bon développeur. 
            </p>
          </div>
          <div className="title">
            <h3>Qu'est-ce qu'il fait?</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">MES ACTIVITÉS.</h4>
            <p>
              For the front-end I usually work with Javascript, either standalone or including
              popular frameworks like ReactJS and VueJS. I also make the web pretty by using Sass,
              CSS and, whenever needed, any of their friends: Bootstrap, Bulma, etc.
            </p>
            <p>
            Pour le front-end, je travaille habituellement avec Javascript , qu'il soit autonome ou incluant des frameworks populaires tels que ReactJS et VueJS. Je fais aussi du beau Web en utilisant Sass, CSS et, le cas échéant, l’un de leurs amis: Bootstrap, etc.

            </p>
          </div>
          <div className="desc">
            <h4 className="subtitle">Aussi un designer.</h4>
            <p>
            Je me sens à l'aise avec de nombreux produits Adobe. Photoshop, Illustrator, InDesign, Lightroom ou Xd sont des types de standards de l'industrie et j'adore travailler avec eux. Je ne suis toutefois pas limité à eux: Gimp, Inkscape ou Figma sont également des applications très valables avec lesquelles j'ai travaillé.
            </p>
            <p>
            Interfaces utilisateur, brochures, livres, stratégie de marque ... Vous l'appelez! Comme je l'ai mentionné, créer de jolies choses est particulièrement important pour moi.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
