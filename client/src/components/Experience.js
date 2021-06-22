import React from "react";

function Experience() {
  return (
    
  <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
  <div class="my-auto">
    <h2 class="mb-5">Experience</h2>

    <div class="resume-item d-flex flex-column flex-md-row mb-5">
      <div class="resume-content mr-auto proImg">
        <a href="https://lblueter.github.io/Undead-Hangman/" target="_blank" rel="noreferrer">
          <img class="img-fluid" src="img/undeadbackground.jpg" alt="Word Guess"/>

          <h3 class="proTag">Word Guess</h3>
        </a>
      </div>
      <div class="resume-content mr-auto text-center proImg">
        <a href="https://lblueter.github.io/BetrayTheParty/" target="_blank" rel="noreferrer">
          <img class="img-fluid" src="img/knight.jpg" alt="RPG Game" />

          <h3 class="proTag">RPG Game</h3>
        </a>
      </div>
      <div class="resume-content mr-auto text-md-right proImg">
        <a href="https://lblueter.github.io/DnDTrivia/" target="_blank" rel="noreferrer">
          <img class="img-fluid" src="img/dnd.jpg" alt="Trivia Game" />

          <h3 class="proTag">Trivia Game</h3>
        </a>
      </div>
    </div>
    <div class="resume-item d-flex flex-column flex-md-row mb-5">
      <div class="resume-content mr-auto proImg">
        <a href="https://lblueter.github.io/Creamy-GIFtastic/" target="_blank" rel="noreferrer">
          <img class="img-fluid" src="img/toast.jpg" alt="Gif Page" />

          <h3 class="proTag">Creamy Gifs</h3>
        </a>
      </div>
      <div class="resume-content mr-auto text-center proImg">
        <a href="https://github.com/lblueter/liri-node-app" target="_blank" rel="noreferrer">
          <img class="img-fluid" src="img/cmd.png" alt="LIRI" />

          <h3 class="proTag">LIRI</h3>
        </a>
      </div>
      <div class="resume-content mr-auto text-md-right proImg">
        <a href="https://hackathon-ideas.herokuapp.com/" target="_blank" rel="noreferrer">
          <img class="img-fluid" src="img/header-hackathons-logo.png" alt="Word Guess" />
          <h3 class="proTag">Hackathon Ideas</h3>
        </a>
      </div>
      
    </div>
    <div class="resume-item d-flex flex-column flex-md-row mb-5">
      {/* <div class="resume-content mr-auto proImg">
        <a href="https://fathomless-shore-42612.herokuapp.com/" target="_blank" rel="noreferrer">
          <img class="img-fluid" src="img/Burgz_5.png" alt="Burger Eater" />

          <h3 class="proTag">Eat Burgz</h3>
        </a>
      </div> */}
      {/* <div class="resume-content mr-auto text-center proImg">
        <a href="https://lblueter.github.io/Art-Page/" target="_blank" rel="noreferrer">
          <img class="img-fluid" src="img/cape.png" alt="Art Page" />

          <h3 class="proTag">Art Page</h3>
        </a>
      </div> */}
      {/* <div class="resume-content mr-auto text-md-right proImg">
        <a href="https://polar-temple-81546.herokuapp.com/" target="_blank" rel="noreferrer">
          <img class="img-fluid" src="img/friends.jpg" alt="Friend Finder" />

          <h3 class="proTag">Friend Finder</h3>
        </a>
      </div> */}
    </div>
    </div>
    </section>
  );
}

export default Experience;