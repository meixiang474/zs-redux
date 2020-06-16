import React, {useState, useEffect} from 'react'
import {connect} from '../react-redux'
import actions from '../store/counter2/actions'

function Counter (props) {
  return (
    <div>
      <p>{props.number}</p>
      <button onClick={props.add}>+</button>
      <button onClick={props.minus}>-</button>
    </div>
  )
}
let mapStateToProps = state => state.counter2

export default connect(mapStateToProps, actions)(Counter)