import React from "react";
import { render } from "react-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "../src/Components/Navbarcomponent/Navbar";
import Home from "./Components/Homecomponent/Home";
import About from "./Components/Aboutcomponent/About";
import Contact from "./Components/Contactcomponent/Contact";
import Portfolio from "./Components/Portfoliocomponent/Portfolio";
import Blog from "./Components/Blog/Blog";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/blog" element={<Blog />} />
        </Routes>
      </>
    );
  }
}

export default App;
