let initialState = { record: [], activeRecord: { name: "" } };

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "GET":
      let activeRecord = state.record.filter(
        (record, idx) => idx === payload
      )[0];
      console.log("This is the active record", activeRecord);
      return {
        record: [...state.record],
        activeRecord: activeRecord
      };

    case "PUT":
      return { ...state.record, ...state.activeRecord };

    case "PATCH":
      return { ...state.record, ...state.activeRecord };

    case "POST":
      return {
        record: [...state.record, payload],
        activeRecord: { ...state.activeRecord }
      };

    case "DELETE":
      return {
        record: state.record.filter((record, idx) => {
          return idx !== payload;
        }),
        activeRecord: { ...state.activeRecord }
      };

    default:
      return state;
  }
};
