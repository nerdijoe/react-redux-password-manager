import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import passwordManager from '../reducers'

const middlewares = applyMiddleware(logger, thunk )

const store = createStore(passwordManager, middlewares)

export default store
