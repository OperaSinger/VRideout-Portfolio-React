import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
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
          <div className="col-md-8">
            <form
              // role="form"
              action="mailto:vale@valerideout.com"
              method="post"
              enctype="text/plain"
            >
              <p className="h4 text-center mb-4">Contact Vale</p>
              <label htmlFor="defaultFormContactNameEx" className="grey-text">
                Your name
              </label>
              <input
                type="text"
                id="defaultFormContactNameEx"
                className="form-control"
                placeholder="Name"
                name="name"
                required
              />
              <br />
              <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                Your email
              </label>
              <input
                type="email"
                id="defaultFormContactEmailEx"
                className="form-control"
                name="email"
                placeholder="email"
                required
              />
              <br />
              <label
                htmlFor="defaultFormContactSubjectEx"
                className="grey-text"
              >
                Subject
              </label>
              <input
                type="text"
                id="defaultFormContactSubjectEx"
                className="form-control"
                placeholder="Subject"
                name="subject"
                required
              />
              <br />
              <label
                htmlFor="defaultFormContactMessageEx"
                className="grey-text"
              >
                Your message
              </label>
              <textarea
                type="text"
                id="defaultFormContactMessageEx"
                className="form-control"
                name="message"
                placeholder="Message"
                rows="4"
                required
              />
              <div className="text-center mt-4">
                <button
                  className="btn btn-outline-warning"
                  type="submit"
                  value="submit"
                >
                  Send
                  <i className="fa fa-paper-plane-o ml-2" />
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-sm-12 text-center socialLinks">
                <a href="https://github.com/OperaSinger">
                  <img
                    src={require("../images/giticon.png")}
                    className="mx-auto img-responsive"
                    id="topicon"
                    alt={".."}
                  />
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 text-center socialLinks">
                <a href="https://www.linkedin.com/in/vale-rideout">
                  <img
                    src={require("../images/linkedin.png")}
                    className="mx-auto img-responsive"
                    id="bottomicon"
                    alt={".."}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CSSTransitionGroup>
  );
};

export default Contact;
