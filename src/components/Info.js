import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default class Info extends Component {
  static navigationOptions = { header: null };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.mainText}>Welcome to Tyrfing!</Text>
        <Text style={styles.subText}>Land of the brave.</Text>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigate("Home")}
        >
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  mainText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  navButton: {
    alignSelf: "stretch",
    backgroundColor: "powderblue",
    alignItems: "center",
    margin: 20
  },
  navButtonText: {
    fontSize: 18,
    padding: 10
  },
  subText: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
