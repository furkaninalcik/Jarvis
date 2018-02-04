import React from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Image } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import Viewer from './components/Viewer';




export default class App extends React.Component {
  _onPressButton1() {
    Alert.alert('This service is not available!')
  }
  _onPressButton2() {
    Alert.alert('Music record not found!')
  }
  _onPressButton3() {
    //const {navigate} = this.props.navigation;
    //this.props.navigation.navigate('Viewer');
  }

  constructor(){
    super()

  }

  render() {

    //const {navigate} = this.props.navigation;
    
    let pic = {
        uri: 'http://2.bp.blogspot.com/-NuYUxQTIccA/UUMdzAldBGI/AAAAAAAAiSY/YFyD-EX40tQ/s320/a.png'
      };
    return (
      
      <View style={styles.container}>
      <Image source={pic} style={styles.image}/>
       
        
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('Viewer')}
            title="Create my schedule!"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 360,
    height: 560,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 350
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

const myscreens = StackNavigator({
  Home: { screen: App },
  Viewer: { screen: Viewer },
});


// skip this line if using Create React Native App
AppRegistry.registerComponent('Jarvis', () => myscreens);


