// precipTotal, precipRate

import { Droplet } from "./icons/droplet";
import { Stats } from "./shared/stats";

type PrecipitationProps = {
  imperial: {
    precipRate: number;
    precipTotal: number;
  };
};

export const Precipitation = (props: PrecipitationProps) => {
  const { precipRate, precipTotal } = props.imperial;

  return (
    <Stats
      stats={[
        {
          figure: <Droplet />,
          title: "Precipitation",
          value: `${precipTotal}″`,
          desc: `${precipRate}″ per hour.`,
        },
      ]}
    />
  );
};
