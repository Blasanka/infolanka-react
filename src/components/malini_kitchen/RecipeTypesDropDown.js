import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { grey } from '@material-ui/core/colors';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  paper: {
    position: 'absolute',
    top: 36,
    right: 0,
    left: 0,
  },
  fake: {
    backgroundColor: grey[200],
    height: theme.spacing(1),
    margin: theme.spacing(2),
    // Selects every two elements among any group of siblings.
    '&:nth-child(2n)': {
      marginRight: theme.spacing(3),
    },
  },
}));

const options = [
  'Rices & Breads',
  'Meat & Sea Food',
  'Veggies & Pulses',
  'Desserts & Sweets',
  'Drinks & Snacks Misc.',
];

export default function SplitButton() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const classes = useStyles();

  const handleClickAway = () => {
    setOpen(false);
  };

  const fake = <div className={classes.fake} />;

  function handleClick(event) {
    // alert(`You clicked ${options[selectedIndex]}`);
    // setOpen(prev => !prev);
    setAnchorEl(event.currentTarget);
  }

  function handleMenuItemClick(event, index) {
    setSelectedIndex(index);
    setOpen(false);
  }

  function handleToggle() {
    setOpen(prevOpen => !prevOpen);
  }

  function handleClose(event) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
    setAnchorEl(null);
  }
  
  const [anchorEl, setAnchorEl] = React.useState(null);

    return (
      <div className={classes.root}>
        <ClickAwayListener onClickAway={handleClickAway}>
          <div>
            <Button onClick={handleClick}>Open menu</Button>
            {open ? (
              <Paper className={classes.paper}>
                {/* {<MenuList>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      disabled={index === 2}
                      selected={index === selectedIndex}
                      onClick={event => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>} */}
                
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {<MenuList>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      disabled={index === 2}
                      selected={index === selectedIndex}
                      onClick={event => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>}
      </Menu>
    </div>
              </Paper>
            ) : null}
          </div>
        </ClickAwayListener>
      </div>
    );
  }
  
  
  {/* <div>
  <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
    <Button onClick={handleClick}>{options[selectedIndex]}</Button>
    <Button
      color="primary"
      size="small"
      aria-owns={open ? 'menu-list-grow' : undefined}
      aria-haspopup="true"
      onClick={handleToggle}
    >
      <ArrowDropDownIcon />
    </Button>
  </ButtonGroup>
  <Popper open={open} anchorEl={anchorRef.current} transition disablePortal>
    {({ TransitionProps, placement }) => (
      <Grow
        {...TransitionProps}
        style={{
          transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
        }}
      >
        <Paper id="menu-list-grow">
          <ClickAwayListener onClickAway={handleClose}>
            <MenuList>
              {options.map((option, index) => (
                <MenuItem
                  key={option}
                  disabled={index === 2}
                  selected={index === selectedIndex}
                  onClick={event => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Grow>
    )}
  </Popper> */}