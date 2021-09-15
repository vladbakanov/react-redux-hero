import React from "react";
import styles from "./index.module.css";
import Hero from "../hero/hero";
import { connect } from "react-redux";

function HeroesList(props) {
  console.log(props);
  let style;
  function atrHero(arr, attr) {
    return arr.filter((hero) => hero.primary_attr == `${attr}`);
  }
  if (props.attr == "str") {
    style = styles.heroes__list_streight;
  } else if (props.attr == "agi") {
    style = styles.heroes__lists_aggility;
  } else if (props.attr == "int") {
    style = styles.heroes__lists_intelligance;
  }
  if (props.isLoading) {
    return (
      <div className={style}>
        <div className={styles.heroes__mainstat}>{props.attribute}</div>
        <div className={styles.heroes__list}>
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      </div>
    );
  }
  if (props.filtered?.length) {
    return (
      <div className={style}>
        <div className={styles.heroes__mainstat}>{props.attribute}</div>
        <div className={styles.heroes__list}>
          {atrHero(props.filtered, props.attr).map((item, index) => {
            return (
              <Hero
                name={item.localized_name}
                img={item.img}
                key={index}
                id={item.id}
              />
            );
          })}
        </div>
      </div>
    );
  } else if (props.filtered?.length === 0) {
    return (
      <div className={style}>
        <div className={styles.heroes__mainstat}>{props.attribute}</div>
        <div className={styles.heroes__list}>NOT FOUND</div>
      </div>
    );
  }

  return (
    <div className={style}>
      <div className={styles.heroes__mainstat}>{props.attribute}</div>
      <div className={styles.heroes__list}>
        {atrHero(props.heroes, props.attr).map((item, index) => {
          return (
            <Hero
              name={item.localized_name}
              img={item.img}
              key={index}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  heroes: state.fetchHeroes.heroes,
  filtered: state.searchHero.filteredHerous,
  error: state.fetchHeroes.error,
});

export default connect(mapStateToProps, null)(HeroesList);
