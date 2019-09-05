import Chip from '@material-ui/core/Chip';
import red from '@material-ui/core/colors/red';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Snackbar from '@material-ui/core/Snackbar';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import React, { Component } from 'react';
import ContentLoader from "react-content-loader";
import no_img from '../assets/pokeball.svg';
import { capitalize, _renderLoader } from '../helper';
import Header from '../page/Header';
import "../style/App.scss";
import { type } from '../style/color';
import Dialog from './FormDialog';
import MoveCard from "./MoveCard";
import SnackContent from './Snackbar';


const failMsg = [
"Oh no! The pokemon broke free!",
"Aww! It appeared to be caught!",
"Argh! Almost had it!",
"Shoot, it was so close too!",
]

const style = theme => ({
  topCard: {
    padding: theme.spacing(3,0) ,
    marginTop:40,
    marginBottom:20
  },
  fab: {
    margin: theme.spacing(1),
    position:'absolute',
    bottom:'10px',
    left:'10px'
  },
  cards:{
     margin: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
       margin: theme.spacing(3, 10),
     },
  },
  root: {
     overflowY:'auto',
     maxHeight: 'calc(100vh - 64px)',
  },
  title: { 
    backgroundColor: red[600], 
    padding: theme.spacing(1,2),
    color: 'white'
  },
  id:{
    margin: theme.spacing(0, 3),
    color:'grey',
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(0, 0),
    },
  },
  image: {
      width:'50%',
   }
});




class PokeView extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       open:false,
       dialog:false
    };
    this.onCatch=this.onCatch.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.rename = this.rename.bind(this)
  };


  handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({open:false});
  }

  componentDidMount() {
    this.props.showPokemon(this.props.match.params.id);
  }

  rename(q){
      if(q!==""){
        this.props.renamePoke(this.props.currentPokemon,q)
      }
      this.setState({ dialog:false});
      this.props.push('/my_poke')
  }

  onCatch(){
    if(this.props.throwPokeBall(this.props.pokemon))
      this.setState({ dialog:true});
    else
      this.setState({ open:true, failMsg:failMsg[Math.floor(Math.random()*failMsg.length)] });
  }
  
  
  render() {
    var { pokemon ,isLoading} = this.props;
    
    const { open } = this.state;
    const { classes } = this.props;

     
    var img = pokemon.sprites ? pokemon.sprites.front_default ? pokemon.sprites.front_default : no_img : no_img
    return (
        <div>
            <Header back search={false}  title={ !isLoading ? capitalize(pokemon.name) : undefined  } />{
           
              <div className={classes.root}>
                <Container>
                 <Paper className={classes.topCard}>
                   <Grid container>
                      <Grid item xs={12} md={4} style={{ textAlign:'center'}}>
                       {isLoading ? 
                          <div style={{ width:'50%', margin:'auto'}}>
                          <ContentLoader 
                            height={50}
                            width={50}
                            speed={4}
                            primaryColor="#cfcfcf"
                            secondaryColor="#ededed"
                          >
                            <circle cx="27" cy="27" r="20" />
                          </ContentLoader>
                          </div>
                        : <Zoom in={true}>
                          <img src={img} className={"image "+classes.image}style={{ margin: 21 }} alt={pokemon.name} onError={(ev)=>{ ev.target.onerror = null; ev.target.src=no_img }} />
                        </Zoom>}
                      </Grid>
                      <Grid item xs={12} md={8}>
                      {isLoading ? 
                          <div style={{ width:80, height:20, marginLeft:'14px'}}>
                            <ContentLoader 
                              height={10}
                              width={50}
                              speed={4}
                              primaryColor="#cfcfcf"
                              secondaryColor="#ededed"
                            />
                          </div>
                          : <Typography variant="h5" component="p" gutterBottom>
                          <span className={classes.id}>#{ ("00000" + pokemon.id).slice(-5) }</span> 
                      </Typography> }
                      
                      <Typography variant="h4" component="h2" gutterBottom className={classes.title}>
                         {isLoading ? 
                          <div style={{ width:180, height:50}}>
                          <ContentLoader 
                            height={30}
                            width={200}
                            speed={4}
                            primaryColor="#cfcfcf"
                            secondaryColor="#ededed"
                          >
                             <rect x="11" y="8" rx="0" ry="0" width="75" height="12" /> 
                            <rect x="104" y="9" rx="0" ry="0" width="15" height="13" /> 
                            <rect x="129" y="10" rx="0" ry="0" width="90" height="12" />
                         </ContentLoader></div> : <strong>{capitalize(pokemon.name) }</strong> }
                      </Typography>
                      <div style={{ display:'flex'}}>
                        {isLoading ? 
                         <div style={{ width:180, height:50}}>
                         <ContentLoader 
                          height={50}
                          width={180}
                          speed={4}
                          primaryColor="#cfcfcf"
                          secondaryColor="#ededed"
                        >
                          <rect x="11" y="14" rx="0" ry="0" width="71" height="16" /> 
                          <rect x="111" y="13" rx="0" ry="0" width="69" height="18" />
                        </ContentLoader>  </div> : null}

                        {
                          pokemon.types ? pokemon.types.map((e,i)=> {
                            return <Chip size="small" key={i} style={{ backgroundColor:type[e.type.name], color:'white', marginLeft:'20px', fontSize:'20px',padding:'10px' }} label={capitalize(e.type.name)} />;
                          }) : null 
                        }
                      </div>
                      </Grid>
                   </Grid>
                 </Paper>
                 <Typography variant="h5" component="h5" gutterBottom>
                    Move(s)
                  </Typography>
                  <Grid container>
                    { isLoading ? _renderLoader(20,MoveCard) : null}
                    {
                          pokemon.moves ? pokemon.moves.map((move,i) => {
                            return (
                            <MoveCard key={i} label={move.move.name}/>)})
                            : null 
                        }
                      
                  </Grid>
                </Container>
              </div>
            }
            { isLoading ? 
            null :
            <Tooltip title="Catch" aria-label="catch">
              <Fab color="primary" aria-label="catch" onClick={this.onCatch} className={classes.fab}>
                <span className="icon-pokeballs"/>
              </Fab>
            </Tooltip>}

            <Snackbar
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              open={open}
              autoHideDuration={1000}
              onClose={this.handleClose}
            >
              <SnackContent
                onClose={this.handleClose}
                variant="error"
                message={this.state.failMsg}
              />
            </Snackbar>

            <Dialog open={this.state.dialog} onClose={this.rename} title={"Gotcha! "+capitalize(pokemon.name)+" was caught!"} subtitle={capitalize(pokemon.name)+" Nickname?"} label="nickname" value={capitalize(pokemon.name)} />
        </div>
    );
  }
}




export default withStyles(style)(PokeView)