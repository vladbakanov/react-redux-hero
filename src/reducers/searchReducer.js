import {
  SEARCH_BTN,
  RESET_BTN,
  SEARCH_HEROES_LIST,
} from "../actions/actionsType";

const initialState = {
  filteredHerous: null,
  error: false,
};

export const searchHeroReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_BTN:
      console.log("Search");
      return state;
    case RESET_BTN:
      console.log("reset");
      return { ...state, filteredHerous: null };
    case SEARCH_HEROES_LIST:
      console.log("search");
      return { filteredHerous: action.payload };
    default:
      return state;
  }
};
