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
                     <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500</p>
                     <hr style={{borderTop: '3px solid #833fb2',width:'50%'}}/>
                     <h5>Address</h5>
                     <p>06 rue de vienne 90000 Belfort </p>
                     <h5>Phone</h5>
                     <p>(+33) 6 86 06 23 52 </p>
                     <h5>Email</h5>
                     <p>amour.youssouf@gmail.com</p>
                     <h5>Web</h5>
                     <p>mywebsite.com</p>
                     <hr style={{borderTop: '3px solid #833fb2',width:'50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                    <h2>FORMATION</h2>
                     <Education
                     startYear={2012}
                     endYear={2016}
                     schoolName="université de "
                     schoolDescription="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
                     />

                    <Education
                     startYear={2012}
                     endYear={2016}
                     schoolName="université de "
                     schoolDescription="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
                     />
                         <Education
                     startYear={2012}
                     endYear={2016}
                     schoolName="université de "
                     schoolDescription="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
                     />


                     <hr style={{borderTop: '3px solid #e22947'}}/>

                     <h2> Experiences </h2>

                     <Experiences
                        startYear={2012}
                        endYear={2016}
                        jobName = " frist job"
                        jobDescription = "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
                     />
                        <Experiences
                        startYear={2012}
                        endYear={2016}
                        jobName = " frist job"
                        jobDescription = "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
                     />
                        <Experiences
                        startYear={2012}
                        endYear={2016}
                        jobName = " frist job"
                        jobDescription = "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
                     />

                    <hr style={{borderTop: '3px solid #e22947'}}/>  

                    <h2>Competonces</h2>
                    <Skills
                     Skill="JavaScript"
                     progress={80}
                    />
                     <Skills
                     Skill="Java/JEE"
                     progress={80}
                    />
                     <Skills
                     Skill="HTML/CSS"
                     progress={80}
                    />
                     <Skills
                     Skill="REACT"
                     progress={80}
                    />
                     <Skills
                     Skill="JavaScript"
                     progress={80}
                    />
                     <Skills
                     Skill="JavaScript"
                     progress={80}
                    />


                    </Cell>
                </Grid>
            </div>
        )
    }
}


export default Resume ;