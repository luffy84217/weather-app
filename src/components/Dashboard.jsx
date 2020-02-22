import React from 'react'
import worldSVG from '../assets/world.svg'
import { $ } from '../utils'

const Dashboard = props => {
    let cityList = props.citys.map((city, i) =>
        <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
            {city}
            <span onClick={() => props.removeCity(city)} className="badge badge-danger badge-pill">X</span>
        </li>
    )

    return (
        <div className="container text-center">
            <img src={worldSVG} height="240px" width="240px" alt="world" />
            <form className="form-inline">
                <div className="form-group mx-sm-3 mb-2">
                    <label htmlFor="cityInput" className="sr-only">City: </label>
                    <input type="text" className="form-control" id="cityInput" placeholder="City Name" />
                </div>
            <button onClick={() => props.addCity($('#cityInput').value)} className="btn btn-primary mb-2">Add</button>
            </form>
            <hr />
            <ul className="list-group">
                {cityList}
            </ul>
            Icons made by <a href="https://www.flaticon.com/authors/turkkub" title="turkkub">turkkub</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </div>
    )
}

export default Dashboard