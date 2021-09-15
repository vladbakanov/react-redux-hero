import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

const url = "https://api.opendota.com";

function Hero(props) {
  let img = props.img;
  let src = `${url}${img}`;
  return (
    <Link className={styles.hero} to={`/details/${props.id}`}>
      <div className={styles.hero_name}>{props.name}</div>
      <img className={styles.hero_img} src={src} alt="name"></img>
    </Link>
  );
}

export default Hero;
