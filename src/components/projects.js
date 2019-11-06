import React ,{Component} from 'react';
import {Tabs ,Tab, Grid, Cell, Card, CardTitle,CardText, CardActions,Button,CardMenu,IconButton} from 'react-mdl';

class Projects extends Component {
    constructor (props){
        super(props);
        this.state={activeTab : 0 };
    }
toggleCategories(){
    if(this.state.activeTab === 0){
        return(
            <div className="projects-grid">
                      {/*Projet 1*/}
           <Card shadow={5} style={{minWidth:'450' ,margin :'auto'}}>
               <CardTitle style={{color:'fff',height:'176px',background:'url(http://mapsfromscratch.com/wp-content/uploads/2019/09/php-programming.jpg) center / cover '}}>PHP projet #1</CardTitle>

               <CardText>
               Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
               </CardText>
               <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>
               </CardActions>
               <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>
               </CardMenu>
           </Card>

             {/*Projet 1*/}
             <Card shadow={5} style={{minWidth:'450' ,margin :'auto'}}>
               <CardTitle style={{color:'fff',height:'176px',background:'url(http://mapsfromscratch.com/wp-content/uploads/2019/09/php-programming.jpg) center / cover '}}>PHP projet #1</CardTitle>

               <CardText>
               Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
               </CardText>
               <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>
               </CardActions>
               <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>
               </CardMenu>
           </Card>
             {/*Projet 1*/}
             <Card shadow={5} style={{minWidth:'450' ,margin :'auto'}}>
               <CardTitle style={{color:'fff',height:'176px',background:'url(http://mapsfromscratch.com/wp-content/uploads/2019/09/php-programming.jpg) center / cover '}}>PHP projet #1</CardTitle>

               <CardText>
               Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
               </CardText>
               <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>
               </CardActions>
               <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>
               </CardMenu>
           </Card>
             {/*Projet 1*/}
             <Card shadow={5} style={{minWidth:'450' ,margin :'auto'}}>
               <CardTitle style={{color:'fff',height:'176px',background:'url(http://mapsfromscratch.com/wp-content/uploads/2019/09/php-programming.jpg) center / cover '}}>PHP projet #1</CardTitle>

               <CardText>
               Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
               </CardText>
               <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>
               </CardActions>
               <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>
               </CardMenu>
           </Card>
            </div>
      
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
                
                    <Grid >
                        <Cell col={12}>
                            <div className="content"> {this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
   
            </div>
        )
    }
}


export default Projects ;