import { Droplet } from "./icons/droplet";
import { Stats } from "./shared/stats";

type PrecipitationProps = {
  imperial: {
    precipRate: number;
    precipTotal: number;
  };
};

export const Precipitation = ({
  imperial: { precipRate, precipTotal },
}: PrecipitationProps) => {
  return (
    <Stats
      stats={[
        {
          figure: <Droplet />,
          title: "PRECIPITATION",
          value: `${precipTotal}″`,
          desc: `${precipRate}″ per hour.`,
        },
      ]}
    />
  );
};
