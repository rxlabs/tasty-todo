import { connect } from 'react-redux'

import { toggleTodo, editTodo, removeTodo, updateTodo } from '../actions'
import TodoList from '../components/TodoList'

const mapStateToProps = (state) => {
  return {
    todos: state.todos
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
