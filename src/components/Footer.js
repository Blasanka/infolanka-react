import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: '#4D75B2',
    marginTop: theme.spacing(8),
    padding: theme.spacing(2, 4),
    bottom: 0, clear: 'both'
  },
  link: {
    color: '#fff',
    marginRight: '.3rem',
    fontSize: 15,
  },
  social: {
    marginBottom: '1rem'
  }
}));

function Copyright() {
  return (
    <Typography style={{color: '#fff', float: 'right' }} variant="body2">
      {'Copyright © '}
      <Link style={{color: '#fff'}} href="http://infolanka.com/">
        InfoLanka
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const social = ['Instagram', 'Twitter', 'Facebook'];

export default function Blog() {
  const classes = useStyles();

  return (
      <footer className={classes.footer}>
        <div>
          <Copyright />
          <div className={classes.social}>
            {social.map(network => (
            <Link className={classes.link} display="inline" href="#" key={network}>
                {network}
            </Link>
            ))}
          </div>
        </div>
      </footer>
  );
}