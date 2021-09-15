import { DETAILS } from "../actions/actionsType";
const initialState = {};
export const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAILS:
      return { hero: action.payload };

    default:
      return state;
  }
};
