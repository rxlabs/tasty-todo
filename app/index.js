import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

import App from './components/App'

const rootEl = document.getElementById('root')

function render () {
  ReactDOM.render(
    <App />,
    rootEl
  )
}

export default () => {
  injectTapEventPlugin()
  render()
}
