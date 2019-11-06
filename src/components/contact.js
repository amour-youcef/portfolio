import React ,{Component} from 'react';
import {Grid, Cell,List,ListItem,ListItemContent} from 'react-mdl';

class Contact extends Component {
    render(){
        return (
            <div className="contact-body">
                <Grid className ="contact-grid">
                    <Cell col={6} > 
                        <h2>Youssouf AMOUR DIT ZERROUK</h2>
                        <img 
                          src="http://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                          alt="avatar"
                          style={{height: '250px'}}
                        />
                        <p style={{width:'75%',margin:'auto',paddingTop:'1em'}}>Pourquoi l'utiliser?
On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).</p>
                     </Cell>
                    <Cell col={6} > 
                      <h2>Contact Me</h2>
                      <hr/>
                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:'30px' , fontFamily: 'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    (+33) 6 86 06 23 52 
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:'30px' , fontFamily: 'Anton'}}>
                                    <i className="fa fa-fax" aria-hidden="true"/>
                                    (+33) 9 54 55 76 18  
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:'30px' , fontFamily: 'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    amour.youssouf@gmail.com
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:'30px' , fontFamily: 'Anton'}}>
                                    <i className="fa fa-skype" aria-hidden="true"/>
                                    ucef.madou
                                </ListItemContent>
                            </ListItem>
                          
                            </List>
                        </div>

                    
                     </Cell>
                </Grid>
            </div>
        )
    }
}


export default Contact ;