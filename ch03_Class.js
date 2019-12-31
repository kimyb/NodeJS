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

const CacheManager = new cacheManager()
CacheManager.addConfig({
    port: 8000,
    name: "jupyter"
})
CacheManager.deleteConfig()
const config = CacheManager.getConfig()
console.log(config)