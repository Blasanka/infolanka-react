import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@material-ui/icons/Visibility';
import HomeIcon from '@material-ui/icons/Home';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      padding: '2rem',
    },
    button: {
        marginRight: '0.5rem',
    },
    actions: {
        display: 'block',
    },
}));

export default function SuccessfulPage() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <div className={classes.root}>
                    <h3>Thank you for submitting to InfoLanka Classifieds!</h3>
                    <h5>Your ad has been submitted succefully.</h5>
                    <p>We will post your Ad soon, >provided that you used your real name (either the first or the last name).</p>
                    <p> If you want to remove your Ad sooner please click the "remove ad" button below(also you can send us an email. Our email address is classifieds@infolanka.com)</p>
                
                    <Link to="/classified_ads">
                        <Button variant="contained" color="default" className={classes.button} >
                            <span className="actions"><VisibilityIcon /> <p>View all ads</p></span>
                            {/* component={NavLink} to="/pont_new/success" */}
                        </Button>
                    </Link>
                    <Link to="/classified-ads/ad/5/delete">
                        <Button variant="contained" color="default" className={classes.button}>
                            <span className="actions"><DeleteIcon /> <p>Delete this ad</p></span>
                        </Button>
                    </Link>
                    <Link to="/">
                        <Button variant="contained" color="default" className={classes.button}>
                            <span className="actions"><HomeIcon /> <p>Go to home</p></span>
                        </Button>
                    </Link>
                </div>
            </Container>
        </React.Fragment>
    );
}