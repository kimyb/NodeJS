'use strict'

const obj = {
    title: 'node.js',
    value: '올인원 패키지'
}

// 옛날 방식
// const title = obj.title
// const value = obj.value

const arr = [0, 1, 2]

// ES6 버전
const { title, value} = obj
const [c,a, b] = arr
console.log(title, value,c,a,b)

