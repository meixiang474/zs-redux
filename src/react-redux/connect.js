import React, {useContext, useState, useEffect, useRef} from 'react'
import ReactReduxContext from './context'
import {bindActionCreators} from '../redux'
export default function (mapStateToProps, mapDispatchToProps) {
  return function (OldComponent) {
    return function (props) {
      let {store} = useContext(ReactReduxContext)
      let [state, setState] = useState(mapStateToProps(store.getState()))
      let [boundActions, setBoundActions] = useState(() => bindActionCreators(mapDispatchToProps, store.dispatch))
      useEffect(() => {
        return store.subscribe(() => {
          setState(mapStateToProps(store.getState()))
        })
      }, [store])
      
      return <OldComponent {...props} {...state} {...boundActions}/>
    }
  }
}