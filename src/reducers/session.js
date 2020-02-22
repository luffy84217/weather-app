import ACTION_TYPE from '../constants/actionType'
import { query } from '../utils'

const session = (state = false, action) => {
    switch (action.type) {
        case ACTION_TYPE.SESSION.SIGN_IN:
            const users = query('users')
            const found = users.find(user =>
                user.username === action.username && user.password === action.password
            )

            if (found) {
                if (found.isAdmin) {
                    action.redirect('/dashboard')
                } else {
                    action.redirect(action.path)
                }
                return true
            } else {
                alert('Incorrect username or password.')
                return false
            }
        case ACTION_TYPE.SESSION.SIGN_OUT:
            action.redirect(action.path)
            return false
        default:
            return state
    }
}

export default session