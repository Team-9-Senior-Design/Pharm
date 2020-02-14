import React from 'react';
import './App.css';

// eslint-disable-next-line
import { AwesomeButton } from "react-awesome-button";
// eslint-disable-next-line
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";
// import Game from "./components/Game/Game";
import Headline from './components/Headline/Headline';
import firebase from './firebase.js';
import './components/signUp/signUp.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {homePage: true};
    this.loggin = {loggedIn: false};

  }
  // startGame= () => {
  //   // this.setState({homePage: false}); 
  // }
  retrieveLogin= () => {
    let userId = "User1";
		return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
      // eslint-disable-next-line
      var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
      // ...
    });
  }
  signup=() => {
    this.props.history.push("/Signup");
  }
  login= () => {
    // eslint-disable-next-line
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
      this.props.history.push("/Play");
      console.log('play')
			// this.setState({loggedIn: true}); 
		}
			
	}
  render (){
    // const homePage = this.state.homePage;
    // eslint-disable-next-line
    // const loggedIn = this.state.loggin;
  return (
    // <div className="App">
      <div>
        <Headline/>
          <div className="bg">
            <div id="login2">
            <div id="loginTip">
            <h1><br/>IDENTITY LIFE</h1>
            </div>
            <p> <br/>
              This simulation will interactively walk 
              students through patient scenarios to present 
              common barriers patients face and the implications 
              on their health and ability to care for themselves. 
              The students will be required to make decisions 
              throughout the simulation that affect their progress 
              through the simulation. This will help equip students
              to identify and utilize resources to overcome 
              these barriers and develop patient-specific treatment 
              or self-management recommendations.</p>
            </div>
            <form name="f" action="">
            <div id="login">
              <div id="loginTip"> 
                <img src={require("../src/logi.png")} height="50" alt=""/>
              </div>

              <div id="login1">
                <img src={require("../src/sproject/img/username.png")} width="20" height="20" alt=""/>
                <input type="text" id="userName" defaultValue="username" />
              </div>

              <div id="login1">
                <img src={require("../src/sproject/img/password.png")} width="20" height="20" alt=""/>
                <input type="password" id="passWord" defaultValue="password" />
              </div>
              <div id="logb">
                <input className= "loginbutton"type="button" value="Log In" onClick={this.login}/>
              </div>
              <div id="logb">
                <input className= "Signupbutton"type="button" value="Sign Up" onClick={this.signup}/>
              </div>
            </div>
            </form>
            </div>
            </div>);
  }
}



export default App;
