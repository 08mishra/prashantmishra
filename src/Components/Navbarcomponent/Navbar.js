import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Prashant from "./PRASHANTKUMAR.pdf";
import Prashantlogo from "./prashantlogo.png";
export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ menu: !this.state.menu });
  }

  render() {
    const show = this.state.menu ? "show" : "";

    return (
      <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          {" "}
          <img
            src={Prashantlogo}
            alt="logo"
            style={{ width: "34px", height: "34px" }}
          />
        </Link>{" "}
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.toggleMenu}
        >
          <span className="navbar-toggler-icon"> </span>{" "}
        </button>{" "}
        <div id="nav-items" className={"collapse navbar-collapse " + show}>
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/">
              {" "}
              Home <span class="sr-only"> (current) </span>{" "}
            </Link>{" "}
            <Link className="nav-item nav-link" to="/about">
              {" "}
              About
            </Link>{" "}
            <Link className="nav-item nav-link" to="/portfolio">
              Portfolio{" "}
            </Link>{" "}
            <Link className="nav-item nav-link" to="/contact">
              Contact{" "}
            </Link>{" "}
            <Link className="nav-item nav-link" to="/blog">
              Blog{" "}
            </Link>{" "}
            <a
              className="nav-item nav-link"
              href={Prashant}
              target="_blank"
              rel="noreferrer"
            >
              MY CV
            </a>
          </div>{" "}
        </div>{" "}
      </nav>
    );
  }
}
