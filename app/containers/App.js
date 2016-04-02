import React from 'react'
import AppBar from 'material-ui/lib/app-bar'
import Paper from 'material-ui/lib/paper'
import IconButton from 'material-ui/lib/icon-button'

import { GITHUB_LINK } from '../constants'
import Theme from '../theme'
import VisibleTodoList from '../containers/VisibleTodoList'
import AddTodo from '../containers/AddTodo'

class App extends React.Component {
  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  getChildContext = () => {
    return {
      muiTheme: Theme
    }
  }

  render = () => {
    const style = {
      maxWidth: 800,
      minWidth: 300,
      minHeight: 300
    }

    return (
      <Paper style={style}>
        <AppBar
          title='Tasty Todos'
          showMenuIconButton={false}
          iconElementRight={
            <a href={GITHUB_LINK}>
              <IconButton iconClassName='icon-github' />
            </a>
          }
        />
        <VisibleTodoList />
        <AddTodo />
      </Paper>
    )
  }
}

export default App
