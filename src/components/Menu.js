import React, { Component } from "react";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import TabHome from "./TabHome";
import Map from "./Map";
import HeroScreen from "./HeroScreen";

const TabNavigator = createBottomTabNavigator(
  {
    TabHome: { screen: TabHome },
    Heroes: { screen: HeroScreen },
    Map: { screen: Map }
  },
  {
    tabBarOptions: {
      activeTintColor: "black",
      labelStyle: {
        fontSize: 16
      },
      style: {
        backgroundColor: "powderblue",
        paddingBottom: 10
      }
    }
  }
);

const AppContainer = createAppContainer(TabNavigator);

export default class Menu extends Component {
  static navigationOptions = { header: null };
  render() {
    return <AppContainer />;
  }
}

