import dayjs from "dayjs";
import { Header } from "./components/header";
import { Building } from "./components/icons/building";
import { Calendar } from "./components/icons/calendar";
import { Clock } from "./components/icons/clock";
import { Code } from "./components/icons/code";
import { Geo } from "./components/icons/geo";
import { Globe } from "./components/icons/globe";
import { InfoCircle } from "./components/icons/info.circle";
import { Watch } from "./components/icons/watch";
import { Failed } from "./components/shared/failed";
import { Loading } from "./components/shared/loading";
import { StatsModal } from "./components/stats.modal";
import { useWeatherStation } from "./hooks/use.weather.station";

// Weather Conditions
// ---
// temp
// heatIndex
// humidity, dewpt
// windChill
// uv
// windSpeed, windGust, winddir
// pressure
// precipTotal, precipRate

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

export const App = () => {
  const { data: observation, isLoading, error } = useWeatherStation();
  return error ? (
    <Failed />
  ) : isLoading ? (
    <Loading />
  ) : (
    observation && (
      <>
        {observation.observations.map((obs, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center min-h-screen"
          >
            <div className="text-center">
              <Header title={`${obs.imperial.temp}°`} />
              <div className="flex items-center flex-col justify-around space-y-6">
                <div>
                  <div className="flex flex-col w-full border-opacity-50">
                    <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                      <div className="stat">
                        <div className="stat-figure text-info">
                          <StatsModal
                            id="station"
                            icon={<InfoCircle />}
                            title="Station Information"
                            stats={[
                              {
                                figure: <Building />,
                                title: "Neighborhood",
                                desc: obs.neighborhood,
                              },
                              {
                                figure: <Geo />,
                                title: "Coordinates",
                                desc: `${obs.lat}, ${obs.lon}, ${obs.imperial.elev}`,
                              },
                              {
                                figure: <Code />,
                                title: "Software",
                                desc: obs.softwareType,
                              },
                            ]}
                          />
                        </div>
                        <div className="stat-title">Station</div>
                        <div className="stat-title">Information</div>
                      </div>
                    </div>
                    <div className="divider lg:divider-horizontal divider-info"></div>
                    <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center px-6">
                      <div className="stat">
                        <div className="stat-figure text-info">
                          <StatsModal
                            id="time"
                            icon={<Clock />}
                            title="Observation Time"
                            stats={[
                              {
                                figure: <Globe />,
                                title: "UTC",
                                desc: dayjs(obs.obsTimeUtc).format(
                                  "MMMM D, YYYY h:mm A"
                                ),
                              },
                              {
                                figure: <Watch />,
                                title: "Local",
                                desc: dayjs(obs.obsTimeLocal).format(
                                  "MMMM D, YYYY h:mm A"
                                ),
                              },
                              {
                                figure: <Calendar />,
                                title: "Epoch",
                                desc: dayjs
                                  .unix(obs.epoch)
                                  .format("MMMM D, YYYY h:mm A"),
                              },
                            ]}
                          />
                        </div>
                        <div className="stat-title">Observation</div>
                        <div className="stat-title">Time</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    )
  );
};
