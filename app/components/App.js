import React from 'react'
import AppBar from 'material-ui/lib/app-bar'
import Paper from 'material-ui/lib/paper'

import Theme from '../theme'

class App extends React.Component {

  getChildContext () {
    return {
      muiTheme: Theme
    }
  }

  render () {
    const style = {
      maxWidth: 800,
      minWidth: 300,
      minHeight: 300
    }

    return (
      <Paper style={style} zDepth={1}>
        <AppBar
          title='Tasty Todos'
          showMenuIconButton={false}
        />
      </Paper>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object
}

export default App
