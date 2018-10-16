import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import "../../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <CSSTransitionGroup
      transitionName="homeTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <section id="maincontainer">
        <div className="row">
          <h2>About Me</h2>
        </div>
        <div className="row" style={{ margin: "10px 10px 0px 0px" }}>
          <p>
            <img
              src={require("../images/portrait.jpg")}
              className="rounded float-left"
              alt={
                "http://muscocenter.org/wp-content/uploads/2017/05/Copy-of-Val-Tenors-Vale-Rideout-768x512.jpg"
              }
              style={{ margin: "0px 20px 15px 15px" }}
            />
            Having been known as a 'gadgetologist' most of my life, I'm a web
            developer specializing in JAVASCRIPT and its myriad libraries and
            companion technologies. Having coded my first video game in BASIC
            when I was young, I changed tack and went into a career as an opera
            singer - but never left behind my curiosity about computers.
            <br />
            <br />
            I've left the stage and have turned back to the small screen and the
            logic of computers. A Photographer who knows Photoshop and an artist
            who knows how to find answers to complex problems with creativity, I
            have an uncanny ability to communicate with clients about the
            requirements of their applications and business functionality using
            a database, server and UI. Working WITH people is a developed skill,
            so group interactions move more smoothly and projects come together
            with speed in a better work environment.
            <br />
            <br />A recent graduate of Rutgers University CS bootcamp, I'm
            versed in the many technologies used today in complex front and
            back-end systems such as React, Javascript, node.js, HTML, CSS,
            MYSQL, MONGODB, express, handlebars, jquery and sequelize, among
            others.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6 offset-3">
            <div className="row techIcons">
              <img
                className="techIcon socialLinks"
                src={require("../images/expressjs.png")}
                alt="..."
              />
              <img
                className="techIcon socialLinks"
                src={require("../images/javascript.png")}
                alt="..."
              />
              <img
                className="techIcon socialLinks"
                src={require("../images/html.png")}
                alt="..."
              />
              <img
                className="techIcon socialLinks"
                src={require("../images/react.png")}
                alt="..."
              />
            </div>
            <div className="row">
              <img
                className="techIcon socialLinks"
                src={require("../images/css.png")}
                alt="..."
              />
              <img
                className="techIcon socialLinks"
                src={require("../images/handlebarsjs-card.png")}
                alt="..."
              />
              <img
                className="techIcon socialLinks"
                src={require("../images/jquery.png")}
                alt="..."
              />
              <img
                className="techIcon socialLinks"
                src={require("../images/firebase.png")}
                alt="..."
              />
            </div>
            <div className="row">
              <img
                className="techIcon socialLinks"
                src={require("../images/sequelize.png")}
                alt="..."
              />
              <img
                className="techIcon socialLinks"
                src={require("../images/mongodb.png")}
                alt="..."
              />
              <img
                className="techIcon socialLinks"
                src={require("../images/mysql.png")}
                alt="..."
              />
              <img
                className="techIcon socialLinks"
                src={require("../images/nodejs.png")}
                alt="..."
              />
            </div>
          </div>
        </div>
      </section>
    </CSSTransitionGroup>
  );
};

export default About;
