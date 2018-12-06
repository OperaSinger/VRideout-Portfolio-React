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
              style={{ margin: "5px 20px 15px 15px" }}
            />
            Having been known as a 'gadgetologist' most of my life, I am now embracing it whole-heartedly. In transitioning from a 20+ year career on the stage as an opera singer, I recently graduated from the Computer Science Full-time, Full-Stack Bootcamp at Rutgers University. Having a strong foundation in Javascript and its myriad libraries, I am now focusing on helping to develop apps and websites with complex requirements, working with clients, businesses and teams to find fast, clean and concise solutions.
            <br />
            <br />
            A Photographer who knows Photoshop and an artist who knows how to find answers to complex problems with creativity, I have an uncanny ability to communicate with clients about the requirements of their applications and business functionality using a database, server and UI. Working WITH people is one of my best talents - a developed skill - so group interactions move more smoothly and projects come together with speed in a better work environment.
            <br />
            <br />At the age of 12, I coded my first video game in Basic, and years later, I'm versed in modern frameworks common in today's best front and back-end systems such as React, Javascript, node.js, HTML, CSS, MYSQL, MONGODB, express, handlebars, jquery and sequelize, among others.
          </p>
        </div>
        <div className="row">
          <div className="col-6 offset-3">
            <div className="row techIcons justify-content-center">
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
            <div className="row justify-content-center">
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
            <div className="row justify-content-center">
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
