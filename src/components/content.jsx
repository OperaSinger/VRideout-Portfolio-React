import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
// import Testing from "./testing";

const Content = () => {
  return (
    // <BrowserRouter basename={process.env.PUBLIC_URL}>

    <BrowserRouter baseUrl="/VRideout-Portfolio-React">
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={About} />
        <Route
          path={`${process.env.PUBLIC_URL}/projects`}
          component={Projects}
        />
        <Route path={`${process.env.PUBLIC_URL}/contact`} component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default Content;
