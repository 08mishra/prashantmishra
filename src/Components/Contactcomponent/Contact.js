import React from "react";
import "./Contact.css";

export default class Contact extends React.Component {
  render() {
    return (
      <>
        <div className="contact-container">
          <div className="header">
            <h1>GET IN TOUCH</h1>
          </div>
          <div className="contact">
            <div className="left-contact">
              <div className="left-text">
                <p>
                  Feel free to get in touch with me. <br /> I am always open to
                  discuss new projects or appoinments!
                </p>
              </div>
              <div className="left-connect">
                <a href="mailto:amitpic08@gmail.com">
                  <i class="fas fa-envelope"></i>Mail me
                </a>
              </div>
              <div className="left-connect">
                <a href="tel:9555867020">
                  <i class="fas fa-phone-alt"></i>Call
                </a>
              </div>
              <div className="icon-connect">
                <a
                  href="https://github.com/08mishra"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-github"></i> Github
                </a>
                <a
                  href="https://linkedin.com/in/08mishra"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-linkedin"></i> Linkedin
                </a>
                <a
                  href="https://twitter.com/08_mishra"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-twitter"></i> Twitter
                </a>
                <a
                  href="https://codepen.io/08_mishra"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-codepen"></i>Codepen
                </a>
              </div>
            </div>
            <div className="right-contact">
              <div className="right-input">
                <form
                  id="form"
                  action="https://formspree.io/f/xknpanjp"
                  method="POST"
                >
                  <div className="input-form">
                    <input
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="input-form">
                    <input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="input-form">
                    <input
                      name="subject"
                      type="text"
                      placeholder="Your Subject"
                      required
                    />
                  </div>
                  <div className="input-form">
                    <textarea
                      name="message"
                      placeholder="Your message"
                      required
                    />
                  </div>

                  <div className="form-button">
                    <button type="submit">
                      Send <i id="send-icon" class="fas fa-paper-plane"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
