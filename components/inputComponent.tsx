import React from "react";
import {View, TextInput, StyleSheet} from 'react-native'

//props type [ TextInput컴포넌트의 각 속성들을 전달받기 위한 타입 ]
type Props = {
    placeholder? : string | undefined,
    secureTextEntry? : boolean | undefined,
    onChangeText? : (text:string)=> void | undefined
}

export default function InputComponent(props:Props):JSX.Element{
    return(
        <View style={style.container}>
            <TextInput 
            placeholder={props.placeholder} //컴포넌트를 사용하는 곳에서 힌트에 대한 property를 전달 받아야함.
            secureTextEntry={props.secureTextEntry} //컴포넌트를 사용하는 곳에서 secure 기능에 대한 property를 전달 받아야함.
            onChangeText={props.onChangeText}
            placeholderTextColor='#c3c2c8'
            style={style.input}></TextInput>
        </View>
    )
}
const style=StyleSheet.create({
    container:{
        width:'100%',
        height:40,
        paddingLeft:16,
        paddingRight:16,
        borderWidth:1,
        borderBottomColor:'#D3D3D3',
        borderRadius:4,
        backgroundColor:'white',
        marginTop:8,
        marginBottom:8
    },
    input:{
        flex : 1, //TextInput의 높이를 container 높이 40에 맞게
        color : '#292929',

    }
})