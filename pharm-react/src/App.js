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
import Game from "./components/Game/Game";
import Headline from './components/Headline/Headline';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {homePage: true};
    this.loggin = {loggedIn: false};

  }
  startGame= () => {
    this.setState({homePage: false}); 
  }

  login= () => {
    
		var userName = document.getElementById("userName").value;
		var userPass = document.getElementById("passWord").value;
		
		// if (userPass === "root" && userName === "root") {
		// 	window.document.f.action="secondPage.html";
		// 	window.document.f.submit();
		// } 
		if (userName === "" || userName === null) {
			alert("usename is emplty");
			this.setState({loggedIn: false}); 
		} 
		else if (userPass === "" || userPass === null) {
			alert("password is emplty");
			this.setState({loggedIn: false}); 
		} 
		else if (userPass !== "root" || userName !== "root") {
			alert("usename or password is error");
			this.setState({loggedIn: false}); 
		} 
		else{
      console.log("loggin")
			this.setState({loggedIn: true}); 
		}
			
	}
  render () {
    const homePage = this.state.homePage;
    const loggedIn = this.state.loggin;
  return (
    <div className="App">
      
      {homePage ? (
        
        <div>
        <Headline/>
        
          <img className="background" src={require('./pre.jpg')} alt="background" />
          
            <Router className="start">
            <Link to="/Play">
            <AwesomeButton id= "startbutton"
              cssModule={AwesomeButtonStyles}
              type="primary"
              ripple
            >
              Start Game 
            </AwesomeButton>
            </Link>
            <Switch>
              <Route path="/Play">
                {this.startGame}
              </Route>
            </Switch>
          </Router>
          <div id="description">
          <div id="loginTip"> 
                <p id="p1"> Description </p>
              </div>
          This simulation will interactively walk students through patient scenarios to present common barriers patients face and the implications on their health and ability to care for themselves. The students will be required to make decisions throughout the simulation that affect their progress through the simulation. This will help equip students to identify and utilize resources to overcome these barriers and develop patient-specific treatment or self-management recommendations.
          </div>
            <form name="f" action="">
            <div id="login">
              <div id="loginTip"> 
                <p id="p1"> Log In</p>
              </div>

              <div id="login1">
                <img src="img/username.png" width="20" height="20" alt=""/>
                <input type="text" id="userName" placeholder="username" />
              </div>

              <div id="login1">
                <img src="img/password.png" width="20" height="20" alt=""/>
                <input type="password" id="passWord" placeholder="password" />
              </div>

              <div id="logb">
                <input className= "loginbutton"type="button" value="Log In" onClick={this.login}/>
              </div>
            </div>
		        </form>
          
      </div>
      ) : (
        <Game />
      )}
      
    </div>
  );
  }
}



export default App;
