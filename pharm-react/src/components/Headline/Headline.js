import React from 'react';
//import PropTypes from 'prop-types';
import './Headline.css';
import { withRouter} from 'react-router-dom';

class Headline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {homePage: true};
    this.loggin = {loggedIn: false};
  }
  home=() => {
    this.props.history.push("/");
  }
  render () {

    return(
      <div className="Headline">
      <header>
          <div>
              <img className="topimg" src={require('../../logo.png')} alt="top" onClick={this.home} />
          </div>
          <div className="top2"></div>
      </header>
    </div>
    );
  }
  
}




export default withRouter(Headline);
