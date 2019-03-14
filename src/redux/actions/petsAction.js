const exchangeRateUrl = 'http://www.nbrb.by/API/ExRates/Rates/145';

export const fetchExchange = () => {
    return (dispatch) => {
        fetch(exchangeRateUrl)
            .then(response => response.json())
            .then(res => {
                dispatch(fetchExchangeRate(res));
            })
            .catch(error => {
                console.log('Request failed', error);
            });
    }
};


const weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=961cba79b1b847bc2d80f76a21e7f91f';

export const fetchWeather = () => {
    return (dispatch) => {
        fetch(weatherUrl)
            .then(response => response.json())
            .then(response => {
                let res = response.list[0].main;
                dispatch(fetchCurrentWeather(res));
            })
            .catch(error => {
                console.log('Request failed', error);
            });
    }
};


const fetchExchangeRate = currency => ({type: "FETCH_EXCHANGE_RATE", payload: currency});
const fetchCurrentWeather = weather => ({type: "FETCH_CURRENT_WEATHER", payload: weather});