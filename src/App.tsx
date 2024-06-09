import { Header } from "./components/shared/header";
import { Failed } from "./components/shared/failed";
import { Loading } from "./components/shared/loading";
import { useWeatherStation } from "./hooks/use.weather.station";
import { ObservationTime } from "./components/observation.time";
import { FeelsLike } from "./components/feels.like";
import { Humidity } from "./components/humidity";
import { Precipitation } from "./components/precipitation";
import { UVIndex } from "./components/uv.index";
import { Pressure } from "./components/pressure";
import { Wind } from "./components/wind";
import { Software } from "./components/software";

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
            className="flex min-h-screen items-center justify-center py-6"
          >
            <div>
              <div className="flex justify-between px-5">
                <Header title={`${obs.neighborhood}`} />
                <Header title={`${obs.imperial.temp}°`} />
              </div>
              <div className="lg: flex flex-col items-center justify-around lg:grid lg:grid-cols-2">
                <FeelsLike {...obs} />
                <Precipitation {...obs} />
                <Wind {...obs} />
                <Humidity {...obs} />
                <UVIndex {...obs} />
                <Pressure {...obs} />
                <ObservationTime {...obs} />
                <Software {...obs} />
              </div>
            </div>
          </div>
        ))}
      </>
    )
  );
};
