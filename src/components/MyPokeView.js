import React, { Component } from 'react';

import no_img from '../assets/pokeball.svg';
import Header from '../page/Header';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import "../style/App.scss"
import red from '@material-ui/core/colors/red';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Chip from '@material-ui/core/Chip';
import Fab from '@material-ui/core/Fab';
import Container from '@material-ui/core/Container';
import { type } from '../style/color';
import { capitalize } from '../helper'
import Grow from '@material-ui/core/Grow';
import Zoom from '@material-ui/core/Zoom';
import Snackbar from '@material-ui/core/Snackbar';
import SnackContent from './Snackbar'
import Dialog from './FormDialog';
import clsx from 'clsx';


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
  image: {
      width:'50%',
   },
  subtext:{
    margin: theme.spacing(0, 3),
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(0, 0),
    },
    id:{
      color: 'grey',
    }

  },
});




class MyPokeView extends Component {
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
  }

  rename(q){
      if(q!==""){
        this.props.renamePoke(this.props.currentPokemon,q)
      }
      this.setState({ dialog:false});
  }

  onCatch(){
    if(this.props.throwPokeBall(this.props.pokemon))
      this.setState({ dialog:true});
    else
      this.setState({ open:true });
  }
  
  
  render() {
    var { pokemon ,isLoading,goBack} = this.props;
    
    const { open } = this.state;
    const { classes } = this.props;

     pokemon = pokemon[this.props.match.params.id];

    var img = pokemon.sprites ? pokemon.sprites.front_default ? pokemon.sprites.front_default : no_img : no_img
    return (
        <div>
            <Header back search={false}  title={ !isLoading ? capitalize(pokemon.re_name ? pokemon.re_name : pokemon.name) : undefined  } />{
              isLoading ? <p>Loading..</p> :
              <div className={classes.root}>
                <Container>
                 <Paper className={classes.topCard}>
                   <Grid container>
                      <Grid item xs={12} md={4} style={{ textAlign:'center'}}>
                        <Zoom in={true}>
                          <img src={img} className={"image "+classes.image}style={{ margin: 21 }} alt={pokemon.name} onError={(ev)=>{ ev.target.onerror = null; ev.target.src=no_img }} />
                        </Zoom>
                      </Grid>
                      <Grid item xs={12} md={8}>
                      <Typography variant="h5" component="p" gutterBottom>
                          <span className={clsx(classes.id,classes.subtext)} style={{ color: 'grey' }}>#{ ("00000" + pokemon.id).slice(-5) }</span> 
                      </Typography>
                      <Typography variant="h4" component="h2" gutterBottom className={classes.title}>
                        <strong>{capitalize(pokemon.re_name ? pokemon.re_name : pokemon.name) }</strong>
                      </Typography>
                        { pokemon.re_name ? <Typography variant="h6" component="p" gutterBottom>
                          <span style={{ color: 'black' }} className={clsx(classes.subtext)}>{ capitalize(pokemon.name) }</span> 
                      </Typography> : null }
                      <div style={{ display:'flex'}}>
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
                    {
                          pokemon.moves ? pokemon.moves.map((move,i) => {
                            return (
                            <Grid item xs={12} key={i} md={6} style={{ textAlign:'center'}}>
                              <Grow in={true} {...({ timeout: 1500 })}>
                              <Paper elevation={4} style={{ margin: '10px', padding:'10px'}}>
                                <Typography variant="h6" component="p" gutterBottom>
                                    { capitalize(move.move.name) }
                                </Typography>
                              </Paper>
                              </Grow>
                          </Grid>)
                          }) : null 
                        }
                      
                  </Grid>
                </Container>
              </div>
            }
           
        </div>
    );
  }
}




export default withStyles(style)(MyPokeView)