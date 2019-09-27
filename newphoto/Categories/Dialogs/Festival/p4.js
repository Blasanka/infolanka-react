import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
    color:'white'
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" style={{backgroundColor:"white",color:"black"}} onClick={handleClickOpen}>
       Click here for more details
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Description
            </Typography>
            <Button color="inherit" onClick={handleClose}>
              Close
            </Button>
          </Toolbar>
        </AppBar>
        <img style={{paddingLeft:200,paddingRight:200, paddingTop:50}} src="https://image.shutterstock.com/image-photo/colourful-sri-lankan-vesak-lanterns-600w-1317070796.jpg"/>
        <p style={{color:"#000000" , fontSize:18, textAlign:'center',paddingLeft:100,paddingRight:100,paddingTop:50}}>
        f any single day in the Buddhist calender is of equal importance to the Christmas day in Christian calender, it has to be the day of Wesak. All over the country, temples, in the villages, and in the cities, announce the dawn of Wesak, with peals of bells, and drum beats. The devout, clad in pure white, with no make-up or jewelry, make their way to the temple, to spend the next twenty four hours in quiet contemplation. No solid food in taken after mid-day meal, for this day, the holiest of days in the Buddhist calender, one is there to rid the mind of impure thoughts, and the body of impure habits. (Observe Sil). While the rest of the village, gather at the temple grounds after sunset to participate in lesser religious activities, like reading of holy books, or listen to the saffron clad monk relate ancient stories from Lord Buddha's previous lives. ( listen to Bana ).

Simple candle-lit lanterns like these, that seem to fascinate these youngsters, made with bamboo frames and covered with colored transparent paper adorn every house, for Wesak, is a muted celebration as well. Over two-and-a-half centuries ago in northern India, Gautama was born, attained Enlightenment, and passed away, on the same day of the month, separated by some 80 years. and Buddhists all over celebrate the three events on Wesak day.

Text: Siri Ekanayake
Photo: Unknown
        </p>
      </Dialog>
    </div>
  );
}
