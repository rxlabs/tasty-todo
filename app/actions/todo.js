import {
  ADD_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  UPDATE_TODO
} from '../constants/ActionTypes'

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text
  }
}

export const editTodo = (id) => {
  return {
    type: EDIT_TODO,
    id
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

export const updateTodo = (id, text) => {
  return {
    type: UPDATE_TODO,
    text,
    id
  }
}
