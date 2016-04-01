import R from 'ramda'

import {
  ADD_TODO,
  TOGGLE_TODO
} from '../constants/ActionTypes'

const initialState = []

const toggleTodo = (todo) => {
  return Object.assign({}, todo, {
    completed: !todo.completed
  })
}

const newTodo = (todo, id) => {
  return {
    id,
    text: todo.text,
    completed: false
  }
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      if (!action.text.trim()) {
        return state
      }

      let id = 0
      if (!R.isEmpty(state)) {
        id = R.last(state).id + 1
      }

      return [
        ...state,
        newTodo(action, id)
      ]
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
