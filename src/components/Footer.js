import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
});
const urlTab=[
  {url:'/',class:"icon-pokedex",label:"Pokedex" },
  {url:'/my_poke',class:"icon-pokeballs",label:"My Pokemon" },
]

export default function SimpleBottomNavigation(props) {

  const classes = useStyles();


  return (
    <Paper elevation={4}>
    <BottomNavigation
      value={urlTab.findIndex(x => x.url === props.router.location.pathname)}
      showLabels
      className={classes.root}
    >
      {urlTab.map((tab,i)=>{
        return (<BottomNavigationAction key={i} label={tab.label} onClick={()=>props.push(tab.url)} icon={<span className={tab.class} />}  />
      )
      })}
      </BottomNavigation>
    </Paper>
  );
}