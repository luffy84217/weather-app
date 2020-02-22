import React from 'react'
import locationSVG from '../assets/location.svg'
import { $ } from '../utils'

const Profile = props => {
    let options = props.citys.map((city, i) => <option key={i} value={city}>{city}</option>)

    return (
        <div className="container text-center">
            <img src={locationSVG} className="img-fluid" height="240px" width="240px" alt="location" />
            <div>
                <div className="form-group">
                    <label htmlFor="locationInput">Your Location</label>
                    <select id="locationInput" className="form-control">
                        {options}
                    </select>
                </div>
                <button
                    onClick={() => props.updateLocation($('#locationInput').options[$('#locationInput').selectedIndex].value)}
                    className="btn btn-primary"
                >
                    Update
                </button>
            </div>
            <div>
                Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            </div>
        </div>
    )
}

export default Profile