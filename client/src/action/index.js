import axios from "axios";

export function getCharacters() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/characters");
    console.log(json);
    return dispatch({
      type: "GET_CHARACTERS",
      payload: json.data,
    });
  };
}
