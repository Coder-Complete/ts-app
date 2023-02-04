import { useState } from "react";

/*
  1. get their email / phone?
  2. add their email to my mailchimp list
  3. see if they've already done a free call
  4. if so, display that they already did it and therefore they can't do another
  5. if not, show calendar
  6. after booking, store in db that they booked a free call
  7. tell the user that they should get an email with a cancel and reschedule link
*/

interface Props {
  setLessonPage: React.Dispatch<React.SetStateAction<number>>;
}

// calendar
function LessonPageThree({ setLessonPage }: Props) {
  return <button>Page Three</button>;
}

// enter email
function LessonPageTwo({ setLessonPage }: Props) {
  return (
    <>
      <label>Email</label>
      <input type="email"></input>
      <button onClick={() => setLessonPage(2)}>Next</button>
    </>
  );
}

// info about booking free call
function LessonPageOne({ setLessonPage }: Props) {
  return <button onClick={() => setLessonPage(1)}>Get a free lesson</button>;
}

function renderLessonPage(
  num: Number,
  setLessonPage: React.Dispatch<React.SetStateAction<number>>
) {
  switch (num) {
    case 0:
      return <LessonPageOne setLessonPage={setLessonPage}></LessonPageOne>;
    case 1:
      return <LessonPageTwo setLessonPage={setLessonPage}></LessonPageTwo>;
    case 2:
      return <LessonPageThree setLessonPage={setLessonPage}></LessonPageThree>;
    default:
      return <LessonPageOne setLessonPage={setLessonPage}></LessonPageOne>;
  }
}

function GetFreeLesson() {
  const [lessonPage, setLessonPage] = useState(0);
  return (
    <section>
      <h1>Try a free call with us</h1>
      {renderLessonPage(lessonPage, setLessonPage)}
    </section>
  );
}

// function GetFreeLesson() {
//   return (
//     <section>
//       <h1>Try a free call with us</h1>
//       <button>Get a free lesson</button>
//     </section>
//   );
// }

export default GetFreeLesson;
