class User3 {
    _userid = '';  //protected 속성으로 선언
    #passwd = '';   // private 속성으로 선언
    _name = '';
    _email = '';
    constructor(userid,passwd,name,email) {
        this._userid = name ;
        this.#passwd = passwd ;
        this._name = name ;
        this._email = email ;
    }
}

// protected 속성으로 선언되 변수는
// 클래스 외부에서 접근할 수 없음
// 따라서, 값 조작도 불가





