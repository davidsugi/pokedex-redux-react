import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Paper from '@material-ui/core/Paper';
import { menu } from '../constants'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    position: 'fixed',
    left: '0',
    right: '0',
    bottom: '0',
    zIndex:777,
  },
}));


export default function SimpleBottomNavigation(props) {

  const classes = useStyles();


  return (
    <Paper elevation={4}  className={classes.root}>
    <BottomNavigation
      value={menu.findIndex(x => x.url === props.router.location.pathname)}
      showLabels
    >
      {menu.map((tab,i)=>{
        return (<BottomNavigationAction key={i} label={tab.label} onClick={()=>props.push(tab.url)} icon={<span className={tab.class} />}  />
      )
      })}
      </BottomNavigation>
    </Paper>
  );
}