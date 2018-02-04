import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Image,Text } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';


class LoginScreen extends React.Component{

  render(){


    return(

      <View>
        <Button
        onPress = {() => this.props.navigation.navigate('HomeScreen')}
        title="Navigate!"

        />


        <Text>LoginScreen</Text>


      </View>


    );


  }



}

export default LoginScreen;