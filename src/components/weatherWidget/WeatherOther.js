import React from 'react';
import { connect } from 'react-redux';
import moment from "moment";

import {calculateKelvinInCelsius} from "./helpers";



class WeatherOther extends React.Component {

    render() {
        const { weather } = this.props;
        let list = weather.list;

        let filteredArr = list.filter((day, i) => i % 8 === 0);

        return (
        <div>
            {filteredArr.map( (day,i) => {
                const iconSrc =`http://openweathermap.org/img/w/${day.weather[0].icon}.png`;
                return (
                    <div key={i} className="fc">
                        <div className="fcTime">{moment(day.dt * 1000).format('DD.MM.YYYY в HH:mm')}</div>
                        <div>
                            <img src={iconSrc} className="fcIcon" alt="" />
                        </div>
                        <div className="fcTemp">{calculateKelvinInCelsius(day.main.temp)} °C</div>
                    </div>
                )
            })}
        </div>
    )

    }
}

const mapStateToProps = (state) => {
    return {
        weather: state.weather.weather
    }
};
export default connect(mapStateToProps)(WeatherOther);