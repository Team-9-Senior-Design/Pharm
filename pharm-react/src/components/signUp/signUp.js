import React from 'react';
// import PropTypes from 'prop-types';
import './signUp.css';
import Headline from '../Headline/Headline';

class signUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {homePage: true};
    this.loggin = {loggedIn: false};
  }
  render () {
    return(
        <div>
          <Headline/>
          <div class="bg">
		<form name="f" action="">
			<div id="loginbox">
				<div id="loginTip"> 
					<img src={require("../../sproject/img/logi.png")} height="50" alt=""/>
				</div>

				<div id="login1">
					<img src={require("../../sproject/img/username.png")} width="20" height="20" alt=""/>
					<input type="text" id="FullName" placeholder="full name" />
				</div>
				<div id="login1">
					<img src={require("../../sproject/img/username.png")} width="20" height="20" alt=""/>
					<input type="text" id="userName" placeholder="username" />
				</div>

				<div id="login1">
					<img src={require("../../sproject/img/password.png")} width="20" height="20" alt=""/>
					<input type="password" id="passWord" placeholder="password" />
				</div>

				<div id="logb">
					<input type="button" value="Sign Up" className="button" 
				 		onClick="signup()"/>
				</div>

			</div>
		</form>
	</div>
        </div>
    );
  }
  
}



export default signUp;
