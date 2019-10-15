import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import style from "./Register.module.css"

export default class Register extends Component {
  render() {
    return (
        
          <div className={style.email} id="register">
            <h3 style={{fontWeight:'bold', color:"red"}}> REGISTER TO VOTE BY FEBRUARY 17th</h3>
            <h5><s>&nbsp; &nbsp; &nbsp; &nbsp;</s> We'll send you a reminder 3 days before!</h5>
            <Form>
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email" 
                  class="input"
                  style={{ border: "0", borderBottom: "1px solid black", position:"absolute", right:"30px", margin:"20px 0px 20px 0px"}}  
                  className="col-6"
                />
                <br />
                <Button style={{marginTop:"50px", fontWeight:"bold"}} color="warning">Submit</Button>
              </FormGroup>
            </Form>
            <p>
              {" "}
              or you know, just{" "}
              <a style={{backgroundColor:"red", color:"white", padding:"3px", fontWeight:"bold"}} href="https://covr.sos.ca.gov/?" target="_blank">
                {" "}
                register to vote now
              </a>{" "}
              🤷
            </p>
          </div>
    );
  }
}
