import React from 'react';
import {Layout} from "antd";
import Newlink from "./Cs";

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      padding: '2rem',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      // display: 'block',
      width: '60%',
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: '60%',
    },
    button: {
      margin: theme.spacing(1),
      width: '30%',
    },
    input: {
      display: 'none',
    },
  }));

function LinkForm() {
    const classes = useStyles();
    return (
        <React.Fragment>
        <CssBaseline />
        <Container fixed>
    <div className="root">
        <h2>Add a Link: Business and Finance</h2>
        <form className={classes.container} noValidate autoComplete="off">
            <label>Fill in the blanks below to submit your Ad to infolanka Classifieds. Thanks!</label>
            <TextField
                required
                id="standard-name"
                label="Your Name"
                placeholder="either your first name or your last name, we will not accept nicknames or initials"
                className={classes.textField}
                margin="normal"
            />
            <TextField
                required
                id="standard-required"
                label="E-Mail"
                defaultValue=""
                className={classes.textField}
                margin="normal"
            />
            <TextField
                error
                id="standard-error"
                label="Category"
                defaultValue="Foreign exchange"
                className={classes.textField}
                margin="normal"
            />
            <textField
                id="standard-error"
                label="Link name: (Short Description)"
                defaultValue=""
                className={classes.textField}
                margin="normal"
            />
            <TextField
                id="standard-multiline-static"
                label="Link Description: (Less than 500 Characters)"
                multiline
                rows="4"
                placeholder="Please limit your text to less than 500 characters."
                className={classes.textField}
                margin="normal"
            />
            <div>
            <Button variant="contained" color="primary" className={classes.button} component={NavLink} to="/explorer/addlink/success">
                ADD THIS LINK
            </Button>
            <Button variant="contained" className={classes.button}>
                CLEAR FIELDS
            </Button>
        </div>
        </form>
    </div>
    </Container>
    </React.Fragment>
    )
}


export default class Addlink extends React.Component{
    render() {
        return (
            <Layout className="layout">
                <Newlink/>
            </Layout>

        );
    }
}
