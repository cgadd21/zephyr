import { Sun } from "./icons/sun";
import { Stats } from "./shared/stats";

type UVIndexProps = {
  uv: number;
};

export const UVIndex = ({ uv }: UVIndexProps) => {
  const desc =
    uv <= 2
      ? `Low`
      : uv <= 5
        ? `Moderate`
        : uv <= 7
          ? `High`
          : uv <= 10
            ? `Very High`
            : `Extreme`;

  return (
    <Stats
      stats={[
        {
          figure: <Sun />,
          title: "UV INDEX",
          value: `${uv}`,
          desc,
        },
      ]}
    />
  );
};
