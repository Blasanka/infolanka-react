import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
import Adb from './Addbtn';
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

const currencies = [
 
  {
    value: 'bride',
    label: 'Brides (Select a bride)',
  },
  {
    value: 'groom',
    label: 'Grooms (Seeking a groom)',
  },
  {
    value: 'property-colombo',
    label: 'Property Sales *Colombo',
  },
];

export default function PostNewAd() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: '',
    age: '',
    multiline: 'Controlled',
    currency: '*Select ad Category*',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <React.Fragment>
    <CssBaseline />
    <Container fixed>
    <div className="root">
        <h3>Submit Your Joke</h3>
        <form className={classes.container} noValidate autoComplete="off">
            <label>Use this form to submit your joke to InfoLanka Joke Page. You may have to copy your joke and then paste it into the window below. We will add your joke to InfoLanka Joke Page soon.</label>
            <TextField
                required
                id="standard-name"
                label="Name"
                placeholder="either your first name or your last name, we will not accept nicknames or initials"
                className={classes.textField}
                value={values.name}
                onChange={handleChange('name')}
                margin="normal"
            />
            <TextField
                
                id="standard-required"
                label="E-Mail(Optional)"
                defaultValue=""
                className={classes.textField}
                margin="normal"
                type="email"
            />
            
            <TextField
                  required
                  id="standard-name"
                  label="Subject"
                  placeholder=""
                  className={classes.textField}
                  value={values.name}
                  onChange={handleChange('name')}
                  margin="normal"
            />
        
           
            <TextField
                id="standard-multiline-static"
                label="Enter your joke"
                multiline
                rows="6"
                
                className={classes.textField}
                margin="normal"
            />
           
            <div>
            <Button>
              <Adb />
            </Button>
            &nbsp; &nbsp; 
            <Button type="reset" variant="contained" >
                RESET
            </Button>
            &nbsp; &nbsp; &nbsp;
            <Button  variant="contained" to="/joke_page/" component={NavLink} className={classes.button}>
                BACK
            </Button>
        </div>
        </form>
    </div>
    </Container>
    </React.Fragment>
  );
}