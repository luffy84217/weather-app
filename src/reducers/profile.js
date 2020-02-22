import ACTION_TYPE from '../constants/actionType'
import { query } from '../utils'

const profile = (state = {}, action) => {
    switch (action.type) {
        case ACTION_TYPE.PROFILE.LOAD_PROFILE:
            const users = query('users')
            const found = users.find(user =>
                user.username === action.username && user.password === action.password
            )

            return found ? found : {}
        case ACTION_TYPE.PROFILE.UNLOAD_PROFILE:
            return {}
        case ACTION_TYPE.PROFILE.UPDATE_LOCATION:
            query('users', query('users').map(user => {
                if (user.username === state.username) {
                    return {...state, location: action.cityname}
                } else {
                    return user
                }
            }))
            return {...state, location: action.cityname}
        default:
            return state
    }
}

export default profile