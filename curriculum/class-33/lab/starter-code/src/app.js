import React from "react";

import { connect } from "react-redux";
import app from "./app.module.scss";
import * as actions from "./store/people-actions.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.fetchPeople = this.fetchPeople.bind(this);
  }

  async fetchPeople(e) {
    e.preventDefault();
    let api = "https://swapi.co/api/people";
    this.props.get(api);
  }

  async fetchPerson(url) {
    this.props.getone(url);
  }

  render() {
    return (
      <>
        <button onClick={this.fetchPeople}>Get The People</button>
        <section className={app.people}>
          <ul>
            {this.props.api.results.map((result, i) => (
              <li onClick={() => this.fetchPerson(result.url)} key={i}>
                {result.name}
              </li>
            ))}
          </ul>
          <div className={app.person}>
            {Object.keys(this.props.api.person).map((key, i) => (
              <div key={i}>
                <span>{key}:</span>
                <span>{this.props.api.person[key]}</span>
              </div>
            ))}
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = state => ({
  api: state.api
});

const mapDispatchToProps = (dispatch, getState) => ({
  get: api => dispatch(actions.getStuff(api)),
  getone: url => dispatch(actions.getOne(url))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
