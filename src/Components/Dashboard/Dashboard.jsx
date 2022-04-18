import React from "react";
import * as classes from "./Dashboard.module.css";
import PlayBtn from "../../assets/img/play.svg"

export const Dashboard = ({pointsValue}) => {
    return (
        <section className={classes.default.dashboardContainer}>
            <div className={classes.default.gameBlock}>
                <p>The most populat game is <br /> 
                    <b>Speak IT</b>
                </p>
                <img className={classes.default.btnPlay} src={PlayBtn} alt="button-play" />
                <button className={classes.default.btnRandom}>Play random game</button>
            </div>
            <div className={classes.default.pointsBlock}>
                <span>Common expirience</span>
                <h3>{pointsValue} points</h3>
            </div>
            <div className={classes.default.levelBlock}>
                <span>level</span>
                <h3>{(0.2 * Math.sqrt(pointsValue)).toFixed()} level</h3>
                <p>Learn 750 new words in one course</p>

                <div className={classes.default.levelBackground}></div>
            </div>

        </section>
    )
}