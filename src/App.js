import { useEffect, useState } from 'react';
import './App.css';
import { Dashboard } from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Library } from './Components/Library/Library'
import { Learn } from './Components/Learn/Learn'
import * as styles from "./App.module.css";
import { Games } from './Components/Games/Games';
import { WriteIt } from './Components/Games/AppGames/WriteIt';
import { CheckIt } from './Components/Games/AppGames/CheckIt';
import  { Store } from './context';
import { Cookies, useCookies } from 'react-cookie';
import games from './Components/Games/index'

function App() {
  const libraryData = localStorage.getItem('library') ? JSON.parse(localStorage.getItem('library')) : []
  const [library, setLibrary] = useState(libraryData)
  const [cookie, setCookie] = useCookies(['points'])
  const [wordIndex, setWordIndex] = useState(0)
  const [correctWords, setCorrectWords] = useState(0)
  const [errorWords, setErrorWords] = useState(0)
  const [pointsValue, setPointsValue] = useState(+cookie.points || 0)
  const [playWords, setPlayWords] = useState(library.slice(-10))

  useEffect(() => {
    if(correctWords) {
      setPointsValue(pointsValue + 1)
      setCookie('points', pointsValue + 1)
    }

  }, [correctWords])

  const progressBarWidth = {
    width: `${(100 / library.slice(-10).length) * (wordIndex + 1)}vw`
  }

  const speak = (word) => {
    const speakInstance = new SpeechSynthesisUtterance(word)
    speakInstance.voice = speechSynthesis.getVoices()[7]
    speechSynthesis.speak(speakInstance)
  }

  return (
    <BrowserRouter>
    <Store.Provider value={{correctWords, setCorrectWords, errorWords, setErrorWords, playWords, setPlayWords }}>
        <Header/>
        <Routes>
          <Route path='/dashboard' element={<Dashboard pointsValue={pointsValue}/>} />
          <Route path='/library' element={<Library library={library} setLibrary={setLibrary}/>} />
          <Route path='/learn' element={
              <>
                  <div className={styles.default.progressBarContainer}>
                    <div className={styles.default.progressBar} style={progressBarWidth}></div>
                  </div>
                  <Learn speak={speak} library={library} wordIndex={wordIndex} setWordIndex={setWordIndex}/>

                  <div onClick={() => {
                    if(wordIndex === library.length - 1) {
                      setWordIndex(0)
                    } else {
                      setWordIndex(wordIndex + 1)
                    }
                  }} className={styles.default.btnNext}> </div>
              </>
            } 
          />
          <Route path='/games' element={<Games/>} />
          <Route path='/game/write-it' element={
              <>
                <div className={styles.default.progressBarContainer}>
                  <div className={styles.default.progressBar} style={progressBarWidth}></div>
                </div>
                <nav className={styles.default.gameNav}>
                  <NavLink to={'/games'} className={styles.default.btnBack}>

                  </NavLink>
                  <ul className={styles.default.results}>
                    <li>Errors: {errorWords}</li>
                    <li>Correct: {correctWords}</li>
                    <li>Points: {pointsValue}</li>
                  </ul>
                </nav>
                <section className={styles.default.gameContainer}>
                  <WriteIt 
                  wordIndex={wordIndex} 
                  setWordIndex={setWordIndex}
                  speak={speak}
                  />
                </section>
              </>
            } />
            <Route path='/game/check-it' element={
              <>
                <div className={styles.default.progressBarContainer}>
                  <div className={styles.default.progressBar} style={progressBarWidth}></div>
                </div>
                <nav className={styles.default.gameNav}>
                  <NavLink to={'/games'} className={styles.default.btnBack}>

                  </NavLink>
                  <ul className={styles.default.results}>
                    <li>Errors: {errorWords}</li>
                    <li>Correct: {correctWords}</li>
                    <li>Points: {pointsValue}</li>
                  </ul>
                </nav>
                <section className={styles.default.gameContainer}>
                  <CheckIt 
                  wordIndex={wordIndex} 
                  setWordIndex={setWordIndex}
                  speak={speak}
                  />
                </section>
              </>
            } />
        </Routes>
    </Store.Provider>
    </BrowserRouter>
  );
}

export default App;
