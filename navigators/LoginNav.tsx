import React from 'react'

// LoginNav의 Stack Navigator 객체 생성을 위한 import
import { createStackNavigator } from '@react-navigation/stack'
// LoginNav에서 전환할 화면 스크린들 타입
import { LoginNavScreenList } from '../types'
// Stack Navigator 객체 생성
const Stack= createStackNavigator<LoginNavScreenList>()

// 네비게이터가 보여줄 화면 컴포넌트들 import
import Login from '../screen_login/Login'
import SignUp from '../screen_login/SignUp'
import ResetPW from '../screen_login/ResetPW'

export default function LoginNav():JSX.Element{
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Login' component={Login}></Stack.Screen>
            <Stack.Screen name='SignUp' component={SignUp}></Stack.Screen>
            <Stack.Screen name='ResetPW' component={ResetPW}></Stack.Screen>
        </Stack.Navigator>
    )
}

