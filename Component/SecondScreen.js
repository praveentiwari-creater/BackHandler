import React,{useEffect} from 'react';
import {View,Text,BackHandler,TouchableOpacity} from 'react-native';
function SecondScreen({navigation}){
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => true)
      
      }, []);
  return(
    <View>
        <View style={{marginBottom:50}}>
            <TouchableOpacity onPress={()=>navigation.goBack()} >
                <Text style={{color:'blue',fontSize:25}}>Go Back</Text>
            </TouchableOpacity>
        </View>
      <Text style={{fontSize:40}}>
      SecondScreen
      </Text>
    </View>
  )
}
export default SecondScreen;