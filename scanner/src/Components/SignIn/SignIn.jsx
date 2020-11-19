import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { login } from "../../actions/auth";
import './SignIn.css'
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      password: "",
      user: [],
      root: "/",
    };
    this.onChangeVal = this.onChangeVal.bind(this);
    this.checkUser = this.checkUser.bind(this);
  }
  onChangeVal = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  checkUser = (e) => {
    e.preventDefault();
    const { id, password } = this.state;
    this.props.login(id, password);
  };
  render() {
    if (this.props.auth.isAuthenticated)
      return <Redirect to="/scanner"></Redirect>;

    return (
      <div className='inputContainer'>
        <form action="" onSubmit={this.checkUser}>
          <input
          className='inputId'
            name="id"
            onChange={this.onChangeVal}
            placeholder="enter your secret id"
          ></input>
          <input
          className='inputId'
            name="password"
            type='password'
            onChange={this.onChangeVal}
            placeholder="enter your password"
          ></input>
          <input type="submit" value="login" className='inputButton'/>
        </form>
      </div>
    );
  }
}

const mapStatetoProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStatetoProps, { login })(SignIn);
