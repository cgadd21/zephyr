import { ThermometerHalf } from "./icons/thermometer.half";
import { ThermometerHigh } from "./icons/thermometer.high";
import { ThermometerLow } from "./icons/thermometer.low";
import { Stats } from "./shared/stats";

type FeelsLikeProps = {
  imperial: {
    temp: number;
    heatIndex: number;
  };
};

export const FeelsLike = (props: FeelsLikeProps) => {
  const { temp, heatIndex } = props.imperial;

  const figure =
    heatIndex > 80 ? (
      <ThermometerHigh />
    ) : heatIndex > 32 ? (
      <ThermometerHalf />
    ) : (
      <ThermometerLow />
    );

  const desc =
    heatIndex > temp
      ? `Humidity is making it feel warmer.`
      : heatIndex < temp
        ? `Wind is making it feel cooler.`
        : `Similar to the actual temperature.`;

  return (
    <Stats
      stats={[
        {
          figure,
          title: "FEELS LIKE",
          value: `${heatIndex}°F`,
          desc,
        },
      ]}
    />
  );
};
