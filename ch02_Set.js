'use strict'

// Set의 자료구조로 test 변수 생성
const test = new Set()

test.add(1)
test.add(1)
test.add(2)
test.add(2)
test.add(3)


for(const item of test){
    console.log(item)
}

const ret = test.has(0)
console.log(ret)

// Set은 중복되지 않는 자료구조, add를 이용해서 데이터 입력