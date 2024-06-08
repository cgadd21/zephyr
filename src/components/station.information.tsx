import { Building } from "./icons/building";
import { Code } from "./icons/code";
import { Geo } from "./icons/geo";
import { Header } from "./shared/header";
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
  return (
    <>
      <Header title="Station Information" />
      <Stats
        stats={[
          {
            figure: <Building />,
            title: "Neighborhood",
            value: props.neighborhood,
            desc: "",
          },
          {
            figure: <Geo />,
            title: "Coordinates",
            value: `${props.lat}, ${props.lon}, ${props.imperial.elev}`,
            desc: "",
          },
          {
            figure: <Code />,
            title: "Software",
            value: props.softwareType,
            desc: "",
          },
        ]}
      />
    </>
  );
};
