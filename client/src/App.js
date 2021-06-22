import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Experience from "./components/Experience"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Interests from "./components/Interests"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <div className="container">
      <Navbar />

      <div class="container-fluid p-0">

        <Jumbotron />

        <hr class="m-0" />

          <Experience />

          <hr class="m-0" />

          <Education />

          <hr class="m-0" />

          <Skills />

          <hr class="m-0" />

          <Interests />

        </div>
      </div>
    
  );
}

export default App;
