import React from 'react';
// import PropTypes from 'prop-types';
import './Game.css';
import Headline from '../Headline/Headline';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './secPage.css';

class secPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {homePage: true};
    this.loggin = {loggedIn: false};
  }
  render () {
    return(
        <div>
          <Headline/>
          <div>
            
          </div>
        </div>
    );
  }
  
}
  




export default secPage;
