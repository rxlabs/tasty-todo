import React from 'react'
import AppBar from 'material-ui/lib/app-bar'
import Paper from 'material-ui/lib/paper'

const style = {
  maxWidth: 800,
  minWidth: 300,
  minHeight: 300
}

const App = () => (
  <Paper style={style} zDepth={1}>
    <AppBar
      title='Tasty Todos'
      showMenuIconButton={false}
    />
  </Paper>
)

export default App
