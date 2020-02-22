import React from 'react'
import day from '../constants/day'
import { Redirect } from 'react-router-dom'

class Forecast extends React.Component {
    componentDidMount() {
        this.props.getWeather(this.props.location)
    }
    render() {
        let list = this.props.forecast.length === 0 ?
            <Redirect to="/profile" />:
            this.props.forecast.map((item, i) =>
                <li key={i} className="list-group-item">
                    <div>{day[new Date(item.dt_txt).getDay()]}</div>
                    <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt={item.weather[0].description} />
                    <div>{item.main.temp_max}</div>
                    <div>{item.main.temp_min}</div>
                </li>
            )
    
        return (
            <div className="container">
                <ul className="text-center list-group list-group-horizontal">
                    {list}
                </ul>
            </div>
        )
    }
    
}

export default Forecast