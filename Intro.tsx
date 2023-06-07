import React from 'react'
import {View, Text, StyleSheet, Button, ActivityIndicator} from 'react-native'

//Stack Navigator의 screen으로 등록된 컴포넌트에서 전달받을 props의 타입
import {StackScreenProps} from '@react-navigation/stack'
import { RootScreenList } from './types'

type IntroProps = StackScreenProps<RootScreenList,'Intro'>


//functional 컴포넌트로 화면을 구성해보기 - 파라미터로 props {navigation, route } 객체 받음. 
export default function Intro(props:IntroProps):JSX.Element{
    return(
        <View style={style.root}>
            <Text>Intro</Text>
            <Button title='ログイン' onPress={()=>props.navigation.navigate('LoginNav')}></Button>
            <Button title='メインページへの' color={'green'} onPress={()=>props.navigation.navigate('MainNav')}></Button>
        </View>
    )
}

const style=StyleSheet.create({
    root:{
        flex:1, justifyContent:'center', alignItems:'center'
    }
})