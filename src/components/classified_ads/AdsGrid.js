import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AdCard from './AdCard.js';
import SimpleBreadcrumbs from './BreadCrumb.js';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: '1rem',
  },
  paper: {
    padding: theme.spacing(2),
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
          <AdCard
            iconPath = 'https://image.shutterstock.com/z/stock-photo-land-for-sale-sign-against-trimmed-lawn-background-452056954.jpg'
            title = 'Land for sale'
            price = 'Rs. 27, 00000'
            location = 'Polgahawela'
            postedDate = '27-08-2019'
          />
        </Grid>
        <Grid item xs={4}>
          <AdCard
            iconPath = 'https://image.shutterstock.com/z/stock-photo-a-cg-render-of-a-generic-luxury-sedan-136209296.jpg'
            title = 'Vehicle for rent'
            price = 'Rs. 2000'
            location = 'Colombo'
            postedDate = '26-08-2019'
          />
        </Grid>
        <Grid item xs={4}>
          <AdCard
            iconPath = 'https://image.shutterstock.com/z/stock-photo-land-for-sale-sign-against-trimmed-lawn-background-452056954.jpg'
            title = 'Land for sale'
            price = 'Rs. 27, 00000'
            location = 'Polgahawela'
            postedDate = '27-08-2019'
          />
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <SimpleBreadcrumbs />
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