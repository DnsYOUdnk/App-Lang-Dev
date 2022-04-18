import React, { useEffect, useRef } from "react";
import * as classes from "./Learn.module.css";


export const Learn = ({library, wordIndex, setWordIndex, speak}) => {
    useEffect(() => {
        speak(library[wordIndex].translate )
    }, [wordIndex])

    return (
        <section style={{textAlign: 'center'}}>
            <span>{library[wordIndex].word}</span>
            <h3>{library[wordIndex].translate}</h3>
        </section>
    )
}