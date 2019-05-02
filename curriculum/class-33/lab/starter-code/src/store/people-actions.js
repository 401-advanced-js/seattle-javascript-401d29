import * as utils from "../lib/utils.js";

export const getStuff = url => dispatch => {
  return utils.fetchData(url).then(records => {
    dispatch(runAsyncAction(records));
  });
};

export const getOne = url => dispatch => {
  return utils.fetchData(url).then(records => {
    dispatch(getone(records));
  });
};

const runAsyncAction = payload => {
  return {
    type: "GET",
    payload: payload
  };
};

const getone = payload => {
  return {
    type: "GETONE",
    payload: payload
  };
};
