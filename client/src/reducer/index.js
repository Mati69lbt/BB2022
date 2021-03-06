const initialState = {
  characters: [],
  allCharacters: [],
  occupations: [],
  detail: [],
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_CHARACTERS":
      return {
        ...state,
        characters: action.payload,
        allCharacters: action.payload,
      };
    case "FILTER_BY_STATUS":
      const allCharacters = state.allCharacters;
      const statusFiltered =
        action.payload === "All"
          ? allCharacters
          : allCharacters.filter((el) => el.status === action.payload);
      return {
        ...state,
        characters: statusFiltered,
      };

    case "FILTER_CREATED":
      const createdFilter =
        action.payload === "Created"
          ? state.allCharacters.filter((i) => i.createdInDb)
          : state.allCharacters.filter((i) => !i.createdInDb);
      return {
        ...state,
        characters:
          action.payload === "All" ? state.allCharacters : createdFilter,
      };
    case "ORDER_BY_NAME":
      let sorted =
        action.payload === "asc"
          ? state.characters.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.characters.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return +1;
              }
              return 0;
            });
      return {
        ...state,
        characters: sorted,
      };
    case "GET_NAME_CHARACTERS":
      return {
        ...state,
        characters: action.payload,
      };
    case "POST_CHARACTERS":
      return {
        ...state,
      };
    case "GET_OCCUPATIONS":
      return {
        ...state,
        occupations: action.payload,
      };
    case "GET_DETAIL":
      return {
        ...state,
        detail: action.payload,
      };
    case "GET_DISMOUNT_DETAIL":
      return {
        ...state,
        detail: [],
      };

    default:
      return state;
  }
}

export default rootReducer;
