'use strict'

const arr = ['node.js','올인원']

const ret = arr.find(key => key === '올인원')

// 포함하고 잇는가에 대한 bool type
const res = arr.includes('node.js')
console.log(res)

if(arr.includes('node.js')) {

}

for(const item of arr) {
    if(arr.includes(item)) 
}

// 데이터에 대한 조건만 필요할 때는 includes를 사용
// 데이터 실제 값이 필요할 때는 find를 사용