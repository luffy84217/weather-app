import React from 'react'
import { $ } from '../utils'

const LoginForm = (props) => {
    return (
        <div className="container text-center">
            <img className="mb-4" src="/docs/4.4/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label htmlFor="inputUsername" className="sr-only">Username</label>
            <input type="text" id="inputUsername" className="form-control" placeholder="Username" required="" autoFocus="" />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
            <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                </label>
            </div>
            <button
                className="btn btn-lg btn-primary btn-block"
                onClick={() => props.signIn(
                    $('#inputUsername').value,
                    $('#inputPassword').value,
                    props.history.push,
                    '/'
                )}
            >
                Sign in
            </button>
        </div>
    )
}

export default LoginForm