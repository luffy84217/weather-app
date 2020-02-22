import { combineReducers } from 'redux'
import citys from './citys'
import isAuthenticated from './session'
import profile from './profile'
import forecast from './forecast'

const reducer = combineReducers({
    citys,
    isAuthenticated,
    profile,
    forecast
})

export default reducer