import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AdCard from './AdCard.js';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: '.4rem .4rem .9rem 1rem',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AdsGrid(props) {
  const classes = useStyles();
  // const iconPath = process.env.PUBLIC_URL + '/assets/forsale.jpg';
  function FormRow() {
    return (
      <React.Fragment>
        {
          props.data.result.map((ad) => {
            return (
              <Grid item xs={4}>
                <AdCard
                  data = {ad}
                />
              </Grid>
            );
          })
        }
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={2}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={2}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={2}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}