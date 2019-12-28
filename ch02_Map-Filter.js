'use strict'

const arr = ['node.js', 'node.js' ,'올인원']

const newArr = arr.filter(data => data === 'node.js')
const mapArr = newArr.map(item => {
    title: item
})
console.log(newArr)
console.log(mapArr)