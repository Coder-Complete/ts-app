import AddVidToS3 from "./AddVidToS3";
import Contact from "./Contact";
import GetFreeLesson from "./GetFreeLesson";
// import GetStartedCourse from "./GetStartedCourse";
// import GetStartedFull from "./GetStartedFull";
import Header from "./Header";
// import React from "react";
import TryCourse from "./TryCourse";

export default function App() {
  return (
    <>
      <Header></Header>
      <GetFreeLesson></GetFreeLesson>
      <TryCourse></TryCourse>
      <AddVidToS3></AddVidToS3>
      {/* <GetStartedCourse></GetStartedCourse>
      <GetStartedFull></GetStartedFull> */}
      <Contact></Contact>
    </>
  );
}
