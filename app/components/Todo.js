import React, { PropTypes } from 'react'
import ListItem from 'material-ui/lib/lists/list-item'
import Checkbox from 'material-ui/lib/checkbox'
import ActionDelete from 'material-ui/lib/svg-icons/action/delete'

const Todo = ({ onClick, onDelete, completed, text }) => (
  <ListItem
    onClick={onClick}
    primaryText={text}
    leftCheckbox={<Checkbox checked={completed} />}
    rightIcon={<ActionDelete onClick={onDelete} />}
  />
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
