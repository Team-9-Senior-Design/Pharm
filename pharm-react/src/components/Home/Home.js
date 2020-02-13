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
import Headline from './components/Headline/Headline';

class Home extends React.Component{
  render () {
    return (
      <Headline/>
      <div className="bg">
        <form name="f" action="">
        <div id="login">
          <div id="loginTip"> 
            <img src={require("../src/logi.png")} height="50" />
          </div>

          <div id="login1">
            <img src="img/username.png" width="20" height="20" alt=""/>
            <input type="text" id="userName" placeholder="username" />
          </div>

          <div id="login1">
            <img src="img/password.png" width="20" height="20" alt=""/>
            <input type="password" id="passWord" placeholder="password" />
          </div>

          <div id="login1">
            <img src="img/username.png" width="20" height="20" alt=""/>
            <input type="text" id="email" placeholder="email" />
          </div>

          <div id="login1">
            <img src="img/username.png" width="20" height="20" alt=""/>
            <input type="text" id="" placeholder="username" />
          </div>

          <div id="logb">
            <input className= "Signupbutton"type="button" value="Sign Up" onClick={this.login}/>
          </div>
        </div>
        </form>
      </div>
      
    );
    }
}

export default Home;
