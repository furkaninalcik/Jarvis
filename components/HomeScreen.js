import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Image , Text} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';


class HomeScreen extends React.Component{

  render(){


    return(

      <View>
        <Button
        onPress = {() => this.props.navigation.navigate('LoginScreen')}
        title="Navigate!"

        />

        <Text>HomeScreen</Text>

      </View>


    );


  }



}

export default HomeScreen;