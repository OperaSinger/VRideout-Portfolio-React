import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";

const Content = () => {
  return (
    <Switch>
      <Route exact path="/" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
};

export default Content;
