import { useWeatherStation } from "./hooks/use.weather.station";
import { Failed } from "./components//failed";
import { Loading } from "./components/loading";

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
          <div key={idx} className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
              <div className="">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pb-6">
                  {obs.neighborhood}
                </h1>
                <div className="flex flex-col space-y-4">
                  <div className="stats stats-vertical lg:stats-horizontal shadow  bg-primary text-primary-content">
                    <div className="stat">
                      <div className="stat-title text-primary-content">
                        Temperature
                      </div>
                      <div className="stat-value">{obs.imperial.temp}°F</div>
                    </div>
                    <div className="stat">
                      <div className="stat-title text-primary-content">
                        Heat Index
                      </div>
                      <div className="stat-value">
                        {obs.imperial.heatIndex}°F
                      </div>
                    </div>
                    <div className="stat">
                      <div className="stat-title text-primary-content">
                        Dew Point
                      </div>
                      <div className="stat-value">{obs.imperial.dewpt}°F</div>
                    </div>
                    <div className="stat">
                      <div className="stat-title text-primary-content">
                        Humidity
                      </div>
                      <div className="stat-value">{obs.humidity}%</div>
                    </div>
                  </div>
                  <div className="stats stats-vertical lg:stats-horizontal shadow  bg-primary text-primary-content">
                    <div className="stat">
                      <div className="stat-title text-primary-content">
                        Ultraviolet
                      </div>
                      <div className="stat-value">{obs.uv}</div>
                    </div>
                    <div className="stat">
                      <div className="stat-title text-primary-content">
                        Pressure
                      </div>
                      <div className="stat-value">
                        {obs.imperial.pressure} in
                      </div>
                    </div>
                    <div className="stat">
                      <div className="stat-title text-primary-content">
                        Precipitation Rate
                      </div>
                      <div className="stat-value">
                        {obs.imperial.precipRate} in
                      </div>
                    </div>
                    <div className="stat">
                      <div className="stat-title text-primary-content">
                        Precipitation Total
                      </div>
                      <div className="stat-value">
                        {obs.imperial.precipTotal} in
                      </div>
                    </div>
                  </div>
                  <div className="stats stats-vertical lg:stats-horizontal shadow  bg-primary text-primary-content">
                    <div className="stat">
                      <div className="stat-title text-primary-content">
                        Wind Direction
                      </div>
                      <div className="stat-value">
                        {calculateWindDirection(obs.winddir)}
                      </div>
                    </div>
                    <div className="stat">
                      <div className="stat-title text-primary-content">
                        Wind Chill
                      </div>
                      <div className="stat-value">
                        {obs.imperial.windChill}°F
                      </div>
                    </div>
                    <div className="stat">
                      <div className="stat-title text-primary-content">
                        Wind Speed
                      </div>
                      <div className="stat-value">
                        {obs.imperial.windSpeed} mph
                      </div>
                    </div>
                    <div className="stat">
                      <div className="stat-title text-primary-content">
                        Wind Guest
                      </div>
                      <div className="stat-value">
                        {obs.imperial.windGust} mph
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
