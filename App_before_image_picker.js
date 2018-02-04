import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Image } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

const myscreens = StackNavigator({
  Home: { screen: App },
  Profile: { screen: ProfileScreen },
});


export default class App extends Component {
  _onPressButton1() {
    Alert.alert('This service is not available!')
  }
  _onPressButton2() {
    Alert.alert('Music record not found!')
  }
  _onPressButton3() {
    Alert.alert('new page should be opened!')
  }

  render() {

    const {navigate} = this.props.navigation;

    let pic = {
        uri: 'https://riyalemi.files.wordpress.com/2016/09/img_4202.jpg?w=660'
      };
    return (
      
      
      <View style={styles.container}>
      <Image source={pic} style={styles.image}/>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton1}
            title="Take a picture of a note sheet!"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton2}
            title="Play a song!"
            color="#841584"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton3}
            title="Play a song!"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 120,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => myscreens);


