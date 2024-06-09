import { Header } from "./components/shared/header";
import { Failed } from "./components/shared/failed";
import { Loading } from "./components/shared/loading";
import { useWeatherStation } from "./hooks/use.weather.station";
import { StationInformation } from "./components/station.information";
import { ObservationTime } from "./components/observation.time";
import { FeelsLike } from "./components/feels.like";
import { Humidity } from "./components/humidity";

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
            className="glass flex min-h-screen items-center justify-center"
          >
            <div>
              <Header title={`${obs.imperial.temp}°`} />
              <div className="flex flex-col items-center justify-around space-y-6">
                <FeelsLike {...obs} />
                <Humidity {...obs} />
                <StationInformation {...obs} />
                <ObservationTime {...obs} />
              </div>
            </div>
          </div>
        ))}
      </>
    )
  );
};
