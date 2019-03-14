import React from 'react';
import moment from 'moment';
import connect from "react-redux/es/connect/connect";

import { getDirectionByDegree, calculateKelvinInCelsius } from './helpers';



class WeatherToday extends React.Component {

    render() {
        const { weather } = this.props;

        const iconSrc = `http://openweathermap.org/img/w/${weather.list[0].weather[0].icon}.png`;


        return (
        <div className="weather">
            <div className="divInfo">
            <div className="city">{weather.city.name}, {weather.city.country}</div>
            <div>{moment(weather.list[0].dt * 1000).format('DD.MM.YYYY в HH:mm')}</div>
            </div>
            <div className="divWeather">
            <img src={iconSrc} className="weatherIcon" alt="" />
            <div>{weather.list[0].weather[0].main}</div>
            <div className="temp">{calculateKelvinInCelsius(weather.list[0].main.temp)} °C</div>
            </div>
            <div className="divWind">
            <div className="wind">{getDirectionByDegree(weather.list[0].main.temp)}</div>
            <div className="wind">{weather.list[0].wind.speed} m/s</div>
            </div>
        </div>
    )
}
}

    const mapStateToProps = (state) => {
    return {
        weather: state.weather.weather
    }
};
    export default connect(mapStateToProps)(WeatherToday);






// let arr = res.list;
// const filteredArr = arr.filter((item, i) => i % 8 === 0);