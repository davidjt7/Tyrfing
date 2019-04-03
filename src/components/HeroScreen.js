import React, { Component } from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import Heroes from "./Heroes";
import HeroDetails from "./HeroDetails";

const HeroNavigator = createStackNavigator({
  Heroes: { screen: Heroes },
  Details: { screen: HeroDetails }
});

const HeroContainer = createAppContainer(HeroNavigator);

export default class HeroScreen extends Component {
  static navigationOptions = {
  };
  render() {
    return <HeroContainer />;
  }
}
