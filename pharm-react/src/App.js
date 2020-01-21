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

  }
  startGame= () => {
    this.setState({homePage: false}); 
  }
  render () {
    const homePage = this.state.homePage;
  return (
    <div className="App">
      <Headline/>
      {homePage ? (
        <div>
          <img className="background" src={require('./pre.jpg')} alt="background" />
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
                {this.startGame}
              </Route>
            </Switch>
          </Router>
      </div>
      ) : (
        <Game />
      )}
      
    </div>
  );
  }
}



export default App;
