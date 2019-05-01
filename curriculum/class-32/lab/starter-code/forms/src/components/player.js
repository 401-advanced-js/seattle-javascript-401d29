import React from "react";
import { connect } from "react-redux";

import Form from "react-jsonschema-form";

import * as actions from "../store/players-actions.js";
const superagent = require("superagent");

const uiSchema = {
  _id: { "ui:widget": "hidden" },
  __v: { "ui:widget": "hidden" }
};

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = { schema: {} };
  }
  componentDidMount = () => {
    superagent
      .get("https://api-js401.herokuapp.com/api/v1/players/schema")
      .then(results => {
        let schema = results.body;
        this.setState({ schema });
      })
      .catch(e => console.log(e));
  };

  handleSubmit = form => {
    if (parseInt(this.props.id) >= 0) {
      this.props.handlePut({ id: this.props.id, record: form.formData });
    } else {
      this.props.handlePost(form.formData);
    }
  };

  render() {
    return (
      <div>
        <h3>Edit Player {this.props.id}</h3>
        <Form
          schema={this.state.schema}
          uiSchema={uiSchema}
          formData={this.props.players[this.props.id]}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  players: state.players
});

const mapDispatchToProps = (dispatch, getState) => ({
  handlePost: payload => dispatch(actions.post(payload)),
  handlePut: payload => dispatch(actions.put(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
