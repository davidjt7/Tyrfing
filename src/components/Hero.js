import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Hero extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.heroImage}
          source={{ uri: this.props.item.imageUrl }}
        />
        <View style={styles.heroDetails}>
          <Text style={styles.heroName}>{this.props.item.name}</Text>
          <Text style={styles.heroDescription}>
            {this.props.item.heroDescription}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "lightskyblue"
  },
  heroDetails: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    backgroundColor: "silver",
    marginTop: 10,
    marginRight: 5
  },
  heroName: {
    fontSize: 20,
    textAlign: "center",
    padding: 10
  },
  heroDescription: {
    fontSize: 10,
    color: "white"
  },
  heroImage: {
    width: 50,
    height: 250,
    marginTop: 10,
    marginLeft: 5,
    backgroundColor: "gold",
    flex: 0.5,
    alignSelf: 'center'
  }
});
