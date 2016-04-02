import React, { PropTypes } from 'react'
import List from 'material-ui/lib/lists/list'

import Todo from './Todo'

const TodoList = ({ todos, onTodoClick, onTodoDelete }) => (
  <List>
    {todos.map(
      (todo) => (
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
          onDelete={() => onTodoDelete(todo.id)}
        />
      )
    )}
  </List>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onTodoDelete: PropTypes.func.isRequired
}

export default TodoList
