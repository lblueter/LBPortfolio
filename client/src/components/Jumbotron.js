import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Jumbotron() {
  return (
    <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
    <div class="my-auto">
      <h1 class="mb-0">Logan
    <span class="text-primary">Blueter</span>
      </h1>
      <div class="subheading mb-5">(330) 573-8124 ·
    <a href="mailto:logan11023@yahoo.com">logan11023@yahoo.com</a>
      </div>
      <p class="lead mb-5">
        Full Stack Web Developer with experience in web development tech like HTML, CSS, Javascript Bootstrap, JQuery and
        React. I have over two years of experience in web development and it has trained my skills of
        communication, flexibility, and attention to detail. My greatest strength in coding would be my ability to
        quickly and accurately fix errors and to break large projects into smaller more manageable pieces. I am a
        quick learner and passionate to display my coding skills in developing new and interesting websites
  </p>
      <div class="social-icons">
        <a href="https://www.linkedin.com/in/logan-blueter-68b1b6153/" target="_blank" rel="noreferrer">
          
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/lblueter" target="_blank">
          
          <FaGithub />
        </a>
      </div>
    </div>
  </section>
  );
}

export default Jumbotron;
