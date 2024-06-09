type StatsProps = {
  stats: { figure: JSX.Element; title: string; value: string; desc: string }[];
};

export const Stats = (props: StatsProps) => {
  return (
    <div className="stats w-full shadow">
      {props.stats.map((stat, idx) => (
        <div key={idx} className="stat">
          <div className="stat-figure text-primary">{stat.figure}</div>
          <div className="stat-title">{stat.title}</div>
          <div className="stat-value text-primary">{stat.value}</div>
          <div className="stat-desc">{stat.desc}</div>
        </div>
      ))}
    </div>
  );
};
