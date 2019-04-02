import React, { Component } from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import TabHome from "./TabHome";
import Heroes from "./Heroes";

const TabNavigator = createBottomTabNavigator({
  TabHome: { screen: TabHome },
  Heroes: { screen: Heroes }
});

const AppContainer = createAppContainer(TabNavigator);

export default class Menu extends Component {
  static navigationOptions = { header: null };
  render() {
    return <AppContainer />;
  }
}
