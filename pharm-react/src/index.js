import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import signUp from './components/signUp/signUp';
import Game from './components/Game/Game';

function RouterComponet() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/Play" component={Game} />
          <Route path="/Signup" component={signUp} />
        </Switch>
      </Router>
    );
  }

ReactDOM.render(<RouterComponet />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
