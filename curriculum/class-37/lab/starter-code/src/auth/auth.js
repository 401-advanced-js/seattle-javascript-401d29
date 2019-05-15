import React from "react";
import { LoginContext } from "./context.js";
import jwt from "jsonwebtoken";

const If = props => {
  return !!props.condition ? props.children : null;
};

class Auth extends React.Component {
  static contextType = LoginContext;
  render() {
    return (
      <LoginContext.Consumer>
        {context => {
          let okToRender = false;
          try {
            let user = context.token
              ? jwt.verify(context.token, process.env.REACT_APP_SECRET)
              : {};

            console.log(user);

            let okToRender =
              context.loggedIn &&
              (this.props.capabilty
                ? user.capabilties.includes(this.props.capability)
                : true);
          } catch (e) {}
          return <If condition={okToRender}>{this.props.children}</If>;
        }}
      </LoginContext.Consumer>
    );
  }
}
export default Auth;
