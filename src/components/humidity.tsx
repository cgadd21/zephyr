import { Water } from "./icons/water";
import { Stats } from "./shared/stats";

type HumidityProps = {
  humidity: number;
  imperial: { dewpt: number };
};

export const Humidity = (props: HumidityProps) => {
  const { humidity } = props;
  const { dewpt } = props.imperial;

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
