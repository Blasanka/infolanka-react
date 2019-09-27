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
        <img style={{paddingLeft:200,paddingRight:200, paddingTop:50}} src="https://image.shutterstock.com/image-photo/kandy-sri-lanka-august-07-600w-701862754.jpg"/>
        <p style={{color:"#000000" , fontSize:18, textAlign:'center',paddingLeft:100,paddingRight:100,paddingTop:50}}>
        When you are an aspiring young Kandyan dancer, one of your dreams is to dance at the Kandy Perahara. These youngsters, dressed for the part in their finery, certainly seem eager and ready for it. Until recently classical Kandyan dancing has been an art that has been handed down from father to son. This goes back to the days of the Caste system, where if you are born to the caste of the dancers, you invariably ended up being a dancer. But with the breakdown of the caste system, dancing has become more widespread and open to anybody who has the talent for it. To read more about Kandy and Kandy Perehara click here: Kandy

Text: Siri Ekanayake
Photo(top): Tom Tidball
Photo(bottom): Unknown
        </p>
      </Dialog>
    </div>
  );
}
