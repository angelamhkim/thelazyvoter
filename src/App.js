import React, { Component } from "react";
// import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Countdown from "./components/countdown/Countdown";
import Register from "./components/register/Register";
import Candidates from "./components/candidates/Candidates";
import DoMore from "./components/doMore/DoMore";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Countdown date={`2020-03-03T00:00:00`} />
        <Register title="register" subtitle="What can I do in 5 minutes" dark={true} id="register" />
        <Candidates title="candidates" subtitle="What can I do in 5 minutes" dark={true} id="candidates" />
        <DoMore title="DoMore" subtitle="What can I do in 5 minutes" dark={true} id="doMore" />
        <Footer />
      </div>
    );
  }
}

export default App;
