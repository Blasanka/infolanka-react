import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import ArrowBack from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "2rem"
  },
  button: {
    marginRight: "0.5rem"
  },
  actions: {
    display: "inline-block"
  }
}));

export default function ResponsiveDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

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
          <h3>Thank you for your recipe!</h3>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p>
              Thank you for submitting your recipe to Malini's Kitchen, I will
              post your recipe soon!!{" "}
            </p>
            <Link>Click here to visit our sponsor</Link>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/malinis_kitchen">
            <Button
              variant="contained"
              color="default"
              className={classes.button}
              onC
            >
              <p>
                <ArrowBack /> Malini's Kitchen
              </p>
            </Button>
          </Link>
          <Link to="/">
            <Button
              variant="contained"
              color="default"
              className={classes.button}
            >
              <p>
                <HomeIcon /> InkfoLanka
              </p>
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}
