import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import injectTapEventPlugin from 'react-tap-event-plugin'

import rootReducer from './reducers'
import App from './containers/App'

const store = createStore(rootReducer)

export default () => {
  injectTapEventPlugin()
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}
