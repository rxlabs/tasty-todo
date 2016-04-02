import React, { PropTypes } from 'react'
import ListItem from 'material-ui/lib/lists/list-item'
import Checkbox from 'material-ui/lib/checkbox'
import ActionDelete from 'material-ui/lib/svg-icons/action/delete'

const Todo = ({ onClick, onCheck, onDelete, completed, text }) => (
  <ListItem
    primaryText={<div onClick={onClick}>{text}</div>}
    leftCheckbox={<Checkbox onClick={onCheck} checked={completed} />}
    rightIcon={<ActionDelete onClick={onDelete} />}
    style={completed ? {textDecoration: 'line-through'} : {}}
  />
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
