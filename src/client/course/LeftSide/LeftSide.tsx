import Progress from "./Progress";
import Section from "./Section";

function LeftSide() {
  return (
    <div className="left-side">
      <Progress></Progress>
      <Section title={"Setup"} chapters={[]}></Section>
      <Section title={"Internet"} chapters={[]}></Section>
      <Section title={"HTML"} chapters={[]}></Section>
      <Section title={"CSS"} chapters={[]}></Section>
    </div>
  );
}

export default LeftSide;
