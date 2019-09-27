import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import DeleteSuccessDialog from './DeleteSuccessDialog';

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

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

export default function PostNewRecipe(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [formValid, setformValid] = React.useState(false);
  const [errorCount, setErrorCount] = React.useState(null);
  const [values, setValues] = React.useState({
    email: "",
    phone: "",
    multiline: "Controlled",
    reason: "",
    category: "",
    errors: {
      name: '',
      email: '',
      recipeName: '',
      recipe: '',
      category: ''
    }
  });

  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    // setValues({ ...values, name: value });
    switch (name) {
      case "name":
        setValues({ ...values, name: value });
        values.errors.name = value.length > 4 ? "" : "Should be greater than 3 characters!";
        break;
      case "email":
        setValues({ ...values, email: value });
        values.errors.email = validEmailRegex.test(value) ? "" : "Email is invalid!";
        break;
      case "category":
        setValues({ ...values, category: value });
        values.errors.category = values.category.length > 1 ? "" : "Category cannot be empty";
        break;
      case "recipeName":
          setValues({ ...values, recipeName: value });
        values.errors.recipeName =
          value.length < 10
            ? "Should be greater than 10 characters!"
            : "";
        break;
      case "recipe":
          setValues({ ...values, recipe: value });
        values.errors.recipe =
          value.length > 500 || value.length < 1
            ? "Recipe cannot be empty or greater than 500!"
            : "";
        break;
      default:
        break;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (
      values.name === "" ||
      values.email === "" ||
      values.recipeName === "" ||
      values.recipe === ""
    ) {
      setformValid(false);
      setErrorCount(1);
    } else {
      setformValid(true);
      setErrorCount(0);
      // props.history.replace("/malinis_kitchen/new/success");
      handleClickOpen();
    }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <React.Fragment>
    <CssBaseline />
    <Container fixed>
    <div className="root">
        <h3>Add your recipe</h3>
        <form className={classes.container}
              onSubmit={handleSubmit}
              noValidate
              autoComplete="off">
            <label>Use this form to submit your recipe to Malini's Kitchen. You may
            have to copy your recipe and then paste it into the window below.
            We will add your recipe to Malini's Kitchen soon.</label>
            <TextField
                required
                id="standard-name"
                label="Your Name:"
                placeholder="either your first name or your last name, we will not accept nicknames or initials"
                className={classes.textField}
                value={values.name}
                onChange={handleChange}
                margin="normal"
                name="name"
                error={
                  values.errors.name.length > 0
                }
                helperText={values.errors.name}
            />
            <TextField
                id="standard-required"
                label="E-Mail:"
                name="email"
                className={classes.textField}
                error={
                  values.errors.email.length > 0
                }
                onChange={handleChange}
                margin="normal"
                helperText={values.errors.email}
            />
            <TextField
                required
                id="standard-number"
                label="Recipe Name:"
                value={values.age}
                onChange={handleChange}
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                margin="normal"
                name="recipeName"
                error={
                  values.errors.recipeName.length > 0
                }
                helperText={values.errors.recipeName}
            />
            <TextField
                required
                id="standard-select-currency"
                select
                label="Recipe Category:"
                className={classes.textField}
                value={values.category}
                // defaultValue={currencies[0].label}
                onChange={handleChange}
                SelectProps={{
                    MenuProps: {
                        className: classes.menu,
                    },
                }}
                helperText={values.errors.category}
                margin="normal"
            >
                {currencies.map(option => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
                ))}
            </TextField>
            <TextField
                required
                id="standard-multiline-static"
                label="Enter the Recipe:"
                multiline
                rows="4"
                placeholder="Please limit your text to less than 500 characters."
                className={classes.textField}
                margin="normal"
                name="recipe"
                error={
                  values.errors.recipe.length > 0
                }
                onChange={handleChange}
                helperText={values.errors.recipe}
            />
            <div>
            <Button variant="contained" color="secondary" className={classes.button} 
                  type="submit">
                ADD
            </Button>
            <Button variant="contained" className={classes.button}
                  type="reset">
                CLEAR
            </Button>
        </div>
        </form>
        <DeleteSuccessDialog open={open} />
    </div>
    </Container>
    </React.Fragment>
  );
}