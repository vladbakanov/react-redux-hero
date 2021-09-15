import { SHOW_LOADER, HIDE_LOADER } from "../actions/actionsType";
const initialState = false;
export const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return true;
    case HIDE_LOADER:
      return false;
    default:
      return state;
  }
};
