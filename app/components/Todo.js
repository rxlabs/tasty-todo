import React, { PropTypes } from 'react'
import ListItem from 'material-ui/lib/lists/list-item'
import Checkbox from 'material-ui/lib/checkbox'

const Todo = ({ onClick, completed, text }) => (
  <ListItem
    onClick={onClick}
    primaryText={text}
    leftCheckbox={<Checkbox checked={completed} />}
  />
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
