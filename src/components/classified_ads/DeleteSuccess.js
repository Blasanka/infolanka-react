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

export default function DeleteSuccess() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <div className={classes.root}>
                    <h3>Thank you for your time on InfoLanka Classifieds!</h3>
                    <h5>Your ad delete request in review list.</h5>
                    <p>We will let you know about the status. Thank you!.</p>
                
                    <Link to="/classified_ads">
                        <Button variant="contained" color="default" className={classes.button} onC>
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