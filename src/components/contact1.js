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
                        On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme '.</p>
                     </Cell>
                    <Cell col={6} > 
                      <h2>Contact Me</h2>
                    
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
                                    <i className="fab fa-skype" aria-hidden="true"/>
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