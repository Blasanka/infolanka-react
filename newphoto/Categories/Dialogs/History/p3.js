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
        <img style={{paddingLeft:200,paddingRight:200, paddingTop:50}} src="https://image.shutterstock.com/image-photo/temple-sacred-tooth-relic-that-600w-455020873.jpg"/>
        <p style={{color:"#000000" , fontSize:18, textAlign:'center',paddingLeft:100,paddingRight:100,paddingTop:50}}>
        Kandy, the last capital of Sinhala kings, nestled in the foothills of the Hill Country, with its beautiful lake at the center, is the center of traditional Sri Lankan Culture.
Kandy, the anglicization of the Sinhala word kande, meaning "hill" is about 1600 feet (488 meters) above sea level and is the favorite city of travelers from all over the world. The sacred tooth of Lord Buddha is preserved here in it's own temple "Dalada Maligawa" ( The temple of the Tooth ) and a replica of this holy relic is paraded around the city, on the back of the chief elephant "Raja", for two weeks every year during the month of August. Esala Perahera or the parade during the month of Esala is a spectacle not to be missed, with hundreds of brightly decorated elephants, dancers and singers from all walks of life, who turn this normally quiet small town to into one enormous festival, during those two weeks.

City of Kandy with the lake in the foreground

Text: Siri Ekanayake
Photo: Juergen Scheiber
        </p>
      </Dialog>
    </div>
  );
}
