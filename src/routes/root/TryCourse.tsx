// import React from "react";
import { Link } from "react-router-dom";

/*
  For now this will take user to course (want to get react router working)
  
*/

function GetFreeLesson() {
  return (
    <section>
      <Link to="/course">Try Course</Link>
    </section>
  );
}

export default GetFreeLesson;
