import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';
import CurrentWeather from './components/CurrentWeather';
import WeatherForecast from './components/WeatherForecast';

const App = () => {
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(true);

  //definição da key da API
  const API_KEY = "48746de315bfac0f4ad9e9f189f7dd3d";
  const city = 'Brasília';

  useEffect(() => {
    const fetchWatherData = async () => {
      try{
        const currentWeatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        const currentWeatherJson = await currentWeatherResponse.json();
        setCurrentWeatherData({
          location: currentWeatherJson.name,
          temperature: currentWeatherJson.main.temp,
        });
        //Previsão do tempo
        const forecastResponse = await fetch(
          `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
        );
        const forecastJson = await forecastResponse.json();

        //Filtros
        const dailyForecast = forecastJson.list
          .filter((reading) => reading.dt_txt.includes("12:00:00"))
          .slice(0,5)
          .map((forecast) => ({
            date: forecast.dt_txt.split(' ')[0],
            minTemp: forecast.main.temp_min,
            maxTemp: forecast.main.temp_max,
          }));
        setForecastData(dailyForecast);
      } catch(error) {
        console.log("Erro ao buscar informações: " ,error);
      } finally {
        setLoading(false);
      }
    };
    fetchWatherData();
  }, []);

  if(loading) {
    return <div>Carregando dados...</div>;
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <div style={{padding: '20px', maxWidth: '800px', margin: '0 auto'}}>
        {currentWeatherData && (
          <CurrentWeather location={currentWeatherData.location} temperature={currentWeatherData.temperature} />
        )}
        {forecastData.length > 0 && <WeatherForecast forecast={forecastData} />}
      </div>
    </ThemeProvider>
  );
};

export default App;