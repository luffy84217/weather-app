import ACTION_TYPE from '../constants/actionType'

export const removeCity = cityname => ({
    type: ACTION_TYPE.CITYS.REMOVE_CITY,
    cityname
})

export const signIn = (username, password, redirect, path) => ({
    type: ACTION_TYPE.SESSION.SIGN_IN,
    username,
    password,
    redirect,
    path
})

export const signOut = (redirect, path) => ({
    type: ACTION_TYPE.SESSION.SIGN_OUT,
    redirect,
    path
})

export const loadProfile = (username, password) => ({
    type: ACTION_TYPE.PROFILE.LOAD_PROFILE,
    username,
    password
})

export const unloadProfile = () => ({
    type: ACTION_TYPE.PROFILE.UNLOAD_PROFILE
})

export const updateLocation = cityname => ({
    type: ACTION_TYPE.PROFILE.UPDATE_LOCATION,
    cityname
})

export const validateLocation = cityname => ({
    type: ACTION_TYPE.PROFILE.VALIDATE_LOCATION,
    cityname
})

export const getWeather = cityname => ({
    type: ACTION_TYPE.FETCH.GET_WEATHER,
    cityname
})