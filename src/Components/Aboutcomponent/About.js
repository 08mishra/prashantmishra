import React from "react";
import "./About.css";
import Prashant from "./PRASHANTKUMAR.pdf";

export default class About extends React.Component {
  render() {
    return (
      <>
        <div className="container" id="containerAbout">
           
          
          
            <div className="cont-div experience">
              <h3>experience</h3>
              <span id="ex-data">1+ year</span>
            </div>
            <div className="cont-div project">
              <h3>project</h3>
              <span id="pr-data">25+ projects</span>
            </div>
            <div id="cv" className="cont-div">
              <a href={Prashant} target="_blank" rel="noreferrer">
                MY Resume
              </a>
            </div>
          
        </div>
        <div className="skills">
          <div className="header">
            <h1>MY SKILLS</h1>
          </div>
          <div className="skill-container">
            <div className="left-skill">
              <ul>
                <li>
                  <i className="fab fa-html5"></i>HTML
                </li>
                <li>
                  <i className="fab fa-css3-alt"></i>CSS
                </li>
                <li>
                  <i className="fab fa-js-square"></i>javaScript
                </li>
                <li>
                <i className="fab fa-node-js"></i>Node-js
                </li>
                <li>
                <i className="fas fa-database"></i>MongoDB and MySql
                </li>
              </ul>
            </div>
            <div className="right-skill">
              <li>
                <i className="fab fa-sass"></i>Sass
              </li>
              <li>
                <i className="fab fa-bootstrap"></i>Bootstrap
              </li>
              <li>
                <i className="fab fa-react"></i>React
              </li>
              <li>
              <span class="iconify" data-icon="file-icons:ejs" ></span>ejs
              </li>
              <li>
              <img alt="iconrestapi" src="https://img.icons8.com/nolan/64/api-settings.png"/> REST-API
              </li>
            </div>
          </div>
        </div>
        <div className="experience-main">
          <div className="ex-head">
            <h1>EXPERIENCE</h1>
          </div>
          <div className="fodrix">
            <li>
              <a
                href="https://fodrix.com/"
                rel="noreferrer"
                target="_blank"
              >
                Fodrix
              </a>
            </li>
            <div className="ex-detail">
              <p>
                I was an intern there for 3 months. Workig at fodrix include my
                role to develope the client side of their Website.
                <br />
                My task also include working with API and integrating it with the website.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
