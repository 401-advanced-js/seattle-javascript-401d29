import React from "react";

import { AppContext } from "../../app/context.js";

import { When } from "../if";

class List extends React.Component {
  static contextType = AppContext;
  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <>
            <div>
              <ul>
                {context.todoList &&
                  context.todoList.map(item => (
                    <li
                      className={`complete-${item.complete.toString()}`}
                      key={item.id}
                    >
                      <span onClick={() => context.toggleComplete(item.id)}>
                        {item.text}
                      </span>
                      <button onClick={() => context.toggleEdit(item.id)}>
                        edit
                      </button>
                      <When condition={context.editing === item.id}>
                        <form onSubmit={context.updateItem}>
                          <input
                            onChange={context.handleInputChange}
                            id={item.id}
                            complete={item.complete}
                            defaultValue={item.text}
                          />
                        </form>
                      </When>
                    </li>
                  ))}
              </ul>
            </div>
          </>
        )}
      </AppContext.Consumer>
    );
  }
}

export default List;
