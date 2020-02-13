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

import { AwesomeButton } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {first: true,
                  second: false};

  }
  Change = (element ,current : String, newer : String) => {
    ReactDOM.render(element, document.getElementById(newer));

  }
  render () {
    const first = this.state.first;
    const second = this.state.second;
    let description1 = 
  return (
  <body >
	  <Headline/>
    {first ? (

  <div className="first3choice">
	<div className="backg">
	<div className="box1">
		<h1>Continue the current medications	</h1>   
		<img src={require("../../Unknown.jpg")}/> 
		<br />
		<Router className="start">
            <Link to="/Play">
            <AwesomeButton id= "startbutton"
              cssModule={AwesomeButtonStyles}
              type="primary"
              ripple
            >
              Next 
            </AwesomeButton>
            </Link>
            <Switch>
              <Route path="/Play">
              { console.log('this button works') }
              </Route>
            </Switch>
          </Router>
	</div>

	<div className="box1">
		<h1>Start glimepiride 2 mg po daily</h1>   
		<img src={require("../../Unknown.jpg")}/>
		<br />
		<Router className="start">
            <Link to="/Play">
            <AwesomeButton id= "startbutton"
              cssModule={AwesomeButtonStyles}
              type="primary"
              ripple
            >
              Next 
            </AwesomeButton>
            </Link>
            <Switch>
              <Route path="/Play">
              { console.log('this button works') }
              </Route>
            </Switch>
          </Router>
	</div>

	<div className="box1">
		<h1>D/C pioglitazone and start Jardiance 10 mg po daily</h1>   
		<img src={require("../../Unknown.jpg")}/> 
    <Router className="start">
            <Link to="/Play">
            <AwesomeButton id= "startbutton"
              cssModule={AwesomeButtonStyles}
              type="primary"
              ripple
            >
              Next 
            </AwesomeButton>
            </Link>
            <Switch>
              <Route path="/Play">
              { console.log('this button works') }
              </Route>
            </Switch>
          </Router>
		<br />
	</div>





	</div>
  </div> 


  </body>
);
}
}

export default Game;
