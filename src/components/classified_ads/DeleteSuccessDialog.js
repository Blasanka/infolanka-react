import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@material-ui/icons/Visibility';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: '2rem',
  },
  button: {
      marginRight: '0.5rem',
  },
  actions: {
      display: 'inline-block',
  },
}));

export default function ResponsiveDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={props.open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
            <h5>Thank you for your time on InfoLanka Classifieds!</h5>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
              <h6>Your ad delete request in review list.</h6>
              <p>We will let you know about the status. Thank you!.</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/classified_ads">
              <Button variant="contained" onClick={handleClose} color="default" className={classes.button} onC>
                  <span className="actions"><VisibilityIcon /> <p>View all ads</p></span>
                  {/* component={NavLink} to="/pont_new/success" */}
              </Button>
          </Link>
          <Link to="/">
              <Button variant="contained" onClick={handleClose} color="default" autoFocus className={classes.button}>
                  <span className="actions"><HomeIcon /> <p>Go to home</p></span>
              </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}