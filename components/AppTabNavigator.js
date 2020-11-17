import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import BloodDonateScreen from '../screens/BloodDonateScreen';


export const AppTabNavigator = createBottomTabNavigator({
  DonateBlood : {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/search.png")} style={{width:30, height:30}}/>,
      tabBarLabel : "Find Room",
    }
  },
  BookRequest: {
    screen: BloodDonateScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/room.jpg")} style={{width:60, height:30}}/>,
      tabBarLabel : "Give Room",
    }
  }
});
