export default function (reducers) {
  return function (state = {}, action) {
    let nextState = {}
    for(let key in reducers){
      let reducerForKey = reducers[key]
      let previousStateForKey = state[key]
      let nextStateForKey = reducerForKey(previousStateForKey, action)
      nextState[key] = nextStateForKey
    }
    return nextState
  }
}