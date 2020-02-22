import { call, put, takeLatest } from 'redux-saga/effects'
import ACTION_TYPE from '../constants/actionType'
import api from '../api'

export function* fetchWeather(action) {
    const payload = yield call(api.fetchWeather, action.cityname)

    yield put({type: ACTION_TYPE.FETCH.WEATHER_RECEIVED, payload})
}

export function* queryLocation(action) {
    const code = yield call(api.queryLocation, action.cityname)

    yield put({type: ACTION_TYPE.CITYS.ADD_CITY, cityname: action.cityname, code})
}

export default function* rootSaga() {
    yield takeLatest(ACTION_TYPE.FETCH.GET_WEATHER, fetchWeather)
    yield takeLatest(ACTION_TYPE.PROFILE.VALIDATE_LOCATION, queryLocation)
}