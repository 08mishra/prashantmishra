import React from "react";
import "./Home.css";
import Prashant from "./Prashant.jpg";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="left-subcontainer">
            <img src={Prashant} alt="prashant" id="prashant-image" />
          </div>
          <div className="right-subcontainer">
            <div className="name">
              <span id="name-head">I'm</span>
              <h1 style={{ letterSpacing: "2px" }}>PRASHANT</h1>
              <div id="name-end"></div>
              
            </div>
            <div class="main">
                
                <ul class="option">
                                    
                  <li><span>Developer</span></li>
                  <li><span>React-js</span></li>
                  <li><span>Node-js</span></li>
                  <li><span>MongoDB</span></li>
                </ul>
              </div>
            <div className="description">
              <p>
                A Full Stack Developer , Front-End with React-js and backend with node-js.
                <br /> I don't have great skills but I can make things great
                with small skills!{" "}
              </p>
            </div>
            <div className="hire">
              <Link to="/contact">HIRE ME</Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}
