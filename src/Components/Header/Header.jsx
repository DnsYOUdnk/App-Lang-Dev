import React from "react";
import {ReactComponent as Logo} from "../../assets/img/Icon.svg";
import * as styles from "./Header.module.css";
import { Nav } from "../Navigation/Nav";

const Header = () => {
    return (
        <header className={styles.default.header}>
            <Logo />
            <Nav />
        </header> 
    )
}

export default Header