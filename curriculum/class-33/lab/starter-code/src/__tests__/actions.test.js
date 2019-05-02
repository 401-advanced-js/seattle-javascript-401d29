import thunk from "react-thunk";
import configMockStore from "redux-mock-store";
import * as actions from "../store/actions.js";

const mockStore = configMockStore([thunk]);

describe("Actions", () => {
  it("should do a get action", () => {
    const store = mockStore({ results: [], person: {} });
    const expectedAction = {
      type: "GET",
      payload: "The Kid"
    };

    store.dispatch(actions.getOne("https://swapi.co/api/people"));
    let dispatchedActions = store.getActions();
    expect(dispatchedActions[0]).toEqual(expectedAction);
  });
});
