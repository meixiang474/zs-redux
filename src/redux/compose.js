function add1(str) {
  return '1' + str
}
function add2(str) {
  return '2' + str
}
function add3(str) {
  return '3' + str
}
export default function compose(...fns){
  return fns.reduce((a, b) => (...args) => a(b(...args)))
}
Array.prototype.reduce2 = function (fn, initialState) {
  let result = initialState
  for(let i = 0; i < this.length; i++){
    result = fn(result, this[i])
  }
  return result
}
let composedFn = compose(add3, add2, add1)
let result = composedFn('zhefeng')
console.log(result)