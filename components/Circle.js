import React from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Image, Text } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';


export default class Circle extends React.Component {

  render() {
    return (

        <View style = {styles.container}>

          <View style = {styles.innerCircle}>


          </View>

        </View>


      );
    
  }
}



const styles = StyleSheet.create({

  container: {
   justifyContent: 'center',
   alignItems: 'center',
   width: 10,
   height: 10,
   borderRadius: 10,
   backgroundColor: '#000',

  },

  innerCircle: {
   backgroundColor: '#F5FCFF',
   width: 6, 
   height: 6,
   borderRadius: 5,
  },



})




// skip this line if using Create React Native App
//AppRegistry.registerComponent('AwesomeProject', () => myscreens);


