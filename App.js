import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./src/components/Home";
import Info from "./src/components/Info";
import Menu from "./src/components/Menu";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Menu: { screen: Menu },
    Info: { screen: Info }
  },
);

const AppContainer = createAppContainer(MainNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
