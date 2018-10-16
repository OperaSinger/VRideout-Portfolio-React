import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import './Fonts.css';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Content from "./components/content";

// constructor() {
//   this.state: {
//     opacity: 1
// }

// mouseEnter() {
//     console.log('mouse enter')
//     this.setState({opacity: 0.5})
// }

// mouseLeave() {
//     console.log('mouse leave')
//     this.setState({opacity: 1})
// }

//     render() {
//       <div style={{opacity: this.state.opacity}}>
//         <img src={src} onMouseEnter={::this.mouseEnter} onMouseLeave={::this.mouseLeave} />
//       </div>
//     }


class App extends Component {
  render() {
    return (
      <div className="App container-fluid" id="background">
        <div className="container">
          <div className="row jumbotronNavy">
            <div className="col-md-4 blue" id="headBlue">
              <h1>Vale Rideout</h1>
            </div>
            <div className="col-md-4 blue" />
            <div className="col-md-4 blue">
              <Navbar />

              {/* <div className="row" id="navBar">
                <li className="navbar-brand bounce slow">
                  <Link to="/">about</Link>
                </li>
                <li className="navbar-brand" href="portfolio.html">
                  <Link to="/projects">portfolio</Link>
                </li>
                <li className="navbar-brand" href="contact.html">
                  <Link to="/contact">contact</Link>
                </li>
              </div> */}
            </div>
          </div>
          <div className="row" id="content">
            <Content />
          </div>
          <div className="row justify-content-md-center" id="jumbotronFooter">
            <p>&copy; 2018 vale rideout</p>
          </div>
        </div>
      </div>
      // </div>
    );
  }
}

export default App;
