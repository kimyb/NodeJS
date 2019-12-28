'use strict'

function edit () {console.log("hi")}
function write () {}

class update{

}

/*module.exports = {
    // 함수 명과 export할 이름이 같다면 edit: edit 이렇게 할 필요 없음.
    edit,
    write
}*/

module.exports = write
module.exports = edit
module.exports = update

module.exports = {
    id: "id",
    token: "token",
    fn: () => {
        console.log("this is a function")
    }
}
