'use strict'

const genObj = {
    *gen () {
        let cnt = 0
        yield ++cnt
    }
}

const gen = genObj.gen()

console.log(gen.next())