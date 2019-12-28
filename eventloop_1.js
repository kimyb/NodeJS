//오류가 난 것을 알려주는 역할
'use strict'

//배열 선언
const arr = []

for(var i = 0; i < 100; i++) {
    arr.push(i)
}

// Stack 스택 LIFO
const a = arr.pop() // 99를 리턴(반환)

// Queue 큐 FIFO
arr.shift() // 0을 리턴(반환)