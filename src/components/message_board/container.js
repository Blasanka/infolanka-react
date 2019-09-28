import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';

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
                <Button variant="contained" color="primary" className={classes.button}>
                  view
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary" className={classes.button}>
                Delete
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <br/>
    </div>
  );
}