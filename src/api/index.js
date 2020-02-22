import API_KEY from '../constants/apiKey'

const api = {
    fetchWeather: cityname => {
        return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${API_KEY}&units=imperial`)
            .then(response => {
                return response
                    .json()
                    .then(({cod, list}) => ({cod, list: list.filter((item, idx) => (idx+1)%8 === 0)}));
            }).catch(error => {
                throw error
            })
    },
    queryLocation: cityname => {
        return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${API_KEY}&units=imperial`)
            .then(response => {
                return response
                    .json()
                    .then(({cod}) => cod);
            }).catch(error => {
                throw error
            })
    }
}

export default api