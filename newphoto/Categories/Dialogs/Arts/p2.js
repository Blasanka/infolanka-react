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
        <img style={{paddingLeft:200,paddingRight:200, paddingTop:50}} src="https://image.shutterstock.com/image-photo/famous-ancient-wall-paintings-frescoes-600w-39279436.jpg"/>
        <p style={{color:"#000000" , fontSize:18, textAlign:'center',paddingLeft:100,paddingRight:100,paddingTop:50}}>
        o adorn the "mirror wall" of the rock fortress Sigiriya in the northern plains of Sri Lanka. Painted in brilliant colors on mirror-finished plaster wall, some believe that they are asparas, heavenly nymphs. Perhaps they were ladies of the court on their way to the temple or even ancient "pinups" for the entertainment of the lonesome young ruler. Painted during the reign of King Kasyapa in the fifth century (A.D.), these frescoes have retained their brilliant colors until this day, protected from the sun, wind, and rain by the overhanging rock. Accompanying these frescoes are graffiti left by the ancient visitors, that are considered to be some 1,000 or more, years old. Although these speak of "five hundred damsels", today there are only eighteen to be seen. Note: Some 30 years ago, in 1967, vandals succeeded in obliterating several of these priceless frescoes, but with the help of the Smithsonian Institution in Washington D.C. they were restored to their former splendor.

Text: Siri Ekanayake
Photo: Mortlake Press
        </p>
      </Dialog>
    </div>
  );
}
