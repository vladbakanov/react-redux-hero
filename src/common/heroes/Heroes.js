import React from "react";
import styles from "./index.module.css";
import HeroesList from "../heroesList/HeroesList";
import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchHeroes } from "../../actions/actionCreator";

function Heroes(props) {
  useEffect(() => {
    props.fetchHeroes();
  }, []);

  return (
    <div className={styles.heroes__list}>
      <HeroesList attribute="STREIGHT" attr="str" />
      <HeroesList attribute="INTELLIGENCE" attr="int" />
      <HeroesList attribute="AGGILITY" attr="agi" />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchHeroes: () => dispatch(fetchHeroes()),
});

export default connect(null, mapDispatchToProps)(Heroes);
