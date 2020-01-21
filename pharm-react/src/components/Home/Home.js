import React from 'react';
import PropTypes from 'prop-types';
import './Home.css';
import App from '../../App';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";

class Home extends React.Component{
  render () {
    return (
      <div>
        <img className="background" src={require('../../pre.jpg')} alt="background" />
        <Router className="start">
          <Link to="/Play">
          <AwesomeButton
            cssModule={AwesomeButtonStyles}
            type="primary"
            ripple
          >
            Start Game 
          </AwesomeButton>
          </Link>
          <Switch>
            <Route path="/Play">
              {}
            </Route>
          </Switch>
        </Router>
      </div>
    );
    }
}

export default Home;
