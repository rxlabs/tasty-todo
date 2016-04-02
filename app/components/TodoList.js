import React, { PropTypes } from 'react'
import List from 'material-ui/lib/lists/list'

import Todo from './Todo'
import EditTodo from '../components/EditTodo'

const TodoList = ({
  todos, onTodoClick, onTodoCheck, onTodoDelete, onTodoUpdate
}) => (
  <List>
    {todos.map(
      (todo) => {
        if (todo.editing) {
          return (
            <EditTodo
              key={todo.id}
              {...todo}
              onSave={onTodoUpdate}
            />
          )
        }

        return (
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id)}
            onCheck={() => onTodoCheck(todo.id)}
            onDelete={() => onTodoDelete(todo.id)}
          />
        )
      }
    )}
  </List>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    editing: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onTodoCheck: PropTypes.func.isRequired,
  onTodoDelete: PropTypes.func.isRequired,
  onTodoUpdate: PropTypes.func.isRequired
}

export default TodoList
