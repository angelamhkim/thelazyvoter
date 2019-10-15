import React, { Component } from "react";

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
      <div
        style={{
          color: "black",
          margin: "150px 30px 100px 0px",
          textAlign: "right"
        }}
        id="doMore"
      >
        <h3 style={{ margin: "50px 0px 50px 0px", color: "red" }}>
          {" "}
          <s>&nbsp; &nbsp; &nbsp; &nbsp;</s> DO MORE{" "}
        </h3>
        <h5 style={{fontWeight:"bold"}}> What can I do in 5 minutes?</h5>
        <p>→ Share our campaigns on social media!</p>
        <div
         style={{marginBottom:"5px"}} 
          class="fb-share-button"
          data-href="https://thelazyvoter.org/"
          data-layout="button_count"
        ></div>
       <br/>
        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a>
        <p>→ Contribute to your candidate</p>
        <h5 style={{fontWeight:"bold"}}>What can I do in 1 hour?</h5>
        <p>→ volunteer at an event</p>
        <h5 style={{fontWeight:"bold"}}>Wanna do more?</h5>
        <p>→ Apply to be a pollworker <br/>(citizens or green-card holders only)</p>
      </div>
    );
  }
}
