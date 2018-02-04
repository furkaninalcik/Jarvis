import React from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Image } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

//import Viewer from './components/Viewer';


class HomeScreen extends React.Component{

  static navigationOptions = {
    title: 'Home',
  };

  render(){
    const {navigate} = this.props.navigation;
    return(

      <View style = {styles.container} >

        <Text
          onPress = {() => navigate('Home')}> Navigate!
        <Text/>

      <View/>

    );
  }

}; 




const Myscreens = StackNavigator({
  
  Home: { screen: HomeScreen }
  Viewer: { screen: Viewer }
});

export default class App extends React.Component {

  render() {
    return <Myscreens/>;
    
  }
}

const styles = StyleSheet.create({

  container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
  }

})




// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => myscreens);


