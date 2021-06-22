import React from "react";

function Card(props) {
  return (
    <div class="resume-content mr-auto proImg">
      <a href="https://lblueter.github.io/Undead-Hangman/" target="_blank" rel="noreferrer">
        <img class="img-fluid" src="img/undeadbackground.jpg" alt="Word Guess" />

        <h3 class="proTag">Word Guess{props.name}</h3>
      </a>
    </div>
  );
}

export default Card;
