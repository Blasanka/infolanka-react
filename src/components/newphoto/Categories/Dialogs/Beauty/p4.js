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
        <img style={{paddingLeft:200,paddingRight:200, paddingTop:50}} src="https://image.shutterstock.com/image-photo/sri-lankan-wild-flowers-600w-1375078979.jpg"/>
        <p style={{color:"#000000" , fontSize:18, textAlign:'center',paddingLeft:100,paddingRight:100,paddingTop:50}}>
        The year-round hot and humid climate of southwestern Sri Lanka, makes the ideal climate for growing some varieties of orchids, while the dry and cool climates of the central highlands make other varieties thrive, thus making the whole island, except perhaps the dry north eastern sector, one large nursery for many varieties of this exotic bloom. Originally started as a hobby by the "idle rich," growing orchids, now is a money making hobby for anybody with a green thumb. As the world demand for exotic flowers gets more intense, Sri Lanka seems to be in an enviable position to supply that demand, and earn some badly needed foreign exchange too. Shown here are some of the more common "every day" varieties of orchid.

Since many orchid varieties lack alluring scents to attract life-giving bees and other insects to aid in pollination, they depend on their profusion of colors to lure these insects. Thus, in good nursery one can find orchids of just about any color of the rainbow.

Orchids
Text: Siri Ekanayake
Photo: Muditha Abhayagunawardhana
        </p>
      </Dialog>
    </div>
  );
}
