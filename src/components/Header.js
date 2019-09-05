import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import BackIcon from '@material-ui/icons/KeyboardBackspace';
import SearchIcon from '@material-ui/icons/Search';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { menu } from '../constants'
import Divider from '@material-ui/core/Divider';
import _ from 'lodash';

const useStyles = makeStyles(theme => ({
  list: {
      width: 250,
  },
  toolbar: theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(2),
    display: 'none',
    [theme.breakpoints.up('sm')]: {
        display: 'block',
    },
  },
  backButton: {
      marginRight: theme.spacing(2),
      display: 'block',
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
      open: false,
  });


  const toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, open: open });
  };

    const debouncedSearch = props.search ? _.debounce(props.search, 1000) : null;
    const search = (e) => {
              debouncedSearch(e.target.value);
    }
    
  
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
         { props.back ?  
          <IconButton
            edge="start"
            onClick={props.goBack}
            className={classes.backButton}
            color="inherit"
            aria-label="open drawer">
            <BackIcon />
          </IconButton>
          :
         <IconButton
            edge="start"
            onClick={toggleDrawer(true)}
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer">
            <MenuIcon />
          </IconButton>

              }
           
          <Typography className={ props.search ? classes.title : null} variant="h6" noWrap>
            { props.title ? props.title : "Pokedex" }
          </Typography>
          { props.search ? <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              onChange={search}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div> : null }
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
      <Drawer open={state.open} onClose={toggleDrawer(false)}>
        <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
        >
        <div className={classes.toolbar} />
      <Divider />
        <List>
            {menu.map((url, index) => (
            <ListItem button key={index} onClick={()=> props.push(url.url)}>
                <ListItemIcon><span className={url.class} /></ListItemIcon>
                <ListItemText primary={url.label} />
            </ListItem>
            ))}
        </List>
        </div>
      </Drawer>
    </div>
  );
}