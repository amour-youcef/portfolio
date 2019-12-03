import React ,{Component} from 'react';
import {Grid , Cell} from 'react-mdl';
import Education from './education';
import Experiences from './experience';
import Skills from './skills';

import mini from '../img/mini.jpg';

class Resume extends Component {
    render(){
        return (
            <div>
                <Grid>
                <Cell col={4}>
                     <div style={{textAlign: 'center'}}>
                         <img
                        src="http://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                        //src={mini} alt="logo"
                         alt="avatar"
                         style={{height: '200px'}}
                         />
                     </div>
                     <h2 style={{padding: '2em'}}>Youssouf AMOUR DIT ZERROUK</h2>
                     <h4 style={{color: 'grey'}}> Développeur Web</h4>
                     <hr style={{borderTop: '3px solid #833fb2',width:'50%'}}/>
                     <p>Passionné par le développement d'application, je mets à votre disposition mes projets dans ce portfolio.</p>
                     
                     <h5>Address</h5>
                     <hr style={{borderTop: '3px solid #833fb2',width:'50%'}}/>
                     <p>06 rue de vienne <br></br>90000 Belfort </p>
                     <h5>Phone</h5>
                     <p>(+33) 6 86 06 23 52 </p>
                     <h5>Email</h5>
                     <p>amour.youssouf@gmail.com</p>
                     {/* <h5>Web</h5>
                     <p>mywebsite.com</p> */}
                     <hr style={{borderTop: '3px solid #833fb2',width:'50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                    <h2>FORMATION</h2>
                     <Education
                     startYear={2019}
                     endYear={2020}
                     schoolName="Access Code School (Belfort 90)"
                     schoolDescription="En cours d'obtention du titre professionnel de web Développeur/Designer."
                     />

                    <Education
                     startYear={2016}
                     endYear={2017}
                     schoolName="NextFormation(Vincennes 94)"
                     schoolDescription="Obtention Licence de Concepteur Développeur Informatique (Java/JEE)."
                     />
                         <Education
                     startYear={2006}
                     endYear={2010}
                     schoolName="Université Hassiba Benbouali (Algérie) "
                     schoolDescription="Obtention Licence d'intelligence Artificielle en Informatique."
                     />


                     <hr style={{borderTop: '3px solid #e22947'}}/>

                     <h2> Experiences </h2>

                     <Experiences
                        startYear={2017}
                        endYear={2018}
                        jobName = "Faurecia Etupes(25) -agence intérim AECCO"
                        jobDescription = "Préparation de commandes : travail en équipe 5h-13h/13h-21h"
                     />
                        <Experiences
                        startYear={2017}
                        endYear={2017}
                        jobName = " Société Alm Team Consulting (paris)"
                        jobDescription = "Conception/Développemnet d'une application pour la gestion E-commerce"
                     />
                        <Experiences
                        startYear={2014}
                        endYear={2016}
                        jobName = " Faurecia Etupes(25) -agence intérim AECCO "
                        jobDescription = "Préparation de commandes : travail en équipe 5h-13h/13h-21h."
                     />
                        <Experiences
                        startYear={2012}
                        endYear={2014}
                        jobName = " Assemble Populaire Communale (Algérie) "
                        jobDescription = "Administrateur Informatique (Installation/configuration)"
                     />

                    <hr style={{borderTop: '3px solid #e22947'}}/>  

                    <h2>Competonces</h2>
                    <Skills
                     Skill="PHP"
                     progress={80}
                    />
                    <Skills
                     Skill="JavaScript"
                     progress={70}
                    />
                     <Skills
                     Skill="Java/JEE"
                     progress={60}
                    />
                     <Skills
                     Skill="HTML/CSS"
                     progress={80}
                    />
                     <Skills
                     Skill="REACT"
                     progress={50}
                    />
                     <Skills
                     Skill="ANGULAR"
                     progress={40}
                    />
                     <Skills
                     Skill="SPRING"
                     progress={40}
                    />
                    </Cell>
                </Grid>
            </div>
        )
    }
}


export default Resume ;