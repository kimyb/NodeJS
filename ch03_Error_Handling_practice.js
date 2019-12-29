'use strict'

const CustomError = (message, type) => ({
    message: `Error: ${message}`,
    type: `API::${type}`
})

const whitelist = ['.gif', '.jpg', '.png']
const data = []

const isValidImageFiles = (data) => {
    data.forEach(item => {
        const ret = whitelist.find(_item => item.endsWith(_item))
        if (ret) return true
        return false
    })
}

try{
    if (!isValidImageFiles(['filename.pptx'])){
        throw CustomError('isInvalidImageFiles', 'invalidRequest')
    }
}
 catch(e){
    console.error(e)
}