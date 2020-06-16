import * as TYPES from './actionTypes'
function add(){
  return {type: TYPES.ADD2}
}
function minus() {
  return {type: TYPES.MINUS2}
}

export default {
  add,
  minus
}