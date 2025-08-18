import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';
import CurrentWeather from './components/CurrentWeather';
import WeatherForecast from './components/WeatherForecast';

const currentWeatherData = {
  location: 'São Paulo',
  temperature: 13,
};

const forecastData = [
  {date: '01/09', minTemp: 18, maxTemp: 28},
  {date: '02/09', minTemp: 19, maxTemp: 24},
  {date: '03/09', minTemp: 20, maxTemp: 26},
  {date: '04/09', minTemp: 21, maxTemp: 28},
  {date: '05/09', minTemp: 22, maxTemp: 23},
  {date: '06/09', minTemp: 23, maxTemp: 22},
  {date: '07/09', minTemp: 24, maxTemp: 21},
  {date: '08/09', minTemp: 25, maxTemp: 29},
  {date: '09/09', minTemp: 26, maxTemp: 31},
  {date: '10/09', minTemp: 27, maxTemp: 35},
];

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <div style={{padding: '20px', maxWidth: '800px', margin: '0 auto'}}>
      <CurrentWeather location={currentWeatherData.location} temperature={currentWeatherData.temperature} />
      <WeatherForecast forecast={forecastData} />
    </div>
  </ThemeProvider>
);

export default App;