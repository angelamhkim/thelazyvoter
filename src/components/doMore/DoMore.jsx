import React, { Component} from "react";
import {Container, Row, Col } from "reactstrap"
import pollbear from "../../images/pollbear.svg";

(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

export default class DoMore extends Component {
  render() {
    return (
      <div>
      <Container  id="doMore">
        <Row style={{textAlign:"center"}}>
          <Col sm="12" md="6">
          <img
          src={pollbear}
          alt="pollbear"
          style={{ height: "400px", width: "auto", marginTop:"20px"}}
        />
          </Col>
          <Col sm="12" md={{ size: 4, offset: 2 }} >
          <h3 style={{ marginTop: "20px", color: "red" }}>
            {" "}
            DO MORE{" "}
          </h3>
          <hr style={{ marginBottom: "30px", backgroundColor: "red", width:"20%", height:"2px" }}/>
          <h5 style={{ fontWeight: "bold" }}> What can I do in 5 minutes?</h5>
          <p>→ Share our campaigns on social media!</p>
          <div
            style={{ marginBottom: "5px" }}
            className="fb-share-button"
            data-href="https://thelazyvoter.org/"
            data-layout="button_count"
          ></div>
          <br />
          <a
            href="https://twitter.com/share?ref_src=twsrc%5Etfw"
            className="twitter-share-button"
            data-show-count="false"
          >
            Tweet
          </a>
          <p>→ Contribute to your candidate</p>
          <h5 style={{ fontWeight: "bold" }}>What can I do in 1 hour?</h5>
          <p>→ Volunteer at an event</p>
          <h5 style={{ fontWeight: "bold" }}>Wanna do more?</h5>
          <p>
            → Apply to be a pollworker (citizens or green-card holders only)
          </p>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}
