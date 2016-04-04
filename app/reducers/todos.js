import R from 'ramda'

import {
  ADD_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  UPDATE_TODO
} from '../constants/ActionTypes'

const initialState = []

const editTodo = (todo) => {
  return Object.assign({}, todo, {
    editing: true
  })
}

const newTodo = (todo, id) => {
  return {
    id,
    text: todo.text,
    completed: false,
    editing: false
  }
}

const toggleTodo = (todo) => {
  return Object.assign({}, todo, {
    completed: !todo.completed
  })
}

const updateTodo = (todo, text) => {
  return Object.assign({}, todo, {
    text,
    editing: false
  })
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      if (!action.text.trim()) {
        return state
      }

      let id = 0
      if (!R.isEmpty(state)) {
        id = state[0].id + 1
      }

      return [
        newTodo(action, id),
        ...state
      ]
    case EDIT_TODO:
      return state.map((todo) => {
        if (todo.id !== action.id) {
          return todo
        }

        return editTodo(todo)
      })
    case REMOVE_TODO:
      return state.filter((todo) => (todo.id !== action.id))
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id !== action.id) {
          return todo
        }

        return toggleTodo(todo)
      })
    case UPDATE_TODO:
      return state.map((todo) => {
        if (todo.id !== action.id) {
          return todo
        }

        return updateTodo(todo, action.text)
      })
    default:
      return state
  }
}

export default todos
