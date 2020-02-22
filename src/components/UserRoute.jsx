import React from 'react'
import { Route, Redirect } from "react-router-dom";

const UserRoute = ({ children, isAuthenticated, ...rest }) => (
    <Route
        {...rest}
        render={() => isAuthenticated ? children : <Redirect to="/login" />}
    />
)

export default UserRoute