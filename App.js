import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ISSLocationScreen from './screens/ISSLocationScreen';
import MeteorScreen from './screens/MeteorScreen';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

export default class App extends Component {
 
  render(){
    const Stack = createStackNavigator();
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
              <Stack.Screen name="Home" component={HomeScreen}/>
              <Stack.Screen name="ISSLocation" component={ISSLocationScreen}/>
              <Stack.Screen name="Meteor" component={MeteorScreen}/>
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
