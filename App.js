import React from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Image } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import App_openScreen from './App_openScreen';
import Viewer from './components/Viewer';
import MondaySchedule from './components/MondaySchedule';



export default class App extends React.Component {

  render() {
    return (<Myscreens />);
    
  }
}

const Myscreens = StackNavigator({
  
  App_openScreen: { screen: App_openScreen },
  Viewer: { screen: Viewer },
   MondaySchedule: { screen: MondaySchedule }
});


const styles = StyleSheet.create({

  container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
  }

})




// skip this line if using Create React Native App
//AppRegistry.registerComponent('AwesomeProject', () => myscreens);


