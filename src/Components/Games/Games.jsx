import React from "react";
import * as classes from "./Games.module.css";
import imgCheckCorrect from "./../../assets/img/check-the-correct-one.svg"
import imgSelectTranslation from "./../../assets/img/select-translation.svg"
import imgSprintGuess from "./../../assets/img/sprint-guess.svg"
import imgPutTranslation from "./../../assets/img/put-translation.svg"
import imgSpeakAndCheck from "./../../assets/img/speak-and-check.svg"
import imgSprintListen from "./../../assets/img/listen-sprint.svg"
import imgRememberTranslation from "./../../assets/img/remember-translation.svg"
import imgWriteTranslation from "./../../assets/img/write-translation.svg"
import imgListenAndGuess from "./../../assets/img/listen-and-guess.svg"
import { NavLink } from "react-router-dom";

export const Games = () => {
    const GAMES = [
        {img: imgSpeakAndCheck, path: 'speak-and-check-it', name: 'Speak and check ', description: 'Say the word on the screen and check your spelling'},
        {img: imgCheckCorrect, path: 'check-it', name: 'Check the correct one', description: 'Say the word on the screen and check your spelling'},
        {img: imgPutTranslation, path: 'put-it', name: 'Put together a translation', description: 'Say the word on the screen and check your spelling'},
        {img: imgListenAndGuess, path: 'listen-and-guess-it', name: 'Guess and listen', description: 'Say the word on the screen and check your spelling'},
        {img: imgSprintGuess, path: 'sprint-guess-it', name: 'Sprint by guessing', description: 'Say the word on the screen and check your spelling'},
        {img: imgSelectTranslation, path: 'select-it', name: 'Select the right translation', description: 'Say the word on the screen and check your spelling'},
        {img: imgRememberTranslation, path: 'remember-it', name: 'Remember translation', description: 'Say the word on the screen and check your spelling'},
        {img: imgWriteTranslation, path: 'write-it', name: 'Write the translation', description: 'Say the word on the screen and check your spelling'},
        {img: imgSprintListen, path: 'sprint-listen-it', name: 'Sprint by listen', description: 'Say the word on the screen and check your spelling'}
    ]

    return (
        <section className={classes.default.gameContainer}>
            {GAMES.map((game, index) => {
                return  <NavLink to={'/game/' + game.path} key={index}>
                            <div className={classes.default.gameBlock}>
                                <div className={classes.default.gameBlockColor}>
                                    <h2>{game.name}</h2>
                                    <p>{game.description}</p>
                                </div>

                                <img src={game.img} alt={game.path} />
                            </div>
                        </NavLink>
            })}
        </section>
    )
}