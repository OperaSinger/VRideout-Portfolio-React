import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import posed from "react-pose";
import styled from "styled-components";

const Container = styled.div`
  font-size: 25px;
  display: flex;
  font-family: "Quicksand", sans-serif;
`;

const Page = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.5 }
});

const StyledPage = styled(Page)`
  font-size: 27px;
  color: yellow;
`;

class Navbar extends React.Component {
  state = { hovering: false };

  render() {
    return (
      <BrowserRouter>
        <div className="row justify-content-center" id="navBar">
          <li className="navbar-brand bounce slow">
            <Link to={`${process.env.PUBLIC_URL}/`} className="nounderline">
              <Container id="smallScreen">
                <StyledPage
                  pose={this.state.hovering ? "hovered" : "idle"}
                  onMouseEnter={() => this.setState({ hovering: true })}
                  onMouseLeave={() => this.setState({ hovering: false })}
                />
                about
              </Container>
            </Link>
          </li>
          <li className="navbar-brand bounce slow">
            <Link
              to={`${process.env.PUBLIC_URL}/projects`}
              className="nounderline"
            >
              <Container id="smallScreen">
                <StyledPage
                  pose={this.state.hovering ? "hovered" : "idle"}
                  onMouseEnter={() => this.setState({ hovering: true })}
                  onMouseLeave={() => this.setState({ hovering: false })}
                />
                portfolio
              </Container>
            </Link>
          </li>
          <li className="navbar-brand bounce slow">
            <Link
              to={`${process.env.PUBLIC_URL}/contact`}
              className="nounderline"
            >
              <Container id="smallScreen">
                <StyledPage
                  pose={this.state.hovering ? "hovered" : "idle"}
                  onMouseEnter={() => this.setState({ hovering: true })}
                  onMouseLeave={() => this.setState({ hovering: false })}
                />
                contact
              </Container>
            </Link>
          </li>
        </div>
      </BrowserRouter>
    );
  }
}

export default Navbar;
