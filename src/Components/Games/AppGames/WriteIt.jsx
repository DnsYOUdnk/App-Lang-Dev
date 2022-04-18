import React, { useRef, useState, useContext } from "react";
import * as classes from "./AppGames.module.css";
import  { Store } from './../../../context'

export const WriteIt = ({wordIndex, setWordIndex, speak}) => {
    const data = useContext(Store)
    const inputWrite = useRef()
    const [randomWords, setRandomWords] = useState(data.playWords.sort(() => Math.random() - 0.5))
    const checkWord = (event) => {
        event.preventDefault()
        if (inputWrite.current.value === randomWords[wordIndex].translate) {
            speak(randomWords[wordIndex].translate)
            data.setCorrectWords(data.correctWords+1)
            if (wordIndex !== data.playWords.length-1) {
                setWordIndex(wordIndex+1)
            } else {
                setWordIndex(0)
                alert('Game Over')
            }
        } else {
            data.setErrorWords(data.errorWords+1)
        }
        inputWrite.current.value = ''
    }

    return (
        <section>
            <span>write a translation for this word</span>
            <h3>{randomWords[wordIndex].word}</h3>
            <form onSubmit={checkWord} className={classes.default.writeWordBlock}>
                <input ref={inputWrite} type="text" />
                <button className={classes.default.btnOk}>Ok</button>
            </form>
        </section>
    )
}