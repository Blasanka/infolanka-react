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
        <img style={{paddingLeft:200,paddingRight:200, paddingTop:50, height:700}} src="https://image.shutterstock.com/image-photo/sri-lankan-blue-lotus-flower-600w-1509796418.jpg"/>
        <p style={{color:"#000000" , fontSize:18, textAlign:'center',paddingLeft:100,paddingRight:100,paddingTop:50}}>
        This, the "Nil Mahanel," botanical name "Nympheae Stelleta," has been the national flower of Sri Lanka from 1986. This flower mentioned in many Sinhala, Pali and Sanskrit literary works, occupies a pre-eminent position in Buddhist literature. Legend also, has it that the 'Nil Mahanel Flower' is among the many ceremonial designs found on the footprint of Prince Siddhartha, giving it a special significance among the many devotees of Lord Buddha. This flower in the hands of the exotic ladies immortalized in Sigiriya Frescoes, enhance their ethereal beauty, and poets have always likened women's eyes to the unopened Nil Mahanel flower. The Nil Mahanel plant grows in shallow, warm waters, and is found in all parts of the country. It is specially plentiful in the northern dry zone and as a result, this flower is a favorite among the Buddhist devotees as an offering at the many temples and "dagobas" in and around the ruined cities in that area. The flower which is purplish blue in color has a heavy concentration of petals in the center. The Nil Mahanel flower is also considered a symbol of truth, purity and discipline.

Nil Mahanel Flower
Text: Siri Ekanayake
Photo: Unknown
        </p>
      </Dialog>
    </div>
  );
}
