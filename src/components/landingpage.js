import React ,{Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import mini from '../img/mini.jpg';

class Landing extends Component {
    render(){
        return (
            <div style={{width: '100%' ,margin:'auto'}}>
              <Grid className ="landing-grid">
                  <Cell col={12}>
                    <img
                      src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                    // src={'./mini.jpg'}
                    // src={mini} alt="logo" 
                    alt="avatar"
                    className="avatar-img"
                    />

                    <div className="banner-text">
                        <h1>Développeur Web</h1>
                        <hr/>
                        <p>Java | JEE |JavaScript | React | HTML/CSS | Bootstrap</p>

                        <div className="social-links">
                            {/* LinkedIn*/}
                        <a href="https://www.linkedin.com/in/youssouf-amour-dit-zerrouk-b70780106/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                        </a>
                          {/* Github*/}
                          <a href="https://github.com/amour-youcef" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square"  aria-hidden="true"/>
                        </a>
                          {/* Freecodecamp*/}
                          <a href="https://www.freecodecamp.org/forum/u/amour-youcef/activity" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-free-code-camp"  aria-hidden="true"/>
                        </a>
                         {/* youtube*/}
                         <a href="https://www.youtube.com/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-youtube-square"  aria-hidden="true"/>
                        </a>

                    </div>
                    </div>
                    
                   
                  </Cell>
              </Grid>
            </div>
        )
    }
}


export default Landing ;