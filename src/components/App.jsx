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

const App = ({
    history,
    citys,
    profile,
    isAuthenticated,
    forecast,
    handleSignInClick,
    handleSignOutClick,
    handleAddCityClick,
    handleRemoveCityClick,
    handleUpdateLocationClick,
    handleGetWeather
}) => {
    return (
        <div>
            <Navbar
                history={history}
                profile={profile}
                isAuthenticated={isAuthenticated}
                signOut={handleSignOutClick}
            />
            <Switch>
                <AdminRoute isAdmin={profile.isAdmin} path="/dashboard">
                    <Dashboard
                        citys={citys}
                        addCity={handleAddCityClick}
                        removeCity={handleRemoveCityClick}
                    />
                </AdminRoute>
                <UserRoute isAuthenticated={isAuthenticated} path="/forecast">
                    <Forecast
                        location={profile.location}
                        getWeather={handleGetWeather}
                        forecast={forecast}
                    />
                </UserRoute>
                <UserRoute isAuthenticated={isAuthenticated} path="/profile">
                    <Profile
                        citys={citys}
                        updateLocation={handleUpdateLocationClick}
                    />
                </UserRoute>
                <Route path="/login">
                    {isAuthenticated ?
                        <Redirect to="/" /> :
                        <LoginForm history={history} signIn={handleSignInClick} />}
                </Route>
                <Route path="/" component={Public} />
            </Switch>
        </div>
    )
}

export default App