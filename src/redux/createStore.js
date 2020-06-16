export default function createStore(reducer, initialState) {
  let state = initialState // 状态
  let listeners = []
  function getState() { // 获取当前状态
    return state
  }
  function dispatch(action){
    state = reducer(state, action)
    listeners.forEach(listener => listener())
    return action
  }
  dispatch({type: '@@REDUX_INIT'})
  function subscribe(listener){
    listeners.push(listener)
    return function(){
      let index = listeners.indexOf(listener)
      listeners.splice(index, 1)
    }
  }
  return {
    getState,
    dispatch,
    subscribe
  }
  
}