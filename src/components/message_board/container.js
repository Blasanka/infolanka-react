import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1000,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function ComplexGrid(props) {
  const classes = useStyles();
  const img = props.questionData.imgUrl;
  const id = props.questionData.id;
  const questions = props.questionData.question;
  const reply = props.questionData.reply;

  const [open, setOpen] = React.useState(false);
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDeleteClickOpen = () => {
    setDeleteOpen(true);
  }

  const handleDeleteClickClose = () => {
    setDeleteOpen(false);
  }

  const handleDeleteSubmit = () => {
    setDeleteOpen(false);
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={img} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
              <Typography variant="body2" color="textSecondary">
                  {id}
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                  {questions}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Re: {reply}
                </Typography>
                
              </Grid>
              <Grid item>
                <Button onClick={handleClickOpen} variant="contained" color="primary" className={classes.button}>
                  view
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={handleDeleteClickOpen}  color="secondary" className={classes.button}>
                Delete
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <br/>
      
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          <h3>How can i cook rice?</h3>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p>
              re:You have wash the with water and cook it
            </p>
            <h6>by bevan</h6>
            <p>
              re:You can put milk and make kiri bath also
            </p>
            <h6>by white</h6>
            <p>
              re:You can wash it with water 3 times and put more water into that basket 
              above than the rice and cook it for half and hour 
            </p>
            <h6>by jeffery19</h6>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/message_board">
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
    
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={deleteOpen}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          <h3>Do you want to delete this message?</h3>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p>
              We will manually review your reason for deleting this message and let you know. Thank You!
            </p>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Reason for delete"
              type="delete"
              fullWidth
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteClickClose} color="primary">
            Close
          </Button>
          <Button onClick={handleDeleteSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    </div>
  );
} 