import React, { useRef } from "react";
import * as classes from "./Library.module.css";
import addBtn from "../../assets/img/add.svg"
import deleteBtn from "../../assets/img/delete.svg"

export const Library = ({library,setLibrary}) => {
    const inputValue = useRef()

    const addNewWord = async (event) => {
        event.preventDefault()
        const response = await fetch(`https://tmp.myitschool.org/API/translate/?source=ru&target=en&word=${inputValue.current.value}`)
        const translation = await response.json()
        const newWord = {
            word: translation.word,
            translate: translation.translate,
            learn: 0
        }
        setLibrary([...library, newWord])
        localStorage.setItem('library', JSON.stringify([...library, newWord]))
        inputValue.current.value = ''
    }

    const deleteWord = (id) => {
        const updateLibrary = library.filter((_, index) => index !== id)
        localStorage.setItem('library', JSON.stringify(updateLibrary))
        setLibrary([...updateLibrary])
    }

    return (
        <section className={classes.default.libraryBlock}>
            <span>Add new <b>Word</b></span>
            <form onSubmit={addNewWord} className={classes.default.addWordBlock}>
                <input ref={inputValue} type="text" />
                <button>
                    <img src={addBtn} alt="" />
                </button>
            </form>
            <div className={classes.default.wordsTable}>
                <ul>
                    <li><h3>Word</h3></li>
                    <li><h3>Translation</h3></li>
                    <li><h3>Learn</h3></li>
                </ul>

                {library.map((word, index) => {
                return      <ul key={index}>
                                <li>{word.word}</li>
                                <li>{word.translate}</li>
                                <li>{word.learn}</li>

                                <div className={classes.default.settings}>
                                    <button onClick={() => deleteWord(index)}>
                                        <img src={deleteBtn} alt="btn-delete-word" />
                                    </button>
                                </div>
                            </ul>
                })}
            </div>
        </section>
    )
}