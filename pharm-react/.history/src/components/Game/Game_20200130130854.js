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
    this.state = {first: true
                  };

  }
  Change = (element ,current : String, newer : String) => {
    ReactDOM.render(element, document.getElementById(newer));

  }
  render () {
  return (
  <body >
	  <Headline/>
  <div className ="description1">
    <img className="background" src={require('../../pre.jpg')} alt="background" />
    <div className="centered"> 
      <h3>Initial Case Info</h3>
      <p>
      Danny is a 58 yo AAM who presents to a free clinic to establish care. He lost his job and insurance 2 weeks ago and is concerned about how he will afford his medications. He reports he is currently out of testing supplies for his diabetes but denies any symptoms related to his health problems, including hypoglycemia. He reports he is usually adherent to all of his medications but ran out of his atorvastatin and carvedilol medications 2 weeks ago and has been unable to refill them. 
      </p>
      <p><span className= "Bold">PMH: </span>Type 2 DM x 5 years, HFrEF (EF 35%, NYHA II) x 2 years, HTN x 18 years, MDD x 1 year, obesity</p>
      <p><span className= "Bold">SH: </span>  	Tobacco = + (5 cigarettes/day)		Alcohol = 		Illicit Drugs = </p>
      <p><span className= "Bold">Diet: </span> Usually eats 2 meals a day, relies on fast food a few times per week due to cost</p>
      <p><span className= "Bold">Exercise: </span> Walks 20 minutes 3 days a week at the closet mall</p>
      <p><span className= "Bold">Allergies/Intolerances: </span> NKDA</p>
      <p><span className= "Bold">Current Meds: </span> metformin 1000 mg po BID, pioglitazone 30 mg po daily, ramipril 10 mg po daily, carvedilol 25 mg po BID, spironolactone 25 mg po daily, furosemide 20 mg po daily PRN, aspirin 81 mg po daily, atorvastatin 80 mg po daily, escitalopram 20 mg po daily</p>
      <p><span className= "Bold">Vaccine history: </span> Walks 20 minutes 3 days a week at the closet mall</p>
      <p><span className= "Bold">Significant vitals and labs: </span> Walks 20 minutes 3 days a week at the closet mall</p>
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
              {this.Change()}
              { console.log('this button works') }
              </Route>
            </Switch>
          </Router>
    </div>
  </div>
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
