//1. 최상위 Stack Navigator의 화면 리스트 타입 
export type RootScreenList = {
    //컴포넌트 이름이아니라 그 화면을 부르는 별명을 짓는것이다. 
    //화면의 이름과 똑같이 별명을 짓는게 안 헷갈린다. 
    Intro : undefined,
    LoginNav : undefined,
    MainNav : undefined
    //이렇게 해두면 화면이 3개라는걸 알수있음. 
}

export type LoginNavScreenList = {
    Login : undefined,
    SignUp : undefined,
    ResetPW : undefined
}