import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
//import Constants from 'expo-constants';
import { createAppContainer} from 'react-navigation'; 
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import SearchScreen from './Screens/searchScreen';
import TransactionScreen from './Screens/bookTransactionScreen';



// You can import from local files
//import MainScreen from './components/mainScreen';
//import Buzzer from './components/buzzer';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Appcontainer />
      </View>
    )
  }
}
const TabNavigator=createMaterialTopTabNavigator({Transaction:{screen:TransactionScreen}, 
Search:{screen:SearchScreen}})
//var switchContainer = createSwitchNavigator({
  //MainScreen : MainScreen,
  //Buzzer:Buzzer
//})
const Appcontainer = createAppContainer(TabNavigator)