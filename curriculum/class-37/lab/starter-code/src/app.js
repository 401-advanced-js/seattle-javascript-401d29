import React from "react";
import AppContext from "./app/context.js";
import { LoginContext } from "./auth/context.js";
import Counter from "./components/counter/counter.js";
import Form from "./components/form/form.js";
import List from "./components/list/list.js";
import "./style.scss";

export default class App extends React.Component {
  static contextType = LoginContext;
  render() {
    return (
      <>
        <AppContext>
          <div className="todo">
            <Counter />
            <Form />
            <List />
          </div>
        </AppContext>
      </>
    );
  }
}
