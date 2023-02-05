interface Props {
  title: String;
  chapters: any;
}

function Progress({ title, chapters }: Props) {
  return <div className="left-side__progress">{title}</div>;
}

export default Progress;
