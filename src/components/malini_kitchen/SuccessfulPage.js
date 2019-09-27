import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import ArrowBack from '@material-ui/icons/ArrowBack';
import HomeIcon from '@material-ui/icons/Home';

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
                    <h3>Thank you for your recipe!</h3>
                    <p>Thank you for submitting your recipe to Malini's Kitchen, I will post your recipe soon!! </p>
                    <Link>Click here to visit our sponsor</Link>
                    <br />
                    <Link to="/malinis_kitchen">
                        <Button variant="contained" color="default" className={classes.button} onC>
                            <p><ArrowBack /> Malini's Kitchen</p>
                        </Button>
                    </Link>
                    <Link to="/">
                        <Button variant="contained" color="default" className={classes.button}>
                            <p><HomeIcon /> InkfoLanka</p>
                        </Button>
                    </Link>
                </div>
            </Container>
        </React.Fragment>
    );
}