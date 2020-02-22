import React from 'react'
import { render } from 'react-dom'
import './index.css'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from './middlewares/logger'
import reducer from './reducers'
import Root from './components/Root'
import { $, query } from './utils'
import * as serviceWorker from './serviceWorker'
import users from './data/users'
import rootSaga from './sagas'

if (!query('users')) {
    query('users', users)
}

const sagaMiddleware = createSagaMiddleware();
const store = query('state') ?
    createStore(reducer, query('state'), applyMiddleware(
        sagaMiddleware,
        logger
    )):
    createStore(reducer, applyMiddleware(
        sagaMiddleware,
        logger
    ))

sagaMiddleware.run(rootSaga)

render(<Root store={store} />, $('#root'))

store.subscribe(() => query('state', store.getState()))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
