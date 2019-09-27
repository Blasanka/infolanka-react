import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import GridOnIcon from '@material-ui/icons/GridOn';
import ListIcon from '@material-ui/icons/List';

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(1, 0),
  },
  paper: {
    padding: theme.spacing(1, 2),
  },
  viewToggle: {
    float: 'right'
  },
}));

function handleClick(event) {
  event.preventDefault();
  alert('You clicked a breadcrumb.');
}

export default function SimpleBreadcrumbs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper style = {{ display: 'inline-block', width: '98%', overflow:'auto'}} elevation={0} className={classes.paper}>
        <Breadcrumbs style = {{ float: 'left'}} aria-label="breadcrumb">
          <Link color="inherit" href="/" onClick={handleClick}>
            InfoLanka
          </Link>
          <Link
            color="textPrimary"
            href="/components/breadcrumbs/"
            onClick={handleClick}
            aria-current="page"
          >
            Classified Ads
          </Link>
        </Breadcrumbs>
        <div style = {{ float: 'right' }} className="viewToggle">
            <span style = {{ fontSize: 18,  }} >View: </span>
            <GridOnIcon style = {{ fontSize: 22, marginTop: '2px', }} />
            <span> </span>
            <ListIcon style = {{ fontSize: 22, marginTop: '2px', }} />
        </div>
      </Paper>
    </div>
  );
}