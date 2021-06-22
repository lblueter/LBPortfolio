import React from "react";
import { FaHtml5, FaNodeJs } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

import { FaNpm } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

function Skills() {
    return (
        <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
            <div class="my-auto">
                <h2 class="mb-5">Skills</h2>

                <div class="subheading mb-3">Programming Languages &amp; Tools</div>
                <ul class="list-inline dev-icons">
                    <li class="list-inline-item">
                        <i class="fab fa-html5"></i>
                        <FaHtml5 />
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-css3-alt"></i>
                        <FaCss3 />
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-js-square"></i>
                        <FaJsSquare />
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-angular"></i>
                        <FaAngular />
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-react"></i>
                        <FaReact />
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-node-js"></i>
                        <FaNodeJs />
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-npm"></i>
                        <FaNpm />
                    </li>
                </ul>

                <div class="subheading mb-3">Workflow</div>
                <ul class="fa-ul mb-0">
                    <li>
                        <FaCheck />
            Mobile-First, Responsive Design</li>
                    <li>
                        <FaCheck />
            Cross Browser Testing &amp; Debugging</li>
                    <li>
                        <FaCheck />
            Cross Functional Teams</li>
                    <li>
                        <FaCheck />
            Agile Development &amp; Scrum
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Skills;
