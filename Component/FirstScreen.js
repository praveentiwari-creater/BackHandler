import React,{useEffect} from 'react';
import {View,Text,BackHandler} from 'react-native';
import {useNetInfo} from "@react-native-community/netinfo";
function FirstScreen(){
  
    useEffect(() => {
  
        BackHandler.addEventListener('hardwareBackPress', () => false)
        return () =>
          BackHandler.removeEventListener('hardwareBackPress', () => true)
      }, [])
  
  return(
    <View>
      <Text style={{fontSize:40}}>
        Main page first screen
      </Text>
    </View>
  )
}
export default FirstScreen;