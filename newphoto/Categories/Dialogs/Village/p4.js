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
        <img style={{paddingLeft:200,paddingRight:200, paddingTop:50}} src="https://image.shutterstock.com/image-photo/worker-picking-tea-leaves-plantation-600w-1160144512.jpg"/>
        <p style={{color:"#000000" , fontSize:18, textAlign:'center',paddingLeft:100,paddingRight:100,paddingTop:50}}>
        Picking tea leaves for processing is an exacting job. For the best quality tea, only the un-opened bud and the two tender leaves immediately below are used. When the British first started growing tea in Sri Lanka, they imported Tamil workers from southern India for this critical job, and the descendants of these workers, generally known as "Estate Tamils", because they live and work in the tea estates, are still the best tea pickers. An experienced tea picker uses both hands to pick and can throw handfuls of tea leaves over the shoulder to a cane basket hanging on her back without losing a single bud. Scenes like these, pretty ladies in brightly colored saris are everywhere in the tea growing areas.

If you like to read more about tea, the WEB is full of information. Here are some addresses for you to get started: Sri Lanka Tea Board, The Tea Man - Tea talk, Tea Masters

Text: Siri Ekanayake
Photo: Ian Selvarajah
        </p>
      </Dialog>
    </div>
  );
}
