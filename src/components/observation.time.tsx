import dayjs from "dayjs";
import { Stats } from "./shared/stats";
import { Clock } from "./icons/clock";

type ObservationTimeProps = {
  obsTimeLocal: string;
};

export const ObservationTime = (props: ObservationTimeProps) => {
  const { obsTimeLocal } = props;

  return (
    <Stats
      stats={[
        {
          figure: <Clock />,
          title: "Last Observation",
          value: dayjs(obsTimeLocal).format("dddd h:mm A"),
          desc: "Last observation time in local time.",
        },
      ]}
    />
  );
};
