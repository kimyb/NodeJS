'use strict'

const arr = [2, 3, 4];

// Object.keys
// Object.value 로 array를 변환시킨 다음에 활용

const isBiggerThanOne = arr.every(key => key > 1)
// 첫번째 부터 순서대로 만약 조건이 맞지 않으면 뒤에 것을 보지 않는 특징!
console.log(isBiggerThanOne)

