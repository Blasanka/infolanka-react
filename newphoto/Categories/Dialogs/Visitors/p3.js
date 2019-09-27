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
        <img style={{paddingLeft:200,paddingRight:200, paddingTop:50}} src="https://image.shutterstock.com/image-photo/photo-sri-lankan-waterfall-named-600w-1366464701.jpg"/>
        <p style={{color:"#000000" , fontSize:18, textAlign:'center',paddingLeft:100,paddingRight:100,paddingTop:50}}>
        If you ever tasted a cup of good High Grown Ceylon Tea, preferably in the unblended form, you have tasted the BEST TEA there is. Of course, to experience that pleasure, you must go to the central hill country of Sri Lanka. And once you are there, take Route 5 from Maha Nuwara (Kandy) to Nuwara Eliya. This take you through some of the best scenery of the Hill Country. The road takes you by the shores of Mahaweli River from Peradeniya ( don't forget to visit the famous botanical gardens - remember "Bridge on the River Kwai?") to Gampola, long ago a capital of Sri Lanka. From Gampola it is a steep climb with many hairpin curves for some sixty kilometers, through spectacular scenery like this, until you get to Nuwara Eliya, the old British hill resort. To taste that heavenly cup of tea, on the way to Nuwara Eliya, look out for tea factories that advertise tea tasting. You won't forget that unique experience.

The Verdant Hill Country - Ramboda Falls
Text: Siri Ekanayake
Photo: Gamini Jayasinghe
        </p>
      </Dialog>
    </div>
  );
}
