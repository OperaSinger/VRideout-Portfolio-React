import React from "react";
import { NavLink } from "react-router-dom";
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
      <div className="row justify-content-center" id="navBar">
        <li className="navbar-brand bounce slow">
          <NavLink to={`${process.env.PUBLIC_URL}/`} className="nounderline">
            <Container id="smallScreen">
              <StyledPage
                pose={this.state.hovering ? "hovered" : "idle"}
                onMouseEnter={() => this.setState({ hovering: true })}
                onMouseLeave={() => this.setState({ hovering: false })}
              />
              about
            </Container>
          </NavLink>
        </li>
        <li className="navbar-brand bounce slow">
          <NavLink
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
          </NavLink>
        </li>
        <li className="navbar-brand bounce slow">
          <NavLink
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
          </NavLink>
        </li>
      </div>
    );
  }
}

export default Navbar;
