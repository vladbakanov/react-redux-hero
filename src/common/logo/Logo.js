import React from "react";
import logo from '../../img/logo.png'
import styles from './index.module.css'


export default function Logo() {
    return(
        <div className = {styles.logo}>
            <img  className = {styles.logo__img} src={logo} alt="dota_logo" />
            <div className = {styles.logo__text}>Heroes Of Dota 2</div>
        </div>
    );
}