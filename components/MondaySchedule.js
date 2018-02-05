import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Image, Picker,Text } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';



export default class Viewer extends Component {

  _onPressButton1() {
    Alert.alert('This service is not available!')
  }
  _onPressButton2() {
    Alert.alert('Music record not found!')
  }
  _onPressButton3() {
    Alert.alert('new page should be opened!')
  }

  constructor(props){
    super(props)

  }

  state = {user: '       '}
  updateUser = (user) => {
      this.setState({ user: user })
  }

 

  render() {


    let pic = {
        uri: 'http://monday.pt/wp-content/uploads/2017/01/logo_orange_big.png'
      };
    return (
      
      
      <View style={styles.container}>
      <Image source={pic} style={styles.image}/>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton1}
            title="Activity Type"
          />
        </View>
        <View style={styles.buttonContainer1}>
          <Button
            onPress={this._onPressButton1}
            title="Time Interval"
          />
        </View>

        <View>
            <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
               <Picker.Item label = "Lecture" value = "Lecture" />
               <Picker.Item label = "Travel" value = "Travel" />
               <Picker.Item label = "Birthday Party" value = "Birthday Party" />
               <Picker.Item label = "Event" value = "Event" />
            </Picker>
            <Text style = {styles.text}>Activity: {this.state.user}</Text>
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 420,
    height: 100,
    marginTop: -280,
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
  buttonContainer1: {
    marginTop: -5
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

// skip this line if using Create React Native App
//AppRegistry.registerComponent('AwesomeProject', () => myscreens);


