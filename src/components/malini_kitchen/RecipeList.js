import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RecipeReviewCard from './RecipeCard.js';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: '1rem',
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AdsGrid() {
  const classes = useStyles();
  const iconPath = process.env.PUBLIC_URL + '/assets/forsale.jpg';

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <RecipeReviewCard />
        </Grid>
        <Grid item xs={4}>
          <RecipeReviewCard />
        </Grid>
        <Grid item xs={4}>
          <RecipeReviewCard />
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}