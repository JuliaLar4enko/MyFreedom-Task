import React from 'react';
import { connect } from 'react-redux';

import { fetchFiveDays } from "../../redux/actions/index";
import WeatherToday from "../../components/weatherWidget/WeatherToday";
import WeatherOther from "../../components/weatherWidget/WeatherOther";


class WeatherWidget extends React.Component {

    componentDidMount() {
        this.props.fetchFiveDays();
    }

    render() {
        const { weather } = this.props;

        if (!Object.keys(weather).length) return (<div>Загрузка ...</div>);

        return (
            <div>
                <div className="App">
                    <WeatherToday />
                    <WeatherOther />
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        weather: state.weather.weather
    }
};
export default connect(mapStateToProps, { fetchFiveDays })(WeatherWidget);
