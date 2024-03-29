import React from "react";
import { HashLoader } from "react-spinners";
import '../sass/intropage.scss';
export default function IntroPage({toggleGame, data}) {
    return(
        <div className="intro-page">
            <h1>Quizzical</h1>
            <p>A generic trivia game</p>
            <button className={`start-quiz-button ${data.length !== 0 ? "" : "disabled"}`} onClick={toggleGame} disabled={!data.length}>
                {
                    data.length ? "Start Quiz" : <HashLoader size={40} color="#bbc3ee" />
                }
            </button>
        </div>
    )
}