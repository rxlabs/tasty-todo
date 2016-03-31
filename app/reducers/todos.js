import { TOGGLE_TODO } from '../constants/ActionTypes'

const initialState = []

function toggleTodo (todo) {
  return Object.assign({}, todo, {
    completed: !todo.completed
  })
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id !== action.id) {
          return todo
        }

        return toggleTodo(todo)
      })
    default:
      return state
  }
}

export default todos
