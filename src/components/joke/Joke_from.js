import React from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
import Adb from './Addbtn';

class FormsPage extends React.Component {
  
  state = {
    fname: "",
    lname: "",
    email: "",
    city: "",
    state: "",
    zip: ""
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      
      <div style={{paddingLeft:150, paddingTop:50, paddingBottom:100, backgroundImage:'url(' + 'https://images.unsplash.com/photo-1527176930608-09cb256ab504?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60' + ')',backgroundSize: 'cover',overflow: 'hidden'}}>
        <h2>Submit Your Joke</h2> <br/>
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
          <label style={{fontSize:20}}>Use this form to submit your joke to InfoLanka Joke Page. You may have to copy your joke and then paste it into the window below. We will add your joke to InfoLanka Joke Page soon.</label>
          <br/>
          <MDBRow>
            <MDBCol md="5" className="mb-3">
              <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-text"
                style={{fontSize:25}}
              >
                Full Name
              </label>
              <input
              style={{borderColor:'black',borderWidth:'thin'}}
                value={this.state.fname}
                name="fname"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="Full Name"
                required
              />
              <div className="invalid-feedback" style={{fontSize:20}}>
                Please fill your name.
              </div>
              <div className="valid-feedback" style={{fontSize:20}}>Looks good!</div>
            </MDBCol>
           </MDBRow>
           <MDBRow>
            <MDBCol md="5" className="mb-3">
              <label
                htmlFor="defaultFormRegisterConfirmEx3"
                className="grey-text"
                style={{fontSize:25}}
              >
                Email(Optional)
              </label>
              <input
              style={{borderColor:'black',borderWidth:'thin'}}
                value={this.state.email}
                onChange={this.changeHandler}
                type="email"
                id="defaultFormRegisterConfirmEx3"
                className="form-control"
                name="email"
                placeholder="Your Email address"
                
              />
              <div className="invalid-feedback" style={{fontSize:20}}>
                Please provide a valid Email.(example@example.com)
              </div>
              <div className="valid-feedback" style={{fontSize:20}}>Looks good!</div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="5" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
                style={{fontSize:25}}
              >
                Subject
              </label>
              <input
                //value={this.state.city}
                spellCheck
                style={{borderColor:'black',borderWidth:'thin'}}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="city"
                placeholder="Subject to your joke"
                required
              />
              <div className="invalid-feedback" style={{fontSize:20}}>
                Please provide a subject.
              </div>
              <div className="valid-feedback" style={{fontSize:20}}>Looks good!</div>
            </MDBCol>
           
            
          </MDBRow>
          <MDBRow>
            <MDBCol md="5"  className="mb-3" >
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
                style={{fontSize:25}}
              >
                Drop your joke
              </label>
              <textarea
              style={{borderColor:'black',borderWidth:'thin'}}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            placeholder="Drop your joke here"
            required
            />
              <div className="invalid-feedback" style={{fontSize:20}}>
                Please drop your joke.
              </div>
              <div className="valid-feedback" style={{fontSize:20}}>Looks good!</div>
            </MDBCol>
           
            
          </MDBRow>
         
          <Button  variant="contained" size="medium" color="primary" type="submit">
          Submit
          </Button>
          &nbsp; &nbsp; &nbsp;
          <Button MDBBtn color="primary" variant="contained" size="medium" onClick={() => window.location.reload(false)}>
            Refresh
          </Button>
          &nbsp; &nbsp; &nbsp;
          <Button  MDBBtn color="primary" variant="contained" size="medium" to="/joke_page/" component={NavLink} >
                BACK
            </Button>
            
        </form>
      </div>
    );
  }

}

export default FormsPage;