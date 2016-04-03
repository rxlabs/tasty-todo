import React from 'react'
import AppBar from 'material-ui/lib/app-bar'
import Paper from 'material-ui/lib/paper'
import IconButton from 'material-ui/lib/icon-button'

import { GITHUB_LINK } from '../constants'
import Theme from '../theme'
import VisibleTodoList from '../containers/VisibleTodoList'
import AddTodo from '../containers/AddTodo'
import Controls from '../containers/Controls'

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
      minWidth: 300,
      maxWidth: 600,
      minHeight: '85vh',
      margin: 'auto'
    }

    return (
      <div>
        <AppBar
          title='Tasty Todos'
          showMenuIconButton={false}
          iconElementRight={
            <a href={GITHUB_LINK}>
              <IconButton iconClassName='icon-github' />
            </a>
          }
        />
        <Paper style={style} className='todos'>
          <Controls className='controls' />
          <VisibleTodoList />
          <AddTodo />
        </Paper>
      </div>
    )
  }
}

export default App
