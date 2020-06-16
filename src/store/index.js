import {createStore, combineReducers, applyMiddleware} from '../redux'
import reducer1 from './counter1/reducer'
import reducer2 from './counter2/reducer'
let reducer = combineReducers({
  counter1: reducer1,
  counter2: reducer2
})
function logger({dispatch, getState}) {
  return function (next) {
    return function (action) {
      console.log('老状态', getState())
      next(action)
      console.log('新状态', getState())
    }
  }
}
function thunk({dispatch, getState}){
  return function (next) {
    return function (action) {
      if(typeof action === 'function'){
        action(dispatch, getState)
      }else{
        next(action)
      }
    }
  }
}
function promise({dispatch, getState}){
  return function (next) {
    return function (action) {
      if(typeof action.then === 'function'){
        action.then(dispatch)
      }else{
        next(action)
      }
    }
  }
}

let store = applyMiddleware(thunk, promise, logger)(createStore)(reducer)
let dispatch = store.dispatch
// store.dispatch = function (action) {
//   console.log('老状态', store.getState())
//   dispatch(action)
//   console.log('新状态', store.getState())
// }
// 实现异步, 1秒后加一
// store.dispatch = function (action){
//   setTimeout(() => {
//     dispatch(action)
//   }, 1000)
// }
export default store