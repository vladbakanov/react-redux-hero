import { FETCH_HEROES, ERROR } from "../actions/actionsType";

const initialState = {
  heroes: [],
  error: false,
};

export const fetchHeroesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HEROES:
      console.log("fetched");
      return { heroes: action.payload, error: false };
    case ERROR:
      console.log("ERROR");
      return { ...state, error: true };
    default:
      return state;
  }
};
