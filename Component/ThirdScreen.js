import React from 'react';
import {View,Text,BackHandler,ToastAndroid,} from 'react-native';
class ThirdScreen extends React.Component{

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton() {
        ToastAndroid.show('Back button is pressed', ToastAndroid.SHORT);
        return true;
    }

 render(){
  return(
    <View>
      <Text style={{fontSize:40}}>
  ThirdScreen
      </Text>
    </View>
  )
}
}
export default ThirdScreen;