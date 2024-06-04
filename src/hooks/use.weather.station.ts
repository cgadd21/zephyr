import useSWR from "swr";

type Observations = {
  observations: {
    stationID: string;
    obsTimeUtc: string;
    obsTimeLocal: string;
    neighborhood: string;
    softwareType: string;
    country: string;
    solarRadiation: null | number;
    lon: number;
    realtimeFrequency: null | number;
    epoch: number;
    lat: number;
    uv: number;
    winddir: number;
    humidity: number;
    qcStatus: number;
    imperial: {
      temp: number;
      heatIndex: number;
      dewpt: number;
      windChill: number;
      windSpeed: number;
      windGust: number;
      pressure: number;
      precipRate: number;
      precipTotal: number;
      elev: number;
    };
  }[];
};

export const useWeatherStation = () => {
  const { data, isLoading, error } = useSWR<Observations>(
    import.meta.env.VITE_WEATHER_API_URL
  );

  return {
    data,
    isLoading,
    error,
  };
};
