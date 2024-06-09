import { Code } from "./icons/code";
import { Stats } from "./shared/stats";

type SoftwareProps = { softwareType: string };

export const Software = (props: SoftwareProps) => {
  const { softwareType } = props;

  return (
    <Stats
      stats={[
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
