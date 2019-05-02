import superagent from "superagent";

export const fetchData = url => {
  return superagent
    .get(url)
    .then(result => result.body)
    .catch(console.log);
};
