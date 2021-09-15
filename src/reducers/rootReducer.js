import { combineReducers } from "redux";
import { searchHeroReducer } from "./searchReducer";
import { loaderReducer } from "./loaderReducer";
import { fetchHeroesReducer } from "./fecthHeroReducer";
import { detailsReducer } from "./datailsReducer";

export const rootReducer = combineReducers({
  searchHero: searchHeroReducer,
  isLoading: loaderReducer,
  fetchHeroes: fetchHeroesReducer,
  details: detailsReducer,
});
