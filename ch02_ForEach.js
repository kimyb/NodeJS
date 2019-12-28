// foreach는 비동기적으로 수행하지 않음.

'use strict'

const arr = ['hi','안녕',1,2,3]
const newArr = []

arr.forEach(item => {
    newArr.push(item)
})

console.log(newArr)