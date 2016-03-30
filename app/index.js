import React from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

import App from './components/App'

export default () => {
  injectTapEventPlugin()
  render(
    <App />,
    document.getElementById('root')
  )
}
