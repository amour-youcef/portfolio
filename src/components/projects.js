import React ,{Component} from 'react';
import {Tabs ,Tab, Grid, Cell} from 'react-mdl';

class Projects extends Component {
    constructor (props){
        super(props);
        this.state={activeTab : 0 };
    }
toggleCategories(){
    if(this.state.activeTab === 0){
        return(
            <div><h1>This is PHP </h1></div>
        )
       }else if(this.state.activeTab === 1){
        return(
            <div><h1>This is JavaScript </h1></div>
        )
       }else if(this.state.activeTab === 2){
        return(
            <div><h1>This is React </h1></div>
        )
       }else if(this.state.activeTab === 3){
        return(
            <div><h1>This is Angular </h1></div>
        )
       }else if(this.state.activeTab === 4){
        return(
            <div><h1>This is Java/JEE </h1></div>
        )
       }else if(this.state.activeTab === 5){
        return(
            <div><h1>This is Android </h1></div>
        )
       }
}

  
    render(){
        return (
            <div className="category-tabs">
                <Tabs activeTab ={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab: tabId})} ripple>
                    <Tab>PHP</Tab>
                    <Tab>JavaScript</Tab>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>Java/JEE</Tab>
                    <Tab>Android</Tab> 
                </Tabs>
                <section className="projects-grid">
                    <Grid className="project-grid">
                        <Cell col={12}>
                            <div className="content"> {this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                   
                </section>
            </div>
        )
    }
}


export default Projects ;