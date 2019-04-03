import React, { Component } from "react";
import { StyleSheet, Text, Image, View } from "react-native";

export default class HeroDetails extends Component {
  static navigationOptions = {
    title: "Details",
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainText}>Welcome to Tyrfing!</Text>
        <Text style={styles.subText}>Land of the brave.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "cadetblue"
  },
  mainText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  subText: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 20,
  },
  homeImage: {
    width: undefined,
    height: undefined,
    flex: 1
  }
});
