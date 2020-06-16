import {createStore} from './redux'
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
let initialState = {number: 0}
function reducer(state = initialState, action){
  switch(action.type){
    case INCREMENT:
      return {
        number: state.number + 1
      }
    case DECREMENT:
      return {
        number: state.number - 1
      }
    default: 
      return state
  }
}
let store = createStore(reducer)
let root = document.getElementById('root')
let incrementBtn = document.getElementById('increment-btn')
let decrementBtn = document.getElementById('decrement-btn')
const render = () => {
  root.innerHTML = store.getState().number
}
render()
store.subscribe(render)
incrementBtn.addEventListener('click', () => {
  store.dispatch({type: INCREMENT})
})
decrementBtn.addEventListener('click', () => {
  store.dispatch({type: DECREMENT})
})