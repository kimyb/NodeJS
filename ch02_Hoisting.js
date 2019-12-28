'use strict'


// Hoisting
console.log(var1)
// let var1 = 'r'   오류 발생
// const var1 = 'r' 오류 발생
var var1 = 'r'
// var 은 전역변수로 선언이 되어서 추후에 선언이 되어도 hoisting에 의해서 runtime 실행시점에서 코드의 맨 위로 보냄

