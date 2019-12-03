import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import mini from '../img/mini.jpg';

let count = 0 ;

 setInterval(() => {
  count = count +1;
}, 1000);

function a(){
  return count;
}
class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
             // src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
               src="http://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              // src={mini} alt="logo" 
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Développeur Web   </h1>
              <p> PHP | Java | JEE |JavaScript | React | HTML/CSS | Bootstrap</p>
              <div className="social-links">
                {/* LinkedIn*/}
                <a href="https://www.linkedin.com/in/youssouf-amour-dit-zerrouk-b70780106/" rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-linkedin" aria-hidden="true" />
                </a>
                <i className="fab fa-angular" aria-hidden="true" />
                <i className="fab fa-react" aria-hidden="true" />
                <i className="fab fa-sass" aria-hidden="true" />
                <i className="fab fa-js" aria-hidden="true" />
                <i className="fab fa-java" aria-hidden="true" />
                
                 {/* Github*/}
                 <a href="https://github.com/amour-youcef" rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-github" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}


export default Landing;