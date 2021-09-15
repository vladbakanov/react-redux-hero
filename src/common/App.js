import React from "react";
import { connect } from "react-redux";

import Logo from "./logo/Logo";
import Search from "./search/Search";
import Heroes from "./heroes/Heroes";

import styles from "./app.module.css";

function App(props) {
  window.addEventListener("scroll", () =>
    window.scrollY > 400 ? (up.hidden = false) : (up.hidden = true)
  );

  return (
    <>
      <Logo />
      <Search />
      <Heroes />
      <div
        id="up"
        className={styles.up}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        hidden
      >
        <p>UP</p>
      </div>
    </>
  );
}

export default connect(null, null)(App);
