import ACTION_TYPE from '../constants/actionType'
import STATUS_CODE from '../constants/statusCode'

const citys = (state = [], action) => {
    switch (action.type) {
        case ACTION_TYPE.CITYS.ADD_CITY:
            if (action.code === STATUS_CODE.SUCCESS) {
                return [
                    ...state,
                    action.cityname
                ]
            }
            alert('City is not found.')
            return state
        case ACTION_TYPE.CITYS.REMOVE_CITY:
            return state.filter(city => city !== action.cityname)
        default:
            return state
    }
}

export default citys