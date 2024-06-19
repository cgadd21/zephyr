import { Speedometer } from "./icons/speedometer";
import { Stats } from "./shared/stats";

type PressureProps = {
  imperial: {
    pressure: number;
  };
};

export const Pressure = ({ imperial: { pressure } }: PressureProps) => {
  const desc = pressure >= 30 ? `High` : pressure <= 29.92 ? `Low` : `Normal`;

  return (
    <Stats
      stats={[
        {
          figure: <Speedometer />,
          title: "PRESSURE",
          value: `${pressure} inHg`,
          desc,
        },
      ]}
    />
  );
};
