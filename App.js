import React,{useEffect} from 'react';
import {View,Text,BackHandler} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import FirstScreen from './Component/FirstScreen';
import SecondScreen from './Component/SecondScreen';
import ThirdScreen from './Component/ThirdScreen';


const Drawer = createDrawerNavigator();
function App(){
 

  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="FirstScreen" component={FirstScreen} options={ {gesturesEnabled: false}} />
        <Drawer.Screen name="SecondScreen" component={SecondScreen} />
        <Drawer.Screen name="ThirdScreen" component={ThirdScreen} />
      
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
export default App;