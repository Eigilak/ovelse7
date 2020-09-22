import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,ScrollView, Text, View,TouchableOpacity } from 'react-native';
import {createAppContainer} from "react-navigation";
import HomeScreen from "./components/HomeScreen";
import {createDrawerNavigator} from "react-navigation-drawer";
import ProfileScreen from "./components/ProfileScreen";



const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Profil:{
    screen:ProfileScreen
  }
});

const AppNav = createAppContainer(MyDrawerNavigator)

export default class App extends React.Component {
  render() {
    return (
        <AppNav/>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
