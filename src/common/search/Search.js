import React from "react";
import { useState } from "react";
import styles from "./index.module.css";
import { connect } from "react-redux";
import { createSearch, resetSearch } from "../../actions/actionCreator";

function Search(props) {
  let [search, useSearch] = useState("");
  let handlerSearch = (event) => useSearch(event.target.value);

  const filterHeroes = (e) => {
    e.preventDefault();
    props.createSearch(props.heroes, search);
  };

  const resetHeroes = (e) => {
    e.preventDefault();
    props.resetSearch();
    useSearch("");
  };

  return (
    <form className={styles.search}>
      <div className={styles.search__text}>Search</div>
      <input
        type="text"
        className={styles.search__input}
        placeholder="Enter a hero name"
        value={search}
        onChange={handlerSearch}
      ></input>
      <button className={styles.btn__find} onClick={filterHeroes}>
        Find
      </button>
      <button className={styles.btn__reset} onClick={resetHeroes}>
        Reset
      </button>
    </form>
  );
}
const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  heroes: state.fetchHeroes.heroes,
});

const mapDispatchToProps = (dispatch) => ({
  createSearch: (heroFullList, hero) =>
    dispatch(createSearch(heroFullList, hero)),
  resetSearch: () => dispatch(resetSearch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
