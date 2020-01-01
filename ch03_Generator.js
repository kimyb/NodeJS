'use strict'

// yield
// return
// *를 붙여서 명시적으로 generator 함수임을 나타냄
function* log () {
    console.log(0, yield)
    console.log(1, yield)
    console.log(2, yield)
}

const gen = log()

gen.next()
gen.next('zero')
gen.next('first')
gen.next('second')