import { Header } from "./components/shared/header";
import { Failed } from "./components/shared/failed";
import { Loading } from "./components/shared/loading";
import { useWeatherStation } from "./hooks/use.weather.station";
import { StationInformation } from "./components/station.information";
import { ObservationTime } from "./components/observation.time";
import { FeelsLike } from "./components/feels.like";
import { Humidity } from "./components/humidity";
import { Precipitation } from "./components/precipitation";
import { UVIndex } from "./components/uv.index";
import { Pressure } from "./components/pressure";
import { Wind } from "./components/wind";

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
            className="glass flex min-h-screen items-center justify-center py-6"
          >
            <div>
              <Header title={`${obs.neighborhood}`} />
              <Header title={`${obs.imperial.temp}°`} />
              <div className="flex flex-col items-center justify-around space-y-6">
                <FeelsLike {...obs} />
                <Precipitation {...obs} />
                <Wind {...obs} />
                <Humidity {...obs} />
                <UVIndex {...obs} />
                <Pressure {...obs} />
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
