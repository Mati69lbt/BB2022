import axios from "axios";

export function getCharacters() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/characters");
    return dispatch({
      type: "GET_CHARACTERS",
      payload: json.data,
    });
  };
}
export function getOccupation() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/occupations");
    console.log(json);
    return dispatch({
      type: "GET_OCCUPATIONS",
      payload: json.data,
    });
  };
}
export function postCharacters(payload) {
  return async function (dispatch) {
    var json = await axios.post("http://localhost:3001/character", payload);
    return json;
  };
}
export function getNameCharacters(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        "http://localhost:3001/characters?name=" + name
      );
      return dispatch({
        type: "GET_NAME_CHARACTERS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getDetails(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/characters/" + id);
      return dispatch({
        type: "GET_DETAIL",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterByStatus(payload) {
  return {
    type: "FILTER_BY_STATUS",
    payload,
  };
}
export function filterCreated(payload) {
  return {
    type: "FILTER_CREATED",
    payload,
  };
}
export function orderByName(payload) {
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
}
