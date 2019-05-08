import React from "react";

import { AppContext } from "../../app/context.js";

class Form extends React.Component {
  static contextType = AppContext;
  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <>
            <div>
              <form onSubmit={context.addItem}>
                <input
                  placeholder="Add To Do List Item"
                  onChange={context.handleInputChange}
                />
              </form>
            </div>
          </>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Form;
