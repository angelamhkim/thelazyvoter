import React, { Component } from "react";
// import { Button, Form, FormGroup, Input } from "reactstrap";
import style from "./Register.module.css";
import axios from 'axios';

export default class Register extends Component {
  state = {
    email: '',
  }

  handleChange = event => {
    this.setState({ email: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      email: this.state.email
    };

    axios.post(`https://raw.githubusercontent.com/lindamejia/TheLazyVoterEmails/master/emails.csv?token=ALCBQTLJ7HWEWQNRTCEP3R25VN4MA`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
          <div className={style.email} id="register">
            <h3 style={{fontWeight:'bold', color:"red"}}> REGISTER TO VOTE BY FEBRUARY 17th</h3>
            <h5><s>&nbsp; &nbsp; &nbsp; &nbsp;</s> We'll send you a reminder 3 days before!</h5>
            <form>
                <input
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                  placeholder="Enter your email" 
                  style={{ border: "0", borderBottom: "1px solid black", position:"absolute", right:"30px", margin:"20px 0px 20px 0px"}}  
                  className="col-6"
                />
                <br />
                <button style={{marginTop:"50px", fontWeight:"bold"}} className="btn-warning" onClick={this.handleSubmit}>Submit</button>
            </form>
            <br/>
            <p>
              {" "}
              or you know, just{" "}
              <a style={{backgroundColor:"red", color:"white", padding:"3px", fontWeight:"bold"}} href="https://covr.sos.ca.gov/?">
                {" "}
                register to vote now
              </a>{" "}
              🤷
            </p>
          </div>
    );
  }
}
