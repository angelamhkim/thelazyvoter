import React, { Component } from "react";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.png";
// import { Nav, NavLink } from "reactstrap";

class Footer extends Component {
  render() {
    return (
      <div style={{ marginTop: "30px" }}>
        <div >
          {/* <Nav>
            <NavLink href="#" >
              About{" "}
            </NavLink>
            <NavLink href="#">
              Press{" "}
            </NavLink>
          </Nav> */}
        </div>
        <div style={{marginRight: "50px" }}>
          <a href="https://www.facebook.com/" target="_blank">
            <img src={facebook} alt="Facebook" style={{ margin: "15px", height:"40px" }} />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitter} alt="Twitter" style={{ margin: "15px", height:"40px" }} />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={instagram} alt="Instagram" style={{ margin: "15px", height:"40px" }} />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;