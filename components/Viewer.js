import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, TouchableHighlight, View, Image } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';


import MondaySchedule from './MondaySchedule';


export default class Viewer extends Component {

  _onPressButton1() {
    Alert.alert('Music record not found!')
    //this.props.navigation.navigate('Viewer');
  }
  _onPressButton2() {
    Alert.alert('Music record not found!')
  }
  _onPressButton3() {
    Alert.alert('new page should be opened!')
  }

  constructor(props){
    super(props);
    this.state ={
      status:true
    }

  }

  toggleStatus(){
    this.setState({
      status:!this.state.status
    })
  }

  setNativeProps (nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render() {


    let pic = {
        uri: 'https://www.kaptest.com/blog/prep/wp-content/uploads/sites/21/2012/04/GMAT-Study-Plan-One-Week-MBA-800x430-800x321.jpg'
      };
    return (


      <View style = {styles.container0}>

              

        <View style={styles.container}>

        <Image source={pic} style={[styles.image, {transform: [{translateX: 0}] }]}/>
          

          

          <View style={styles.buttonContainer}>
            <Button
              onPress={() => this.props.navigation.navigate('MondaySchedule')}
              title="Monday"
            />


          </View>

          <View style={styles.buttonContainer2}>
            <Button
              onPress={this._onPressButton1}
              title="Tuesday"
            />


          </View>


          <View style={styles.buttonContainer3}>
            <Button
              onPress={this._onPressButton1}
              title="Wednesday"
            />


          </View>


          <View style={styles.buttonContainer4}>
            <Button
              onPress={this._onPressButton1}
              title="Thursday"
            />


          </View>


          <View style={styles.buttonContainer5}>
            <Button
              onPress={this._onPressButton1}
              title="Friday"
            />


          </View>


          <View style={styles.buttonContainer6}>
            <Button
              onPress={this._onPressButton1}
              title="Saturday"
            />


          </View>


          <View style={styles.buttonContainer7}>
            <Button
              onPress={this._onPressButton1}
              title="Sunday"
            />


          </View>
         
        </View>

      </View>


    );
  }
}

const styles = StyleSheet.create({
  symbols: {
    left: 30,
  },
  note: {
    position: 'absolute',
    left: -10,
  },
  noteSet: {
    position: 'absolute',
    margin: 20,
  },
  image: {
    margin: 10,
    marginTop: -80,
    width: 340,
    height: 150,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {

   alignItems: 'center',
  },
  container0: {
   flex: 1,
   position: 'absolute',
    top: 90,

  },
  buttonContainer: {
   position: 'absolute',
    flexDirection: 'row',
    top: 100,
  },
  buttonContainer2: {
   position: 'absolute',
    flexDirection: 'row',
    top: 150,
  },
  buttonContainer3: {
   position: 'absolute',
    flexDirection: 'row',
    top: 200,
  },
  buttonContainer4: {
   position: 'absolute',
    flexDirection: 'row',
    top: 250,
  },
  buttonContainer5: {
   position: 'absolute',
    flexDirection: 'row',
    top: 300,
  },
  buttonContainer6: {
   position: 'absolute',
    flexDirection: 'row',
    top: 350,
  },
  buttonContainer7: {
   position: 'absolute',
    flexDirection: 'row',
    top: 400,
  }
})



const myscreens = StackNavigator({
  
  MondaySchedule: { screen: MondaySchedule },
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('Jarvis', () => myscreens);


