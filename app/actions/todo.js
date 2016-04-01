import {
  ADD_TODO,
  TOGGLE_TODO
} from '../constants/ActionTypes'

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text
  }
}

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  }
}
