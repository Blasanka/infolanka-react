import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import Box from "@material-ui/core/Box";
import DeleteSuccessDialog from "./DeleteSuccessDialog";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "2rem"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    // display: 'block',
    width: "60%"
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: "60%"
  },
  button: {
    margin: theme.spacing(1),
    width: "30%"
  },
  input: {
    display: "none"
  }
}));

const currencies = [
  {
    value: "null",
    label: "*Select ad Category*"
  },
  {
    value: "bride",
    label: "Brides (Select a bride)"
  },
  {
    value: "groom",
    label: "Grooms (Seeking a groom)"
  },
  {
    value: "property-colombo",
    label: "Property Sales *Colombo"
  }
];

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

export default function DeleteAd(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [formValid, setformValid] = React.useState(false);
  const [errorCount, setErrorCount] = React.useState(null);
  const [values, setValues] = React.useState({
    email: "",
    phone: "",
    multiline: "Controlled",
    reason: "",
    errors: {
      email: '',
      phone: '',
      reason: ''
    }
  });

  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    // setValues({ ...values, name: value });
    switch (name) {
      case "email":
        setValues({ ...values, email: value });
        values.errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "phone":
          setValues({ ...values, phone: value });
        values.errors.phone =
          !parseInt(value) || value.length < 10 || value.length > 10
            ? "Phone number must contain 10 numbers!"
            : "";
        break;
      case "reason":
          setValues({ ...values, reason: value });
        values.errors.reason =
          value.length > 500 || value.length < 1
            ? "Reason cannot be empty or greater than 500!"
            : "";
        break;
      default:
        break;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (
      values.email === "" ||
      values.phone === "" ||
      values.reason === ""
    ) {
      setformValid(false);
      setErrorCount(1);
      console.log(values.reason);
      console.log(values.phone);
      console.log(values.email);
    } else {
      setformValid(true);
      setErrorCount(0);
      // props.history.replace("/classified_ads/delete/success");
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
        <Box overflow="hidden">
          <div className="root">
            <h3>Request to delete</h3>
            <form
              className={classes.container}
              onSubmit={handleSubmit}
              noValidate
              autoComplete="off"
            >
              <label>
                Fill in the blanks below to delete your posted Ad to infolanka
                Classifieds. Thanks!
              </label>
              <TextField
                required
                id="standard-required"
                label="E-Mail"
                defaultValue=""
                name="email"
                // value={this.state.email}
                className={classes.textField}
                error={
                  values.errors.email.length > 0
                }
                onChange={handleChange}
                margin="normal"
                helperText={values.errors.email}
              />
              <TextField
                id="standard-number"
                label="Phone: (Optional)"
                name="phone"
                error={
                  values.errors.phone.length > 0
                }
                onChange={handleChange}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
                pattern="[0-9]*"
                margin="normal"
                helperText={values.errors.phone}
              />
              <TextField
                id="standard-multiline-static"
                label="Reason: (Less than 500 Characters)"
                multiline
                rows="4"
                placeholder="Please limit your text to less than 500 characters."
                className={classes.textField}
                margin="normal"
                name="reason"
                error={
                  values.errors.reason.length > 0
                }
                onChange={handleChange}
                helperText={values.errors.reason}
              />
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  type="submit"
                >
                  Request Delete
                </Button>
                <Button variant="contained" className={classes.button}
                  type="reset">
                  Clear
                </Button>
              </div>
              {errorCount !== null ? (
                <p className="form-status">
                  Form is {formValid ? "valid ✅" : "invalid ❌"}
                </p>
              ) : (
                "Form not submitted"
              )}
            </form>
          </div>
          <div style={{ height: "20px" }}></div>
          <DeleteSuccessDialog open={open} />
        </Box>
      </Container>
    </React.Fragment>
  );
}
