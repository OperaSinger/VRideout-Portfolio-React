import React from "react";
import { Route } from "react-router-dom";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";

const Content = () => {
  return (
    <div>
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={About} />
      <Route path={`${process.env.PUBLIC_URL}/projects`} component={Projects} />
      <Route path={`${process.env.PUBLIC_URL}/contact`} component={Contact} />
    </div>
  );
};

export default Content;
