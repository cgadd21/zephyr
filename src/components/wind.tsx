import { Stats } from "./shared/stats";
import { Wind as WindIcon } from "./icons/wind";

type WindProps = {
  winddir: number;
  imperial: {
    windSpeed: number;
    windGust: number;
    windChill: number;
  };
};

const calculateWindDirection = (degree: number) => {
  const directions = [
    "North",
    "North-Northeast",
    "Northeast",
    "East-Northeast",
    "East",
    "East-Southeast",
    "Southeast",
    "South-Southeast",
    "South",
    "South-Southwest",
    "Southwest",
    "West-Southwest",
    "West",
    "West-Northwest",
    "Northwest",
    "North-Northwest",
  ];
  return directions[Math.round(degree / 22.5) % 16];
};

export const Wind = ({
  winddir,
  imperial: { windSpeed, windGust, windChill },
}: WindProps) => {
  return (
    <Stats
      stats={[
        {
          figure: <WindIcon />,
          title: "Wind",
          value: `${windSpeed} mph`,
          desc: `${windChill}°, gusts up to ${windGust} mph from ${calculateWindDirection(winddir)}.`,
        },
      ]}
    />
  );
};
