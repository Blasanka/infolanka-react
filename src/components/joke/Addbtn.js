import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';

//import {Helmet} from 'react-helmet';
//import Add from './Addbtn';
import { makeStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
     <Button  variant="contained" color="primary" onClick={handleClickOpen}  component={NavLink} >
                SUBMIT
            </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Thank You !
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Please confirm your submision
          </Typography>
         
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose} color="primary">
            Save changes
          </Button> */}
           <Button type="submit" variant="contained" color="primary" onClick={handleClickOpen}  component={NavLink} to="/joke_page/">
                Confirm 
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}