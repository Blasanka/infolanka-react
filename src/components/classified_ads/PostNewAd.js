import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

const useStyles = {
  root: {
    flexGrow: 1,
    padding: "2rem"
  },
  textField: {
    marginLeft: ".5rem", //theme.spacing(1),
    marginRight: ".5rem", //theme.spacing(1),
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
    margin: ".5rem", //theme.spacing(1),
    width: "30%"
  },
  input: {
    display: "none"
  }
};

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
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

const countErrors = errors => {
  let count = 0;
  Object.values(errors).forEach(val => val.length > 0 && (count = count + 1));
  return count;
};

class AdSubmitForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      formValid: false,
      errorCount: null,
      fullName: "",
      email: "",
      country: "",
      category: "",
      phone: "",
      title: "",
      description: "",
      errors: {
        fullName: "",
        email: "",
        password: "",
        country: "",
        category: "",
        phone: "",
        title: "",
        description: ""
      },
    };
  }
  onChangeField=async (name, value) =>{
    await this.setState({name:value})
  }

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    this.onChangeField(name, value);
    switch (name) {
      case "fullName":
        errors.fullName =
          value.length < 5 ? "Full Name must be 5 characters long!" : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "country":
        errors.country = value.length < 1 ? "Country cannot be empty!" : "";
        break;
      case "category":
        errors.category = value.length < 1 ? "Category must be selected!" : "";
        break;
      case "phone":
        errors.phone =
        (!parseInt(value)) || value.length < 10 || value.length > 10
            ? "Phone number must contain 10 numbers!"
            : "";
        break;
      case "title":
        errors.title = value.length < 1 ? "Title cannot be empty!" : "";
        break;
      case "description":
        errors.description =
          value.length > 500 || value.length < 1
            ? "Description cannot be empty or greater than 500!"
            : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (
      this.state.fullName === "" ||
      this.state.email === "" ||
      this.state.country === "" ||
      this.state.title === "" ||
      this.state.description === "") {
        this.setState({ formValid: false });
        this.setState({ errorCount: 1 });
      } else {
        this.setState({ formValid: validateForm(this.state.errors) });
        this.setState({ errorCount: countErrors(this.state.errors) }); 
        if (this.state.formValid && this.state.errorCount !== null) {
          this.props.history.replace('/classified_ads/post_new/success');
          // this.handleClickOpen();
        }   
      }
  };

  render() {
    const { classes } = this.props;
    const { errors, formValid } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <Container overflow='hidden' fixed>
          <div className="root">
            <h3 style={{ marginLeft: ".5rem" }}>Post new add</h3>
            <form
              className={classes.container}
              onSubmit={this.handleSubmit}
              noValidate
              autoComplete="off"
            >
              <label style={{ marginLeft: ".5rem" }}>
                Fill in the blanks below to submit your Ad to infolanka
                Classifieds. Thanks!
              </label>
              <TextField
                required
                id="standard-name"
                label="Your Real Name"
                placeholder="Either your first name or your last name, we will not accept nicknames or initials"
                className={classes.textField}
                name="fullName"
                onChange={this.handleChange}
                error={
                  errors.fullName.length > 0
                }
                margin="normal"
                helperText={errors.fullName}
              />
              {/* {errors.fullName.length > 0 && 
                <span className='error'>{errors.fullName}</span>} */}
              <TextField
                required
                id="standard-required"
                label="E-Mail"
                defaultValue=""
                name="email"
                // value={this.state.email}
                className={classes.textField}
                error={
                  errors.email.length > 0
                }
                onChange={this.handleChange}
                margin="normal"
                helperText={errors.email}
              />
              {/* {errors.email.length > 0 && (
                <span className="error">{errors.email}</span>
              )} */}
              <TextField
                id="standard-error"
                label="Country"
                defaultValue=""
                name="country"
                error={
                  errors.country.length > 0
                }
                onChange={this.handleChange}
                className={classes.textField}
                margin="normal"
                helperText={errors.country}
              />
              {/* {errors.country.length > 0 && (
                <span className="error">{errors.country}</span>
              )} */}
              <TextField
                id="standard-number"
                label="Phone: (Optional)"
                // value={this.state.age}
                name="phone"
                error={
                  errors.phone.length > 0
                }
                onChange={this.handleChange}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
                pattern="[0-9]*"
                margin="normal"
                helperText={errors.phone}
              />
              {/* {errors.phone.length > 0 && (
                <span className="error">{errors.phone}</span>
              )} */}
              <TextField
                required
                id="standard-select-currency"
                select
                label="Ad Category"
                name="category"
                className={classes.textField}
                error={
                  errors.category.length > 0
                }
                onChange={this.handleChange}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                value={this.state.category}
                helperText={errors.category}
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
                id="standard-error"
                label="Title: (Short Description)"
                name="title"
                className={classes.textField}
                error={
                  errors.title.length > 0
                }
                onChange={this.handleChange}
                margin="normal"
                helperText={errors.title}
              />
              {/* {errors.title.length > 0 && (
                <span className="error">{errors.title}</span>
              )} */}
              <TextField
                required
                id="standard-multiline-static"
                label="Description: (Less than 500 Characters)"
                multiline
                rows="4"
                name="description"
                placeholder="Please limit your text to less than 500 characters."
                className={classes.textField}
                error={
                  errors.description.length > 0
                }
                onChange={this.handleChange}
                margin="normal"
                helperText={errors.description}
              />
              {/* {errors.description.length > 0 && (
                <span className="error">{errors.description}</span>
              )} */}
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className={classes.button}
                >
                  SUBMIT
                </Button>
                <Button
                  variant="contained"
                  className={classes.button}
                  type="reset"
                >
                  RESET
                </Button>
              </div>
              {this.state.errorCount !== null ? (
                <p className="form-status">
                  Form is {formValid ? "valid ✅" : "invalid ❌"}
                </p>
              ) : (
                "Form not submitted"
              )}
            </form>
            {/* {(this.state.errorCount !== null && formValid) && this.props.history.replace('/classified_ads/post_new/success')} */}
            {/* <NewPostSuccessPage open={this.state.open} /> */}
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

AdSubmitForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(useStyles)(AdSubmitForm);
