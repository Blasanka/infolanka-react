import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import RecipeCard from './RecipeCard.js';

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
          <RecipeCard
          title="Pasta Dough"
          by="Dinidu 10/06/2012" />
        </Grid>
        <Grid item xs={4}>
          <RecipeCard
          title="Six Minute Corn Bread"
          by="Madu 4/03/2012" />
        </Grid>
        <Grid item xs={4}>
          <RecipeCard
          title="Rice &amp; Beans"
          by="Marie Williams 10/06/2012" />
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