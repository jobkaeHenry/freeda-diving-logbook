/** 커스텀 에러클래스 - 메세지와, errorCode를 넣으면 작동한다 */
class HttpError extends Error{
    constructor(message,errorCode){
        super(message);
        this.code = errorCode
    }
}

module.exports = HttpError