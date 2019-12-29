'use strict'

// 함수
const CustomError = (message) => ({
    message,
    type: 'NotImageFileException'
})

try{
    const imgTypes = ['.jpg', '.png', '.gif']
    const filename = 'fast.doc'

    const isImageFile = imgTypes.find(ext => filename.endsWith(ext))

    if (!isImageFile){
        throw CustomError('this is not an image file')
    }

} catch (e) {
    console.error(e)
}