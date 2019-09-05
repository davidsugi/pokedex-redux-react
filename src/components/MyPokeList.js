import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import PropTypes from 'prop-types'
import no_img from '../assets/missing.svg';
import '../style/App.scss'
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import ContentLoader from "react-content-loader"

export default function MyPokeList({ onClick, name,id, re_name, release,isLoading }) {
    if(isLoading){
      return (<li>
        <Card className="card" style={{ margin:20 }}>
           <ContentLoader 
              height={120}
              width={100}
              speed={4}
              primaryColor="#cfcfcf"
              secondaryColor="#ededed"
            >
              <rect x="15" y="13" rx="3" ry="3" width="67" height="67" /> 
              <circle cx="72" cy="79" r="1" /> 
              <circle cx="53" cy="73" r="1" /> 
              <circle cx="53" cy="73" r="1" /> 
              <circle cx="52" cy="73" r="1" /> 
              <rect x="115" y="39" rx="0" ry="0" width="0" height="0" /> 
              <circle cx="35" cy="58" r="1" /> 
              <rect x="17" y="88" rx="0" ry="0" width="39" height="7" /> 
              <rect x="21" y="100" rx="0" ry="0" width="28" height="7" /> 
              <rect x="63" y="88" rx="0" ry="0" width="10" height="7" /> 
              <rect x="51" y="111" rx="0" ry="0" width="27" height="7" />
            </ContentLoader>
        </Card>
        </li>)
  }




  return (
    <li>
    <Card className="card" style={{ display:'flex', flexDirection: 'column',}}>
      <CardActionArea  onClick={onClick} style={{ flex:9, display:'flex',  flexDirection: 'column',}}>
        <div>
          <img className="image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} onError={(ev)=>{ ev.target.onerror = null; ev.target.src=no_img }} />        
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { re_name ? re_name : name}            
          </Typography>
           { re_name ? <Typography variant="body2" color="textSecondary" component="p">
            {name} 
          </Typography> : null}   
        </CardContent>
        
      </CardActionArea>
       <CardActions style={{flex:1}}>
         <Grid
            justify="flex-end" // Add it here :)
            container 
            spacing={24}>
          <Grid item>
            <Button size="small" color="primary" onClick={release}>
              Release
            </Button>
          </Grid>
    </Grid>
      </CardActions>
    </Card>
    </li>
  );
}
