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
        <img style={{paddingLeft:200,paddingRight:200, paddingTop:50}} src="https://image.shutterstock.com/image-photo/two-sri-lankan-wild-elephant-600w-790049065.jpg"/>
        <p style={{color:"#000000" , fontSize:18, textAlign:'center',paddingLeft:100,paddingRight:100,paddingTop:50}}>
        Elephant is the "tractor" of the jungle. It can easily haul twenty foot sections of hard-wood from the middle of the jungle to the road, generally finds its own food, and only demands loyalty and a good word from it's trainer, the mahout. For, if the mahout mis-treats the elephant, there are numerous recorded cases, where the elephant will take revenge, and in most cases fatal to the mahout.

It is estimated that there are about 2,500 to 3000 elephants in Sri Lanka, and about 500 of them are tame, and are used for work. In rural areas it is fairly common to see an elephant on the side of the road, with a big bundle of coconut leaves in it's mouth, coming home for the night with the mahout riding on its' back.

Throughout history elephants have played a major role in Sri Lanka's affairs. The kings of Sri Lanka rode to war on elephants back. The elephants guarded the palaces and temples, as evident from the many carvings on granite at the ancient temples, in cities like Anuradhapura, and Polonnaruwa. Even today the most treasured item for the Buddhists in Sri Lanka, the "tooth relic" of Lord Buddha is carried on the back of an elephant during the Kandy Esala Perahara.

Text: Siri Ekanayake
Photo: Unknown
        </p>
      </Dialog>
    </div>
  );
}
