import { View, Text } from 'react-native'
import React,{useEffect} from 'react'

const Login = ({navigation}) => {
  useEffect(()=>{
    setTimeout(() => {
      navigation.navigate('BottomTab');
    }, 1000);
  },[navigation])
  return (
    <View>
      <Text>login</Text>
    </View>
  )
}

export default Login