'use strict'

class test{
    constructor(){
        this.config = {}
    }
    
    fn () {

    }

    static call () {
        // class 를 생성하지 않고 static method를 호출할 수 있음
        // 따라서 constructor에서 만든 변수들을 사용할 수 없음.
        // 결국 만약 static method만 있는 class라면 constructor가 필요 없다.
        console.log('static method')
    }
}

test.call()