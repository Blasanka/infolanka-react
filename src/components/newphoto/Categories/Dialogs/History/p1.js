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
        <img style={{paddingLeft:200,paddingRight:200, paddingTop:50}} src="https://image.shutterstock.com/image-photo/sigiriya-lion-rock-600w-523787728.jpg"/>
        <p style={{color:"#000000" , fontSize:18, textAlign:'center',paddingLeft:100,paddingRight:100,paddingTop:50}}>
        The rock fortress Sigiriya, rises some 600 feet above the scrub jungle plain in the north central part of Sri Lanka. It is this very feature that drove young prince Kasyapa, after killing his father King Dhatusena, by entombing him alive, to this lonely rock in the jungle to hide from his older brother who was gathering an army to retake the throne. Kasyapa while in self imposed exile made his new kingdom as liveable and pleasant as possible by surrounding himself with his loyal followers, and for his personal enjoyment, what could only be described as "pinups". These frescos are to this day preserved in a grotto in the sheer west face of the rock.

The top of the rock in itself is a marvel of agro-engineering. About 3 acres in area, every square foot was utilized. Bathing pools were cut out of living rock and every drop of (rain) water was used and re-used. Sigiriya (lion's throat) was so named because the visitors had to go through the throat of a lion to get to the top of the rock.

Today Sigiriya is a bustling tourist mecca with world class hotels for the weary traveler.

Fortress from the sky - sigiriya

Text: Siri Ekanayake
Photo: Unknown
        </p>
      </Dialog>
    </div>
  );
}
