const weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=961cba79b1b847bc2d80f76a21e7f91f';


export const fetchFiveDays = () => {
    return (dispatch) => {
        fetch(weatherUrl)
            .then(response => response.json())
            .then(res => {
                dispatch(fetchFiveDaysWeather(res));
            })
            .catch(error => {
                console.log('Request failed', error);
            });
    }
};


const fetchFiveDaysWeather = weather => ({type: "FETCH_FIVE_DAYS_WEATHER", payload: weather});
