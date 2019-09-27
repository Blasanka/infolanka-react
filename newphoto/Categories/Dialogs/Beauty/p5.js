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
        <img style={{paddingLeft:200,paddingRight:200, paddingTop:50}} src="https://image.shutterstock.com/image-photo/rice-field-kandy-sri-lanka-600w-372096901.jpg"/>
        <p style={{color:"#000000" , fontSize:18, textAlign:'center',paddingLeft:100,paddingRight:100,paddingTop:50}}>
        A clear cool morning in the valley, everywhere eyes can see, lush, green, vegetation, birds singing their heart out --- perhaps Tchaikovsky spent a night here before writing his famous symphony. In Sri Lanka we have a special branch of poetry, "pal kavi" (poems of a cottage), inspired by scenes like these. These poems keep the farmers, who spend the night at temporary huts like these to protect the crop from marauding animals, awake and entertained. It is not uncommon to hear "poetry contests" that sometimes run all night, between farmers in adjoining farms.

These huts have a bamboo frame, covered with woven coconut fronds. This allows for good air circulation to beat the mid day heat, yet provide ample protection from the monsoon rain that keep the vegetation lush and green. These huts also are used during the growing season, for resting between bouts of work, and serve as a convenient place to enjoy the meals brought to the field by the women folk of the village.

Pastoral Symphony
Text: Siri Ekanayake
Photo: Tom Tidball
        </p>
      </Dialog>
    </div>
  );
}
