import React from 'react'
import { Route, Redirect } from "react-router-dom";

const AdminRoute = ({ children, isAdmin, ...rest }) => (
    <Route
        {...rest}
        render={() => isAdmin ? children : <Redirect to="/login" />}
    />
)

export default AdminRoute