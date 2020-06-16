import * as TYPES from './actionTypes'
function add(){
  return {type: TYPES.ADD1}
}
function minus() {
  return {type: TYPES.MINUS1}
}
function thunkAdd(){
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(add())
    }, 1000)
  }
}
function promiseAdd(){
  return new Promise(() => {
    setTimeout((resolve) => {
      resolve(add())
    }, 1000)
  })
}
export default {
  add,
  minus,
  thunkAdd,
  promiseAdd
}