import { Building } from "./icons/building";
import { Code } from "./icons/code";
import { Geo } from "./icons/geo";
import { Stats } from "./shared/stats";

type StationInformationProps = {
  neighborhood: string;
  lat: number;
  lon: number;
  imperial: {
    elev: number;
  };
  softwareType: string;
};

export const StationInformation = (props: StationInformationProps) => {
  const { neighborhood, lat, lon, softwareType } = props;
  const { elev } = props.imperial;

  return (
    <Stats
      stats={[
        {
          figure: <Building />,
          title: "Neighborhood",
          value: neighborhood,
          desc: "Location of the weather station.",
        },
        {
          figure: <Geo />,
          title: "Coordinates",
          value: `${lat}, ${lon}, ${elev}`,
          desc: "Coordinates of the weather station.",
        },
        {
          figure: <Code />,
          title: "Software",
          value: softwareType,
          desc: "Software used to collect weather data.",
        },
      ]}
    />
  );
};
