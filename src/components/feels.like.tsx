import { ThermometerHalf } from "./icons/thermometer.half";
import { ThermometerHigh } from "./icons/thermometer.high";
import { ThermometerLow } from "./icons/thermometer.low";
import { Stats } from "./shared/stats";

type FeelsLikeProps = {
  humidity: number;
  imperial: {
    temp: number;
    heatIndex: number;
    windSpeed: number;
  };
};

export const FeelsLike = (props: FeelsLikeProps) => {
  const { humidity } = props;
  const { temp, heatIndex, windSpeed } = props.imperial;

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
      ? `With a wind speed of ${windSpeed} mph and humidity of ${humidity}%, it feels like ${heatIndex}°F.`
      : heatIndex < temp
        ? `Despite a wind speed of ${windSpeed} mph and humidity of ${humidity}%, it feels like ${heatIndex}°F.`
        : `Similar to the actual temperature.`;

  return (
    <>
      <Stats
        stats={[
          {
            figure,
            title: "Feels Like",
            value: `${heatIndex}°F`,
            desc,
          },
        ]}
      />
    </>
  );
};
