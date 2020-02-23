import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({
    history,
    profile,
    isAuthenticated,
    signOut
}) => {
    const signBtn = isAuthenticated ?
        <Link to="/" className="btn btn-outline-primary" onClick={() => signOut(history.push, '/')}>Sign out</Link> :
        <Link to="/login" className="btn btn-outline-primary">Sign in</Link>
    
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 className="my-0 mr-md-auto font-weight-normal">
                <Link to="/">Weather App</Link>
            </h5>
            <nav className="my-2 my-md-0 mr-md-3">
                {isAuthenticated ? <Link to="/forecast" className="p-2 text-dark">Forecast</Link> : null}
                {profile.isAdmin ? <Link to="/dashboard" className="p-2 text-dark">Dashboard</Link> : null}
                {isAuthenticated ? <Link to="/profile" className="p-2 text-dark">Profile</Link> : null}
            </nav>
            {signBtn}
        </div>
    )
}

export default Navbar