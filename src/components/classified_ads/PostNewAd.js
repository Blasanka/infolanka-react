import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';

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
    value: 'null',
    label: '*Select ad Category*',
  },
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
        <h3>Post new add</h3>
        <form className={classes.container} noValidate autoComplete="off">
            <label>Fill in the blanks below to submit your Ad to infolanka Classifieds. Thanks!</label>
            <TextField
                required
                id="standard-name"
                label="Your Real Name"
                placeholder="either your first name or your last name, we will not accept nicknames or initials"
                className={classes.textField}
                value={values.name}
                onChange={handleChange('name')}
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
                label="Country"
                defaultValue=""
                className={classes.textField}
                margin="normal"
            />
            <TextField
                id="standard-number"
                label="Phone: (Optional)"
                value={values.age}
                onChange={handleChange('age')}
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                margin="normal"
            />
            <TextField
                id="standard-select-currency"
                select
                label="Ad Category"
                className={classes.textField}
                value={values.currency}
                // defaultValue={currencies[0].label}
                onChange={handleChange('currency')}
                SelectProps={{
                    MenuProps: {
                        className: classes.menu,
                    },
                }}
                helperText="Please select your currency"
                margin="normal"
            >
                {currencies.map(option => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
                ))}
            </TextField>
            <textField
                id="standard-error"
                label="Title: (Short Description)"
                defaultValue=""
                className={classes.textField}
                margin="normal"
            />
            <TextField
                id="standard-multiline-static"
                label="Description: (Less than 500 Characters)"
                multiline
                rows="4"
                placeholder="Please limit your text to less than 500 characters."
                className={classes.textField}
                margin="normal"
            />
            {/* <TextField
                id="standard-select-currency-native"
                select
                label="Native select"
                className={classes.textField}
                value={values.currency}
                onChange={handleChange('currency')}
                SelectProps={{
                native: true,
                MenuProps: {
                    className: classes.menu,
                },
                }}
                helperText="Please select your currency"
                margin="normal"
            >
                {currencies.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
                ))}
            </TextField>
            <TextField
                id="standard-full-width"
                label="Label"
                style={{ margin: 8 }}
                placeholder="Placeholder"
                helperText="Full width!"
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
            />
            <TextField
                id="standard-bare"
                className={classes.textField}
                defaultValue="Bare"
                margin="normal"
                inputProps={{ 'aria-label': 'bare' }}
            /> */}
            <div>
            <Button variant="contained" color="primary" className={classes.button} component={NavLink} to="/classified-ads/post_new/success">
                SUBMIT
            </Button>
            <Button variant="contained" className={classes.button}>
                RESET
            </Button>
        </div>
        </form>
    </div>
    </Container>
    </React.Fragment>
  );
}