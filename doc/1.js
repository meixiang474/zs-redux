// state老状态, action动作对象
const CHANGE_COLOR = 'CHANGE_COLOR'
let initialState = {color: 'red', updateCount: 0}
function reducer(state = initialState, action){
  if(action.type === CHANGE_COLOR){
    return {...state, color: action.payload, updateCount: state.updateCount + 1}
  }
  return state
}
function createStore(reducer, initialState) {
  let state = initialState // 状态
  let listeners = []
  function getState() { // 获取当前状态
    return state
  }
  function dispatch(action){
    state = reducer(state, action)
    listeners.forEach(listener => listener())
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
let store = createStore(reducer, initialState)
console.log(store.getState())
store.dispatch({type: CHANGE_COLOR, payload: 'yellow'})
console.log(store.getState())
store.subscribe(() => {
  console.log(store.getState())
})
