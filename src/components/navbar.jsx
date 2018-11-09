import React from "react";
import { Link } from "react-router-dom";
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
      <div className="row" id="navBar">
        <li className="navbar-brand bounce slow">
          <Link to="/" className="nounderline">
            <Container>
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
          <Container>
            <Link to="/projects" className="nounderline">
              <StyledPage
                pose={this.state.hovering ? "hovered" : "idle"}
                onMouseEnter={() => this.setState({ hovering: true })}
                onMouseLeave={() => this.setState({ hovering: false })}
              />
              portfolio
            </Link>
          </Container>
        </li>
        <li className="navbar-brand bounce slow">
          <Container>
            <Link to="/contact" className="nounderline">
              <StyledPage
                pose={this.state.hovering ? "hovered" : "idle"}
                onMouseEnter={() => this.setState({ hovering: true })}
                onMouseLeave={() => this.setState({ hovering: false })}
              />
              contact
            </Link>
          </Container>
        </li>
      </div>
    );
  }
}

export default Navbar;
