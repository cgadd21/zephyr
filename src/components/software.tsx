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
          title: "SOFTWARE",
          value: softwareType,
          desc: "The software used to collect this data.",
        },
      ]}
    />
  );
};
