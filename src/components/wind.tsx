// windSpeed, windGust, winddir, windchill
export const Wind = () => {
  const calculateWindDirection = (degree: number) => {
    const directions = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];
    return directions[Math.round(degree / 22.5) % 16];
  };
  return <></>;
};
