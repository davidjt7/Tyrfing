import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  Dimensions,
  StatusBar
} from "react-native";

var { width, height } = Dimensions.get("window");

export default class Home extends Component {
  static navigationOptions = { header: null };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="powderblue" barStyle="dark-content" />
        <Image
          style={styles.tyrfing}
          source={require("../assets/Tyrfing.png")}
          resizeMode="contain"
        />
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigate("Menu")}
        >
          <Text style={styles.navButtonText}>Onward!</Text>
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
    backgroundColor: "royalblue"
  },
  tyrfing: {
    width: width / 2,
    height: height / 4,
    flex: 8
  },
  navButton: {
    alignSelf: "stretch",
    justifyContent: "center",
    backgroundColor: "powderblue",
    alignItems: "center",
    margin: 20,
    flex: 1
  },
  navButtonText: {
    fontSize: 18,
    padding: 10
  }
});
