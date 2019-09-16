import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#4D75B2',
  },
  toolbarButtons: {
    marginLeft: 'auto',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  margin: {
    backgroundColor: '#ffbf00',
    textTransform: 'none',
  },
  logo: {
    height: '50px',
    width: '180px'
  }
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth] = React.useState(true);//, setAuth
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const iconPath = process.env.PUBLIC_URL + '/assets/logo.jpg';
  
  // function handleChange(event) {
  //   setAuth(event.target.checked);
  // }

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className="appBar">
        <Toolbar>
          <NavLink to='/'>
            <img src={`${iconPath}`} alt="logo" className={classes.logo} />
          </NavLink>
          <div className={classes.toolbarButtons}>
          </div>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                className="submitAd"
              >
              <Fab
                variant="extended"
                size="medium"
                color="secondary"
                aria-label="add"
                className={classes.margin}>
                <Typography>Categories</Typography>
                <ExpandMoreIcon />
              </Fab>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem component={NavLink} to="/explorer" onClick={handleClose}>
                  Explorer
                </MenuItem>
                <MenuItem component={NavLink} to="/news_room" onClick={handleClose}>
                  News Room
                </MenuItem>
                <MenuItem component={NavLink} to="/photo_gallery" onClick={handleClose}>
                  Photo Gallery
                </MenuItem>
                <MenuItem component={NavLink} to="/classified_ads" onClick={handleClose}>
                  Classified Ads
                </MenuItem>
                <MenuItem component={NavLink} to="/malinis_kitchen" onClick={handleClose}>
                  Malini's Kitchen
                </MenuItem>
                <MenuItem component={NavLink} to="/message_board" onClick={handleClose}>
                  Message Board
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}