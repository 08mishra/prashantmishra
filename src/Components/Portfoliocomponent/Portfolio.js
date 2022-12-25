import React from "react";
import "./Portfolio.css";

export default class Portfolio extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="container-grid">
          <div className="row1 img7">
            <img alt="icon1" src="https://img.icons8.com/ios-filled/50/000000/github.png"/>
            <a
              href="https://github.com/08mishra"
              target="_blank"
              rel="noreferrer"
            >
               GITHUB-PROFILE
            </a>
          </div>
          <div className="row1 img7">
            <img alt="icon2" src="https://icons8.com/icon/XKedzxVhRNPR/man-student"/>
            <a
              href="https://apnalscollege.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
                LS_COLLEGE  STUDENT_COMMUNITY
            </a>
          </div>
          
            <div className="row1 img7">
            <img alt="icon4" src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/000000/external-development-business-model-canvas-wanicon-lineal-color-wanicon.png"/>
              <a
                href="https://www.frontendmentor.io/profile/08mishra/solutions"
                target="_blank"
                rel="noreferrer"
              >
                FRONT-END MENTOR-CHALLANGES
              </a>
            </div>
            <div className="row1 img1">
            <img alt="icon5" src="https://img.icons8.com/dusk/64/000000/motivation-daily-quotes.png"/>
              <a
                href="https://08mishra.github.io/random-Quote-Generator/"
                target="_blank"
                rel="noreferrer"
              >
                RANDOM QUOTE GENERATOR
              </a>
            </div>
            <div className="row1 img8">
            <img alt="icon6" src="https://img.icons8.com/color/48/000000/new-file.png"/>
              <a
                href="https://08mishra.github.io/file-drag-drop/"
                target="_blank"
                rel="noreferrer"
              >
                FILE-DRAG-&-DROP
              </a>
            </div>
           
            <div className="row1 img3">
            <img alt="icon7" src="https://img.icons8.com/office/16/000000/partly-cloudy-day--v2.png"/>
              <a
                href="https://08mishra.github.io/weatherapi/"
                target="_blank"
                rel="noreferrer"
              >
                WEATHERAPP
              </a>
            </div>
            <div className="row1 img4">
            <img alt="icon8" src="https://img.icons8.com/office/16/000000/calculator.png"/>
              <a
                href="https://08mishra.github.io/calculator/"
                target="_blank"
                rel="noreferrer"
              >
                CALCULATOR
              </a>
            </div>
            <div className="row1 img5">
            <img alt="icon9" src="https://img.icons8.com/office/16/000000/musical-notes.png"/>
              <a
                href="https://08mishramusicapp.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                MUSIC-APP
              </a>
            </div>
            <div className="row1 img6">
            <img alt="icon10" src="https://img.icons8.com/office/16/000000/list.png"/>
              <a
                href="https://08mishratodoapp.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                TODO-LIST
              </a>
            </div>
            <div className="row1 img7">
            <img alt="icon11" src="https://img.icons8.com/office/16/000000/clock--v1.png"/>
              <a
                href="https://08mishrajavascriptclock.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                javaScript-CLOCK
              </a>
            </div>
          </div>
        </div>
        <div className="visitmore">
          <button id="btnmore" className="btn btn-primary">
            <a
              href="https://github.com/08mishra"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-github"></i> VISIT MORE
            </a>{" "}
          </button>
        </div>
      </>
    );
  }
}
