import 'react-native-gesture-handler';
import React from 'react';
import Welcome from './Welcome.js'
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Homescreen from './Homescreen.js';

const Stack = createStackNavigator();

export default class App extends React.Component{
  render() {
  return (
    <NavigationContainer style = {styles.container}>
      <Stack.Navigator>
    <Stack.Screen 
    name = 'Welcome'
    component= {Welcome}
    options= {{title:'Welcome'}} />
  <Stack.Screen 
    name = 'Homescreen'
    component= {Homescreen}
    options= {{title:'Homescreen'}} />
      </Stack.Navigator>
  
    </NavigationContainer>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
