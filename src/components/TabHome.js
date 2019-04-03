import React, { Component } from "react";
import { StyleSheet, Text, Image, View } from "react-native";

export default class TabHome extends Component {
  static navigationOptions = {
    title: "Home"
  };
  render() {
    var imgSource =
      "https://cdn.vox-cdn.com/thumbor/W1jhFnp-DMRgu8tX39IbCAO80bw=/0x0:2048x1152/1200x800/filters:focal(1438x142:1764x468)/cdn.vox-cdn.com/uploads/chorus_image/image/53017619/C2fE0HtUcAAi800.0.jpg";
    return (
      <View style={styles.container}>
        <Image
          style={styles.homeImage}
          source={{ uri: imgSource }}
          resizeMode="contain"
        />
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
