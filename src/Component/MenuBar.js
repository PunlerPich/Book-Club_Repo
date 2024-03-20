import React from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';
import Asset1 from './Asset 1.png'
const useStyles = makeStyles((theme) => ({
  toolBar:{
    backgroundColor:'white',
  },
  logo: {
    marginRight: theme.spacing(5),
    padding:'5px',
  },
  menuItems: {
    flexGrow: 1,
    display: 'flex',
    color:'gray',
    justifyContent: 'center',
   
  },
  menuItem: {
    margin: theme.spacing(0, 2),
  },
  signInButton: {
    marginLeft: 'auto',
    color:'gray',
  },
}));

const MenuBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolBar}>
      <img src={Asset1} alt="Logo"  className={classes.logo} style={{ width: '50px', height: 'auto' }} />
        <div className={classes.menuItems}>
          <Button color="inherit" className={classes.menuItem}>Home</Button>
          <Button color="inherit" className={classes.menuItem}>Book</Button>
          <Button color="inherit" className={classes.menuItem}>Blog</Button>
          <Button color="inherit" className={classes.menuItem}>Discuss</Button>
        </div>
        <Button color="inherit" className={classes.signInButton}>Sign In</Button>
      </Toolbar>
    </AppBar>
  );
};

export default MenuBar;