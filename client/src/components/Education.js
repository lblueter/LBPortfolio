import React from "react";

function Education() {
  return (
    <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
    <div class="my-auto">
      <h2 class="mb-5">Education</h2>

      <div class="resume-item d-flex flex-column flex-md-row mb-5">
        <div class="resume-content mr-auto">
          <h3 class="mb-0">Case Western Reserve University</h3>
          <div class="subheading mb-3">Coding Bootcamp</div>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">July 2018 - January 2019</span>
        </div>
      </div>

      <div class="resume-item d-flex flex-column flex-md-row">
        <div class="resume-content mr-auto">
          <h3 class="mb-0">Highland High School</h3>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">August 2009 - May 2013</span>
        </div>
      </div>

    </div>
  </section>
  );
}

export default Education;