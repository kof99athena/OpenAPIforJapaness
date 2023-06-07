import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootScreenList } from "./types";

//최상위 네비게이터에 의해 전환될 스크린 or 네비게이터를 사용하기 위해 임포트 한다.
import Intro from "./Intro";
import LoginNav from './navigators/LoginNav'

//Navigator에 지정할 스크린 리스트 타입을 별도의 [types.tsx] 파일에 작성하여 관리하고
//필요한 곳에서 import

//앱 전체 화면들을 전환할 수 있는 최상위 Stack Navigator 객체 생성
const RootStack =createStackNavigator<RootScreenList>()

//NavigationContainer를 가진 root 컴포넌트 - 앱의 시작 컴포넌트 (index.js에서 설정)
export default function Main():JSX.Element{
    return(
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen name='Intro' component={Intro}></RootStack.Screen>
                <RootStack.Screen name='LoginNav' component={LoginNav}></RootStack.Screen>
            </RootStack.Navigator>
        </NavigationContainer>
    )
} 