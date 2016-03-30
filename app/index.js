import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import injectTapEventPlugin from 'react-tap-event-plugin'

import reducer from './reducers'
import App from './components/App'

const store = createStore(reducer)

export default () => {
  injectTapEventPlugin()
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}
