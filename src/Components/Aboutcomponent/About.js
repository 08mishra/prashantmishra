import React from "react";
import "./About.css";
import Prashant from "./PRASHANTKUMAR.pdf";

export default class About extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="left-container">
            <div className="container-item">
              <div className="item1">
                <p id="content-heading">Name:</p>
                <p>Prashant Kumar</p>
              </div>
              <div className="item2">
                <p id="content-heading">Address:</p>
                <p>Delhi, India</p>
                <p>Bihar, India</p>
              </div>
            </div>
            <div className="container-item">
              <div className="item1">
                <p id="content-heading">Age:</p>
                <p>21</p>
              </div>
              <div className="item2">
                <p id="content-heading">Nationality:</p>
                <p>Indian</p>
              </div>
            </div>
            <div className="container-item">
              <div className="item1">
                <p id="content-heading">Freelance:</p>
                <p>Available</p>
              </div>
              <div className="item2">
                <p id="content-heading">Language:</p>

                <p>Hindi, English</p>
              </div>
            </div>
          </div>
          <div className="right-container">
            <div className="experience">
              <h3>experience</h3>
              <span id="ex-data">1+ year</span>
            </div>
            <div className="project">
              <h3>project</h3>
              <span id="pr-data">25+ projects</span>
            </div>
            <div id="cv">
              <a href={Prashant} target="_blank" rel="noreferrer">
                MY CV
              </a>
            </div>
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
                href="https://fodrix.com/about_us"
                rel="noreferrer"
                target="_blank"
              >
                Fodrix
              </a>
            </li>
            <div className="ex-detail">
              <p>
                I was an intern there for 3 months. Workig at fodrix include my
                role to design and develope the client side of their Website.
                <br />
                My task also include working with postman and fetching data with
                api using React framework.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
