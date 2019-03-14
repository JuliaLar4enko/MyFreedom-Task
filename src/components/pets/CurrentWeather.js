import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchWeather } from '../../redux/actions/index';


class CurrentWeather extends Component {

    componentDidMount() {
        this.props.fetchWeather();
    }

    render() {

        const { weather } = this.props;

        return (
            <div className="currency currentWeather">
                {Math.round(weather.temp - 273.15)} °C
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        weather: state.pets.weather
    }
};

export default connect(mapStateToProps, { fetchWeather })(CurrentWeather);