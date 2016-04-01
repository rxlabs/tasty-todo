import 'babel-polyfill'
import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import { localforage } from 'localforage'

import rootReducer from './reducers'
import App from './containers/App'

const store = createStore(rootReducer, {}, autoRehydrate())
persistStore(store, {storage: localforage})

export default () => {
  injectTapEventPlugin()
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}
