export default function (actionCreators, dispatch) {
  let boundActionCreators = {}
  for(let key in actionCreators){
    boundActionCreators[key] = function (...args){
      return dispatch(actionCreators[key](...args))
    }
  }
  return boundActionCreators
}