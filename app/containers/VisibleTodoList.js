import { connect } from 'react-redux'

import { ALL, COMPLETE, INCOMPLETE } from '../constants/Filters'
import { toggleTodo, editTodo, removeTodo, updateTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case ALL:
      return todos
    case COMPLETE:
      return todos.filter((todo) => (todo.completed))
    case INCOMPLETE:
      return todos.filter((todo) => (!todo.completed))
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.filter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(editTodo(id))
    },

    onTodoCheck: (id) => {
      dispatch(toggleTodo(id))
    },

    onTodoDelete: (id) => {
      dispatch(removeTodo(id))
    },

    onTodoUpdate: (id, text) => {
      dispatch(updateTodo(id, text))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
