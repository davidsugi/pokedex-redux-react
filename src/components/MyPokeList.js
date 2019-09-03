import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import PropTypes from 'prop-types'
import no_img from '../assets/missing.svg';
import '../style/App.scss'

export default function MyPokeList({ onClick, name,id }) {
 
  return (
    <li>
    <Card className="card">
      <CardActionArea  onClick={onClick} style={{ height:'100%' }}>
        <img className="image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} onError={(ev)=>{ ev.target.onerror = null; ev.target.src=no_img }} />        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Owned: 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </li>
  );
}
