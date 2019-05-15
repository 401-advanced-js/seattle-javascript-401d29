import React from "react";

import { AppContext } from "../../app/context.js";

const Count = props => {
  return (
    <AppContext.Consumer>
      {context => <h2>There are {context.count} items in the list</h2>}
    </AppContext.Consumer>
  );
};

export default Count;
