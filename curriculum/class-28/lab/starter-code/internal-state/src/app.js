import React from "react";
import Form from "./components/form/form.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: ""
    };
  }

  changeName = e => {
    e.preventDefault();
    this.setState({ name: e.target.value, count: this.state.count });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ name: "", count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <div>Name: {this.state.name}</div>
          <div># of Updates: {this.state.count}</div>
        </div>
        <Form handleSubmit={this.handleSubmit} changeName={this.changeName} />
      </React.Fragment>
    );
  }
}
export default App;
