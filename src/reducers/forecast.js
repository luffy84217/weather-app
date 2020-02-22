import ACTION_TYPE from '../constants/actionType'
import STATUS_CODE from '../constants/statusCode'

const forecast = (state = [], action) => {
    switch (action.type) {
        case ACTION_TYPE.FETCH.WEATHER_RECEIVED:
            if (action.payload.cod === STATUS_CODE.SUCCESS) {
                return action.payload.list
            }
            return state
        default:
            return state
    }
}

export default forecast