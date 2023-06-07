import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

//공통으로 사용하는 컴포넌트 import
import InputComponent from '../components/inputComponent'

import { StackScreenProps } from '@react-navigation/stack'
import { LoginNavScreenList } from '../types'
type LoginProps= StackScreenProps<LoginNavScreenList,'Login'>

export default function Login(props:LoginProps):JSX.Element{ //props객체{navigation, route}

    // 1. 우선 테스트 목적의 화면
    // return (
    //     <View style={style.root}>
    //         <Text>LOG IN</Text>
    //     </View>
    // )

    //2. 로그인 화면
    return (
        <View style={style.root}>
            {/* 크게 2개의 영역으로 구성 : 로그인 콘텐츠영역, 아래쪽에 회사이름 or 앱이름 표시영역 */}
            {/* 1. 로그인 콘텐츠 영역 */}
            <View style={style.content}>
                {/* 1.1 로고 */}
                <Text style={style.logo}>ヘヨンの家</Text>

                {/* 1.2 이메일/비밀번호 입력박스 */}
                <InputComponent placeholder='ID'></InputComponent>
                <InputComponent placeholder='PW' secureTextEntry={true}></InputComponent>

                {/* 1.3 비밀번호 재설정  */}
                <Text style={style.resetPW} onPress={()=>props.navigation.navigate('ResetPW')}>ログインできない場合</Text>

                {/* 1.4 로그인 버튼 */}
                <View style={{width:'100%', marginBottom:24}}>
                    <Button title='ログイン'></Button>
                </View>

                {/* 1.5 회원가입 안내 글씨 */}
                <Text style={style.signup}>アカウントがない場合<Text style={style.signupLink} onPress={()=>props.navigation.navigate('SignUp')}>新規取得</Text> </Text>

            </View>

            {/* 2. footer 영역 */}
            <View style={style.footer}>
                <Text style={style.footerCopyright}>Copyright　ヘヨンの家</Text>
            </View>

        </View>
    )
}

//style sheet object
const style= StyleSheet.create({
    root:{ flex:1, backgroundColor:'FEFFFF' },
    content:{
        flex: 1,  // footer 영역 제외한 모든 공간 사용
        justifyContent:'center',
        alignItems:'center',
        padding:32,
    },
    footer:{
        borderTopWidth:1,
        borderTopColor:'#D3D3D3',
        padding: 8,
    },
    logo:{
        color: '#292929',
        fontSize: 40,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:32
    },
    resetPW:{
        width:'100%',
        textAlign:'right',
        color:'#3796EF',
        marginTop:8,
        marginBottom:16,
        marginRight:8
    },
    signup:{
        color:'#929292',
        textAlign:'center',   
    },
    signupLink:{
        color : '#3796EF'
    },
    footerCopyright:{
        color:'#929292',
        textAlign:'center'
    }
})