import React from "react";
import { useEffect } from "react";
import styles from "./index.module.css";
import Logo from "./../logo/Logo";
import { useHistory, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { openDetails } from "../../actions/actionCreator";

function Details(props) {
  const router = useHistory();
  const params = useParams();

  useEffect(() => {
    props.openDetails(params.id);
  }, []);

  if (props.details) {
    const url = "https://api.opendota.com";
    let img = props.details.img;
    let src = `${url}${img}`;
    return (
      <>
        <Logo />
        <div className={styles.details_wrapper}>
          <div className={styles.details_header}>
            <div className={styles.details_text}>Hero Stats</div>
            <button className="btn btn-primary btn-lg" onClick={router.goBack}>
              BACK
            </button>
          </div>
          <div className={styles.details_mainInfo}>
            <img src={src} alt="hero"></img>
            <div styles={styles.details_mainInfo_text}>
              <div className={styles.details_mainInfo_name}>
                Name: {props.details.localized_name}
              </div>
              <div className={styles.details_mainInfo_atackType}>
                Attack Type: {props.details.attack_type}
              </div>
              <div className={styles.details_mainInfo_role}>
                Role: {props.details.roles.join(" ")}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.stats}>
          <div className={styles.stats_name}>
            <h6 style={{ textAlign: "center" }}>Stats</h6>
            <div>Base health:</div>
            <div>Base health regen:</div>
            <div>Base mana:</div>
            <div>Base mana regen:</div>
            <div>Base atack min:</div>
            <div>Base atack max:</div>
            <div>Base str:</div>
            <div>Base int:</div>
            <div>Base agi:</div>
            <div>Moov speed:</div>
          </div>
          <div className={styles.stats_detail}>
            <h6 style={{ textAlign: "center" }}>Values</h6>
            <div>{props.details.base_health}</div>
            <div>{props.details.base_health_regen}</div>
            <div>{props.details.base_mana}</div>
            <div>{props.details.base_mana_regen}</div>
            <div>{props.details.base_attack_min}</div>
            <div>{props.details.base_attack_max}</div>
            <div>{props.details.base_str}</div>
            <div>{props.details.base_int}</div>
            <div>{props.details.base_agi}</div>
            <div>{props.details.move_speed}</div>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
}

const mapStateToProps = (state) => ({
  details: state.details.hero,
});
const mapDispatchToProps = (dispatch) => ({
  openDetails: (item) => dispatch(openDetails(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
