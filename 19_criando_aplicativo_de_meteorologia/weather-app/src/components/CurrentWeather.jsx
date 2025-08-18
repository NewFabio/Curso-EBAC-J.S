import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
    background-color: ${({theme}) => theme.colors.primary};
    color: white;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
`;

const Temp = styled.h1`
    font-size: 48px;
    margin: 0;
`;

const Location = styled.h2`
    font-size: 24px;
    margin: 10px 0;
`;

const CurrentWeather = ({location, temperature}) => (
    <Container>
        <Location>{location}</Location>
        <Temp>{temperature}°C</Temp>
    </Container>
);

export default CurrentWeather;