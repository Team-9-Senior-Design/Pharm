import React from 'react';
import PropTypes from 'prop-types';
import './Headline.css';

const Headline = () => (
  <div className="Headline">
    <header>
        <div>
            <img className="topimg" src={require('../../logo.png')} alt="top" />
        </div>
        <div className="top2"></div>
    </header>
  </div>
);

Headline.propTypes = {};

Headline.defaultProps = {};

export default Headline;
