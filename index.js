"use strict"

module.exports = function randPerm(n) {
  var result = new Array(n)
  result[0] = 0
  for(var i=1; i<n; ++i) {
    var idx = (Math.random()*(i+1))|0
    if(idx < i) {
      result[i] = result[idx]
    }
    result[idx] = i
  }
  return result
}