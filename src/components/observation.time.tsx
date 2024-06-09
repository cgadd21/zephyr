import dayjs from "dayjs";
import { Calendar } from "./icons/calendar";
import { Globe } from "./icons/globe";
import { Watch } from "./icons/watch";
import { Stats } from "./shared/stats";

type ObservationTimeProps = {
  obsTimeUtc: string;
  obsTimeLocal: string;
  epoch: number;
};

export const ObservationTime = (props: ObservationTimeProps) => {
  const { obsTimeUtc, obsTimeLocal, epoch } = props;

  return (
    <Stats
      stats={[
        {
          figure: <Globe />,
          title: "UTC",
          value: dayjs(obsTimeUtc).format("dddd h:mm A"),
          desc: "Last observation time in Coordinated Universal Time.",
        },
        {
          figure: <Watch />,
          title: "Local",
          value: dayjs(obsTimeLocal).format("dddd h:mm A"),
          desc: "Last observation time in local time zone.",
        },
        {
          figure: <Calendar />,
          title: "Epoch",
          value: dayjs.unix(epoch).format("dddd h:mm A"),
          desc: "Last observation time in epoch format.",
        },
      ]}
    />
  );
};
