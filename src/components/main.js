import React from 'react';
import {Switch , Route} from 'react-router-dom';
import LandingPage from './landingpage';
// import AboutMe from './aboutme';
import About from './About/About';
import Contact from './contact';
import Projects from './Projects/Projects';

import Resume from './resume';


const Main = () => (
    <Switch>
       <Route exact path="/" component={LandingPage}/>
       <Route  path="/aboutme" component={About}/>
       <Route  path="/contact" component={Contact}/>
       <Route  path="/projects" component={Projects}/>
       <Route  path="/resume" component={Resume}/>
    </Switch>
) 


export default Main ;