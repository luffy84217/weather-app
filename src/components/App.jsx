import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import AdminRoute from './AdminRouter'
import UserRoute from './UserRoute'
import Navbar from './Navbar'
import LoginForm from './LoginForm'
import Forecast from './Forecast'
import Profile from './Profile'
import Dashboard from './Dashboard'
import Public from './Public'

const App = (props) => {
    return (
        <div>
            <Navbar
                history={props.history}
                profile={props.profile}
                isAuthenticated={props.isAuthenticated}
                signOut={props.handleSignOutClick}
            />
            <Switch>
                <AdminRoute isAdmin={props.profile.isAdmin} path="/dashboard">
                    <Dashboard
                        citys={props.citys}
                        addCity={props.handleAddCityClick}
                        removeCity={props.handleRemoveCityClick}
                    />
                </AdminRoute>
                <UserRoute isAuthenticated={props.isAuthenticated} path="/forecast">
                    <Forecast
                        location={props.profile.location}
                        getWeather={props.handleGetWeather}
                        forecast={props.forecast}
                    />
                </UserRoute>
                <UserRoute isAuthenticated={props.isAuthenticated} path="/profile">
                    <Profile
                        citys={props.citys}
                        updateLocation={props.handleUpdateLocationClick}
                    />
                </UserRoute>
                <Route path="/login">
                    {props.isAuthenticated ?
                        <Redirect to="/" /> :
                        <LoginForm history={props.history} signIn={props.handleSignInClick} />}
                </Route>
                <Route path="/" component={Public} />
            </Switch>
        </div>
    )
}

export default App