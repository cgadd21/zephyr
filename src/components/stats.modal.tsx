type StatsModalProps = {
  id: string;
  icon: JSX.Element;
  title: string;
  stats: {
    figure: JSX.Element;
    title: string;
    desc: string;
  }[];
};

export const StatsModal = (props: StatsModalProps) => {
  return (
    <div>
      <button
        onClick={() =>
          (
            document.getElementById(`${props.id}`) as HTMLDialogElement
          ).showModal()
        }
      >
        {props.icon}
      </button>
      <dialog id={`${props.id}`} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-xl py-2">{props.title}</h3>
          <div className="stats stats-vertical shadow space-y-4">
            {props.stats.map((stat, idx) => (
              <div key={idx} className="stat">
                <div className="stat-figure text-secondary">{stat.figure}</div>
                <div className="stat-title">{stat.title}</div>
                <div className="stat-desc text-xl text-primary">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
