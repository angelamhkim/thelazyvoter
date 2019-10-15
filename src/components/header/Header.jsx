import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
  // NavLink
} from "reactstrap";
import logo from "../../images/lazybear2.svg";
import style from "./Header.module.css";
// import { NavHashLink as NavLink } from "react-router-hash-link";
import { Link, animateScroll as scroll } from "react-scroll";


export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div>
        <Navbar light expand="md" fixed="top">
          <NavbarBrand href="/" c>
            <img src={logo} alt="Logo" className={style.logo} onClick={this.scrollToTop} />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} className={style.toggler} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className={style.nav}>
                <Link
                  style={{ color: "black", fontWeight: "bold" }}
                  activeClass="active"
                  to="register"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={500}
                >
                  Register To Vote <s>&nbsp; &nbsp; &nbsp; &nbsp;</s>{" "}
                </Link>
              </NavItem>
              <NavItem className={style.nav}>
                <Link
                  style={{ color: "black", fontWeight: "bold" }}
                  activeClass="active"
                  to="candidates"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={500}
                >
                  Who's Running? <s> &nbsp; &nbsp; &nbsp; &nbsp;</s>{" "}
                </Link>
              </NavItem>
              <NavItem className={style.nav}>
                <Link
                  style={{ color: "black", fontWeight: "bold" }}
                  activeClass="active"
                  to="doMore"
                  spy={true}
                  smooth={true}
                  offset={2000}
                  duration={500}
                >
                  {" "}
                  Do More <s> &nbsp; &nbsp; &nbsp; &nbsp;</s>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <div className={style.title}>
          <h1>THE</h1>
          <h1>LAZY </h1>
          <h1> VOTER</h1>
        </div>
      </div>
    );
  }
}
