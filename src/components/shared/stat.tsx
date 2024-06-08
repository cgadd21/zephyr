type StatProps = {
  figure: JSX.Element;
  title: string;
  value: string;
  desc: string;
};

export const Stat = (props: StatProps) => {
  return (
    <div className="stat">
      <div className="stat-figure text-primary">{props.figure}</div>
      <div className="stat-title">{props.title}</div>
      <div className="stat-value text-primary">{props.value}</div>
      <div className="stat-desc">{props.desc}</div>
    </div>
  );
};
