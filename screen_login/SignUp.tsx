import React,{useState} from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

//공통사용 컴포넌트를 import
import TabComponent from '../components/TabComponent'
import InputComponent from '../components/inputComponent'

import { StackScreenProps } from '@react-navigation/stack'
import { LoginNavScreenList } from '../types'
type SignupProps= StackScreenProps<LoginNavScreenList,'SignUp'>

export default function Signup(props:SignupProps):JSX.Element{ //props객체{navigation, route}

//탭 작업에서 사용할 state 변수
const [tabIndex, setTabIndex] = useState(0) //현재 선택된 탭번호 
const [tabs,setTabs] = useState(['電話番号','メールアドレス']) //탭 라벨을 string 배열로 만들기

    //보여질화면
    return(
        <View style={style.root}>
            {/* content, footer 영역 2개로 구성 */}
            {/* 1. content 영역 */}
            <View style={style.content}>
                {/* 1.1 전화번호와 이메일 중 원하는 정보로 회원가입 할 수있도록 탭으로 구성 */}
                <View style={style.tabcontainer}>
                    {/* 탭 컴포넌트는 RN에 없음. 그래서 custom component로 제작*/}
                      {/*탭 라벨의 개수만큼 탭컴포넌트를 만들기 위해 map()메소드를 이용 */}
                      {//array는 안쓸꺼야
                        tabs.map( (value, index, array)=>{ 
                            return <TabComponent label={value} key={index} selected={index==tabIndex} onPress={()=>setTabIndex(index)}></TabComponent>
                         } )
                      }
                 
                </View>
                {/* 1.2 정보입력 */}
            </View>

            {/* 2. footer영역 */}
            <View style={style.footer}></View>
        </View>
    )
}

//style sheet object
const style= StyleSheet.create({
    root:{ flex:1, backgroundColor:'FEFFFF' },
    content:{
        flex: 1,  // footer 영역 제외한 모든 공간 사용
        alignItems:'center',
        padding:32,
    },
    footer:{
        borderTopWidth:1,
        borderTopColor:'#D3D3D3',
        padding: 8,
    },
    tabcontainer:{
        flexDirection:'row',
        marginBottom : 16,
    }
})