'use strict'

class cacheManager {
    constructor() {
        //this -> class 내부에서 전역적으로 사용
        this.config = []
    }

    addConfig (obj = {}) {
        this.config.push(obj)
    }

    getConfig () {
        return this.config
    }

    deleteConfig (obj = {}) {
        this.config.shift()
    }
}

module.exports = cacheManager
