import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
import ironhackLogo from "./assets/ironhack-logo-xs.png";
import menuTop from "./assets/menu-top-xs.png";

function App() {
  return (
    <div className="App">
      <div className="dark-container">
        <nav className="navbar">
          <img className="logo-left" src={ironhackLogo} alt="ironhack Logo" />
          <img className="logo-right" src={menuTop} alt="menu top" />
        </nav>
        <div className="top-container">
          <h1>Say hello to ReactJS</h1>
          <h2>You will learn how to use the most popular frontend library and become a super Ninja developer</h2>
          <button className="awe-button">Awesome!</button>
        </div>
      </div>
      <div className="icons-container">
        <div className="icon">
          <img className="icon-img" src={icon1} alt="icon1" />
          <div className="icon-text">
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
        </div>
        <div className="icon">
          <img className="icon-img" src={icon2} alt="icon2" />
          <div className="icon-text">
            <h3>Components</h3>
            <p>Build encapsulated components that mange their state.</p>
          </div>
        </div>
        <div className="icon">
          <img className="icon-img" src={icon3} alt="icon3" />
          <div className="icon-text">
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the components.</p>
          </div>
        </div>
        <div className="icon">
          <img className="icon-img" src={icon4} alt="icon4" />
          <div className="icon-text">
            <h3>JSX</h3>
            <p>Statically-typed, designed to run on modern browsers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
