// import React, { useState } from "react";

/*
  1. get their email / phone?
  2. add their email to my mailchimp list
  3. see if they've already done a free call
  4. if so, display that they already did it and therefore they can't do another
  5. if not, show calendar
  6. after booking, store in db that they booked a free call
  7. tell the user that they should get an email with a cancel and reschedule link
*/

// function LessonPageOne(setLessonPage) {
//   return <button onClick={setLessonPage(1)}>Get a free lesson</button>;
// }

// function renderLessonPage(num, setLessonPage) {
//   switch (num) {
//     case 0:
//       return <LessonPageOne setLessonPage={setLessonPage}></LessonPageOne>;
//     case 1:
//       return <LessonPageTwo></LessonPageTwo>;
//     case 2:
//       return <LessonPageThree></LessonPageThree>;
//     default:
//       return <LessonPageOne></LessonPageOne>;
//   }
// }

// function GetFreeLesson() {
//   const [lessonPage, setLessonPage] = useState(0);
//   return (
//     <section>
//       <h1>Try a free call with us</h1>
//       {renderLessonPage(lessonPage, setLessonPage)}
//     </section>
//   );
// }

function GetFreeLesson() {
  return (
    <section>
      <h1>Try a free call with us</h1>
      <button>Get a free lesson</button>
    </section>
  );
}

export default GetFreeLesson;