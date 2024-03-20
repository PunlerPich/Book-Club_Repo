import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles, Menu, MenuItem, IconButton, CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Asset1 from './Asset 1.png';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import api from '../api';

const useStyles = makeStyles((theme) => ({
  toolBar: {
    backgroundColor: 'white',
  },
  logo: {
    marginRight: theme.spacing(5),
    padding: '5px',
  },
  menuItems: {
    flexGrow: 1,
    display: 'flex',
    color: 'gray',
    justifyContent: 'center',
  },
  menuItem: {
    margin: theme.spacing(0, 2),
  },
  signInButton: {
    marginLeft: 'auto',
    color: 'gray',
  },
  dropdownIcon: {
    marginLeft: theme.spacing(1),
  },
  dropdownMenu: {
    marginTop: theme.spacing(2),
  },
}));

const MenuBar = ({ auth, changeAuthState }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const signOut = async () => {
    setLoading(true);
    try {
      await api.post('/api/logout/');
      changeAuthState(false);
      localStorage.removeItem('token');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  }

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolBar}>
        <img src={Asset1} alt="Logo" className={classes.logo} style={{ width: '50px', height: 'auto' }} />
        <div className={classes.menuItems}>
          <Button component={Link} to="/home" color="inherit" className={classes.menuItem}>Home</Button>
          <Button
            color="inherit"
            className={classes.menuItem}
            aria-controls="book-menu"
            aria-haspopup="true"
            onClick={handleMenuOpen}
          >
            Book
            <ArrowDropDownIcon className={classes.dropdownIcon} />
          </Button>
          <Menu
            id="book-menu"
            anchorEl={menuAnchorEl}
            keepMounted
            open={Boolean(menuAnchorEl)}
            onClose={handleMenuClose}
            className={classes.dropdownMenu}
          >
            <MenuItem component={Link} to="/book/comedy" onClick={handleMenuClose}>Comedy</MenuItem>
            <MenuItem component={Link} to="/book/menu2" onClick={handleMenuClose}>Menu 2</MenuItem>
            <MenuItem component={Link} to="/book/menu3" onClick={handleMenuClose}>Menu 3</MenuItem>
            <MenuItem component={Link} to="/book/menu4" onClick={handleMenuClose}>Menu 4</MenuItem>
            <MenuItem component={Link} to="/book/menu5" onClick={handleMenuClose}>Menu 5</MenuItem>
            <MenuItem component={Link} to="/book/menu6" onClick={handleMenuClose}>Menu 6</MenuItem>
            <MenuItem component={Link} to="/book/menu7" onClick={handleMenuClose}>Menu 7</MenuItem>
            <MenuItem component={Link} to="/book/menu8" onClick={handleMenuClose}>Menu 8</MenuItem>
            <MenuItem component={Link} to="/book/menu9" onClick={handleMenuClose}>Menu 9</MenuItem>
          </Menu>
          <Button component={Link} to="/technology" color="inherit" className={classes.menuItem}>Technology</Button>
          <Button  component={Link} to="/aboutus" color="inherit" className={classes.menuItem}>Discuss</Button>
        </div>

        {auth 
          ? loading 
            ? <CircularProgress />
            : <Button onClick={signOut} color="inherit" className={classes.signInButton}>Sign Out</Button>
          : <Button component={Link} to="/signIn" color="inherit" className={classes.signInButton}>Sign In</Button>
        }
      </Toolbar>
    </AppBar>
  );
};

export default MenuBar;