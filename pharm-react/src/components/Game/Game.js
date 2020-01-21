import React from 'react';
import PropTypes from 'prop-types';
import './Game.css';
import Headline from '../Headline/Headline';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {homePage: true};

  }
  render () {
  return (
    <div>
      <div className="Game">
        Welcome to the Pharmacy Simulator!
      </div>
    </div>
);
}
}

export default Game;
