'use strict'

const obj = {
    title: 'node.js 올인원 패키지'
}

const newObj = {
    name: 'node.js 온라인 올인원'
}

const arr = [1, 2, 3]
const newArr = [4, 5, 6]


// 새로운 객체를 생성
//const ret = Object.assign({}, obj, newObj)

/*const ret = { 
    ...obj,
    ...newObj
    // spread(...) 사용해서 두 객체를 합친 하나의 객체 생성
}*/

// 객체말고 배열도 가능
const ret = [
    ...arr,
    ...newArr
]
console.log(ret)