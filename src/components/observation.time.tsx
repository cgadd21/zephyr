import dayjs from "dayjs";
import { Calendar } from "./icons/calendar";
import { Globe } from "./icons/globe";
import { Watch } from "./icons/watch";
import { Header } from "./shared/header";
import { Stats } from "./shared/stats";

type ObservationTimeProps = {
  obsTimeUtc: string;
  obsTimeLocal: string;
  epoch: number;
};

export const ObservationTime = (props: ObservationTimeProps) => {
  return (
    <>
      <Header title="Observation Time" />
      <Stats
        stats={[
          {
            figure: <Globe />,
            title: "UTC",
            value: dayjs(props.obsTimeUtc).format("MMMM D, YYYY h:mm A"),
            desc: "",
          },
          {
            figure: <Watch />,
            title: "Local",
            value: dayjs(props.obsTimeLocal).format("MMMM D, YYYY h:mm A"),
            desc: "",
          },
          {
            figure: <Calendar />,
            title: "Epoch",
            value: dayjs.unix(props.epoch).format("MMMM D, YYYY h:mm A"),
            desc: "",
          },
        ]}
      />
    </>
  );
};
