import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const detailsLeft = [
  {
    id: 1,
    image: "nfl",
    link: "https://guarded-scrubland-37816.herokuapp.com/",
    title: "NFLevate",
    description:
      'A site that gives the user all the information about their favorite team or player, all in one place, pulling from various API"s. It will give you the best NFL experience outside the stadium!',
    tech: "JAVASCRIPT, NODE.JS, EXPRESS, HANDLEBARS, AJAX, HTML, CSS."
  },
  {
    id: 2,
    image: "times",
    link: "https://operasinger.github.io/scraper-draper/",
    title: "Scraper Draper - NY Times Scraping App",
    description:
      "Incorporating Cheerio with Mongodb, this app scrapes the NY Times (due to changes in NY Times code, live view unavailable)",
    tech:
      "JAVASCRIPT, CSS, HANDLEBARSjs, EXPRESSjs, MONGODB, CHEERIO, HTML, CSS, BOOTSTRAPjs."
  },
  {
    id: 3,
    image: "usa",
    link: "https://derkche.github.io/MyAmericanGuide/",
    title: "My American Guide",
    description:
      "Find what you need in every city in America - all in one place.",
    tech: "JAVASCRIPT, EXPRESS, AJAX, NODEjs, FIREBASE, HTML, CSS."
  },
  {
    id: 4,
    image: "train",
    link: "https://operasinger.github.io/bahnhof-time/",
    title: "Train Scheduler",
    description: 'Add a train here, so you won"t forget to get on board!',
    tech: "JAVASCRIPT, NODEjs, FIREBASE, MOMENTjs, HTML, CSS"
  },
  {
    id: 5,
    image: "gifs",
    link: "https://operasinger.github.io/Giftastic/",
    title: "Gif-tastic",
    description:
      'Find GIF"s by emotion name,customize the button bar and add new ones.',
    tech: "HTML, CSS, JAVASCRIPT, AJAX, EXPRESSjs, BOOTSTRAPjs."
  }
];

const detailsRight = [
  {
    id: 6,
    image: "bike",
    link: "https://vast-waters-83316.herokuapp.com/",
    title: "Biker Bar",
    description:
      "Store your favorite bicycles - which users can add to... and ride!",
    tech: "JAVASCRIPT, EXPRESSjs, ORM, HTML, CSS, mySQL, BOOTSTRAPjs."
  },
  {
    id: 7,
    image: "spinal",
    link: "https://operasinger.github.io/trivia_game/",
    title: "Spinal Trivia",
    description:
      'This one goes to 11! Follow Spinal Tap through a short game of trivia and test your knowledge on the Rob Reiner film from the 80"s.',
    tech: "HTML, CSS, JAVASCRIPT, NODEjs, BOOTSTRAPjs."
  },
  {
    id: 8,
    image: "hang",
    link: "https://operasinger.github.io/WordGuessGame/",
    title: "Hangman",
    description: "A simple game of Hangman",
    tech: "JAVASCRIPT, HTML, CSS, BOOTSTRAPjs."
  },
  {
    id: 9,
    image: "frame",
    link: "https://operasinger.github.io/HW-Wireframe/",
    title: "Wireframe",
    description: "Just getting started with layout",
    tech: "HTML"
  }
];

const itemsLeft = detailsLeft.map(detailLeft => (
  <div
    className="card demoPhoto view overlay"
    key={detailLeft.id}
    id={detailLeft.image}
  >
    <a href={detailLeft.link} className="links nounderline">
      <div className="card-body portfolio-item">
        <h5 className="card-title">{detailLeft.title}</h5>
        <p className="card-text">
          {detailLeft.description}
          <br />
          <strong>Tech: {detailLeft.tech}</strong>
        </p>
      </div>
    </a>
  </div>
));

const itemsRight = detailsRight.map(detailRight => (
  <div
    className="card demoPhoto view overlay"
    key={detailRight.id}
    id={detailRight.image}
  >
    <a href={detailRight.link} className="links nounderline">
      <div className="card-body portfolio-item">
        <h5 className="card-title">{detailRight.title}</h5>
        <p className="card-text">
          {detailRight.description}
          <br />
          <strong>Tech: {detailRight.tech}</strong>
        </p>
      </div>
    </a>
  </div>
));

const Projects = () => {
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
          <h2>My Portfolio</h2>
        </div>
        <div className="row">
          <div className="col-md-6">{itemsLeft}</div>
          <div className="col-md-6">{itemsRight}</div>
        </div>
      </section>
    </CSSTransitionGroup>
  );
};

export default Projects;
