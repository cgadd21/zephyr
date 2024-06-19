import { Water } from "./icons/water";
import { Stats } from "./shared/stats";

type HumidityProps = {
  humidity: number;
  imperial: { dewpt: number };
};

export const Humidity = ({ humidity, imperial: { dewpt } }: HumidityProps) => {
  return (
    <Stats
      stats={[
        {
          figure: <Water />,
          title: "HUMIDITY",
          value: `${humidity}%`,
          desc: `Dew point is ${dewpt}°.`,
        },
      ]}
    />
  );
};
