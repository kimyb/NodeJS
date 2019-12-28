'use strict'

// 최소 1개 이상 요소에 대해 만족하면 true
// every는 전부에 대해 만족해야 true

const arr = [1, 0, -1, -2]

const ret = arr.some(item => item <= 0)
const res = arr.every(item => item <= 0)
console.log('ret : ' + ret)
console.log('res : '+ res)