import axios from "axios";

export function getCharacters() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/characters", {});
    return dispatch({
      type: "GET_CHARACTERS",
      payload: json.data,
    });
  };
}

export function filterCharacterByStatus(payload) {
  console.log(`filterCharacterByStatus ${payload} `);
  return {
    type: "FILTER_BY_STATUS",
    payload,
  };
}

export function FilterCreated(payload) {
  console.log(`FilterCreated ${payload} `);

  return {
    type: "FILTER_CREATED",
    payload,
  };
}

export function orderByName(payload) {
  console.log(`orderByName ${payload} `);
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
}

export function getNameCharacters(name) {
  console.log(`getNameCharacters ${name} `);
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
      alert("Nombre no encontrado");
    }
  };
}

export function getOccupations() {
  return async function (dispatch) {
    try {
      var info = await axios.get("http://localhost:3001/occupations", {});
      return dispatch({
        type: "GET_OCCUPATIONS",
        payload: info.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postCharacter(payload) {
  console.log(`postCharacter ${payload} `);
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3001/character",
        payload
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  };
}

export function getDetail(id) {
  return async function (dispatch) {    
    try {
      var json = await axios.get("http://localhost:3001/characters/" + id);
      console.log(json);
      return dispatch({
        type: "GET_DETAILS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}