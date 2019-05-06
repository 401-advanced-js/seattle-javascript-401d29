import React from "react";

function Form(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input onChange={props.changeName} />
    </form>
  );
}

export default Form;
