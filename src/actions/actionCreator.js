import {
  SEARCH_BTN,
  RESET_BTN,
  FETCH_HEROES,
  SHOW_LOADER,
  HIDE_LOADER,
  SEARCH_HEROES_LIST,
  DETAILS,
  ERROR,
} from "./actionsType";
import axios from "axios";

export const createSearch = (heroFullList, hero) => (dispatch) => {
  let name = hero.toLowerCase();
  const list = heroFullList.filter((item) => {
    return item.localized_name.toLowerCase().includes(name);
  });
  dispatch(searchedList(list));
  return {
    type: SEARCH_BTN,
  };
};

export function openDetails(id) {
  return async (dispatch, getState) => {
    let heroes = getState((state) => state.fetchHeroes.heroes);
    if (heroes.length) {
      const hero = heroes.find((item) => item.id == id);
      return dispatch(responseDetails(hero));
    } else {
      heroes = await fetchHeroesApi().catch(() => dispatch(errorCreater()));
      const hero = heroes.find((item) => item.id == id);
      return dispatch(responseDetails(hero));
    }
  };
}

function responseDetails(hero) {
  return {
    type: DETAILS,
    payload: hero,
  };
}

export function searchedList(heroes) {
  return {
    type: SEARCH_HEROES_LIST,
    payload: heroes,
  };
}

export function resetSearch() {
  return {
    type: RESET_BTN,
  };
}

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}
export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}
export function errorCreater() {
  return {
    type: ERROR,
  };
}

export function fetchHeroes() {
  return async (dispatch) => {
    dispatch(showLoader());
    const json = await fetchHeroesApi();
    setTimeout(() => {
      dispatch(responseFetchHeroes(json));
      dispatch(hideLoader());
    }, 1500);
  };
}

const responseFetchHeroes = (data) => ({
  type: FETCH_HEROES,
  payload: data,
});

async function fetchHeroesApi() {
  const response = await axios.get("https://api.opendota.com/api/heroStats");
  return await response.data;
}
