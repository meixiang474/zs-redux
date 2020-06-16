import React, {useState, useEffect} from 'react'
// import store from '../store'
import {bindActionCreators} from '../redux'
import actions from '../store/counter1/actions'
import {connect} from '../react-redux'

// export default function Counter (props) {
//   let [number, setNumber] = useState(store.getState().counter1.number)
//   useEffect(() => {
//     let unsubscribe = store.subscribe(() => {
//       setNumber(store.getState().counter1.number)
//     })
//     return () => {
//       unsubscribe()
//     } 
//   }, [])
//   return (
//     <div>
//       <p>{number}</p>
//       <button onClick={boundActions.add}>+</button>
//       <button onClick={boundActions.minus}>-</button>
//     </div>
//   )
// }

function Counter (props) {
 
  return (
    <div>
      <p>{props.number}</p>
      <button onClick={props.add}>+</button>
      <button onClick={props.thunkAdd}>+</button>
      <button onClick={props.minus}>-</button>
    </div>
  )
}
let mapStateToProps = state => state.counter1

export default connect(mapStateToProps, actions)(Counter)
