import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import passwordManager from '../reducers'

const middlewares = applyMiddleware(logger, thunk )

const store = createStore(passwordManager, compose(
  middlewares,
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

export default store
