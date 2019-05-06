let initialState = {
  results: [],
  person: {}
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "GET":
      return { results: payload.results, person: state.person };
    case "GETONE":
      return { results: state.results, person: payload };
    default:
      return state;
  }
};
