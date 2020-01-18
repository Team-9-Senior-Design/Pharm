import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";

function App() {
  // startGame() {
    
  // }

  return (
    <div className="App">
      <header>
        <div>
            <img className="topimg" src={require('./logo.png')} alt="top" />
        </div>
        <div className="top2"></div>
      </header>
      <div>
          <img className="background" src={require('./pre.jpg')} alt="background" />
          <Router className="start">
            <Link to="/Headline">
            <AwesomeButton
              cssModule={AwesomeButtonStyles}
              type="primary"
              ripple
            >
              Button
            </AwesomeButton>
            </Link>
          </Router>

      </div>
      
    </div>
  );
}



export default App;
