import React, { useEffect, useMemo, useState, useContext } from "react";
import  { Store } from './../../../context'
import * as classes from "./AppGames.module.css";

export const CheckIt = ({wordIndex, setWordIndex, speak}) => {
    const data = useContext(Store)

    const randomWords = useMemo(() => data.playWords.sort(() => Math.random() - 0.5), [])

    const [currentWords, setCurrentWords] = useState(['random', 'correct', 'random2'])
    useEffect(() => {
        setCurrentWords([
            randomWords[wordIndex].word,
            randomWords[(wordIndex + 1)%randomWords.length].word,
            randomWords[(wordIndex + 2)%randomWords.length].word
        ].sort(() => Math.random() - 0.5))
    }, [data.correctWords])

    const checkWord = (word) => {
        if (word === randomWords[wordIndex].word) {
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
    }

    return (
        <section>
            <span>write a translation for this word</span>
            <h3>{randomWords[wordIndex].translate}</h3>
            <ul className={classes.default.btnContainer} >
                {currentWords.map((word, index) => (
                    <li className={classes.default.btnCheck} key={index} onClick={() => checkWord(word)}>{word}</li>
                ))}
            </ul>
        </section>
    )
}