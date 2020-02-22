import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import {
    signIn,
    signOut,
    loadProfile,
    unloadProfile,
    validateLocation,
    removeCity,
    updateLocation,
    getWeather
} from '../actions'
import App from '../components/App'

const mapStateToProps = state => ({
    citys: state.citys,
    profile: state.profile,
    isAuthenticated: state.isAuthenticated,
    forecast: state.forecast
})

const mapDispatchToProps = dispatch => ({
    handleSignInClick: (username, password, redirect, path) => {
        dispatch(loadProfile(username, password))
        dispatch(signIn(username, password, redirect, path))
    },
    handleSignOutClick: (redirect, path) => {
        dispatch(signOut(redirect, path))
        dispatch(unloadProfile())
    },
    handleAddCityClick: cityname => dispatch(validateLocation(cityname)),
    handleRemoveCityClick: cityname => dispatch(removeCity(cityname)),
    handleUpdateLocationClick: cityname => dispatch(updateLocation(cityname)),
    handleGetWeather: cityname => dispatch(getWeather(cityname))
})

const AppContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(App))

export default AppContainer