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
  },
}));


export default function SimpleBottomNavigation(props) {

  const classes = useStyles();


  return (
    <Paper elevation={4}>
    <BottomNavigation
      value={menu.findIndex(x => x.url === props.router.location.pathname)}
      showLabels
      className={classes.root}
    >
      {menu.map((tab,i)=>{
        return (<BottomNavigationAction key={i} label={tab.label} onClick={()=>props.push(tab.url)} icon={<span className={tab.class} />}  />
      )
      })}
      </BottomNavigation>
    </Paper>
  );
}