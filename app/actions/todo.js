import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO
} from '../constants/ActionTypes'

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text
  }
}

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    id
  }
}

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  }
}
