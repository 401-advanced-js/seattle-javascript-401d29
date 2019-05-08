import React from "react";
import { LoginContext } from "./context.js";
import superagent from "superagent";

const API = process.env.REACT_APP_API;

const If = props => {
  return !!props.condition ? props.children : null;
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    superagent
      .post(`${API}/signin`)
      .auth(this.state.username, this.state.password)
      .then(response => {
        let token = response.text;
        this.context.login(token);
      })
      .catch(err => console.error(err));
  };

  static contextType = LoginContext;
  render() {
    return (
      <>
        <If condition={this.context.loggedIn}>
          <button onClick={this.context.logout}>Log Out</button>
        </If>
        <If condition={!this.context.loggedIn}>
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder="Username"
              name="Username"
              onChange={this.handleChange}
            />
            <input
              placeholder="Password"
              name="Password"
              onChange={this.handleChange}
            />
            <input type="submit" value="login" />
          </form>
        </If>
      </>
    );
  }
}
export default Login;
