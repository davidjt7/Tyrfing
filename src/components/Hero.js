import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default class Hero extends Component {
  constructor() {
    super();
    this.state = { toggleImage: true };
  }
  render() {
    var imgSource = this.state.toggleImage
      ? this.props.item.imageUrl
      : this.props.item.imageAttackUrl;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.heroImage}
          onPress={() =>
            this.setState({ toggleImage: !this.state.toggleImage })
          }
        >
          <Image
            style={styles.heroImage}
            source={{ uri: imgSource }}
            resizeMode="contain"
          />
        </TouchableOpacity>

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
    backgroundColor: "royalblue",
    marginTop: 10,
    marginRight: 5,
    marginBottom: 5
  },
  heroName: {
    fontSize: 20,
    textAlign: "center",
    padding: 10,
    color: "cornsilk"
  },
  heroDescription: {
    fontSize: 10,
    color: "white"
  },
  heroImage: {
    width: undefined,
    height: undefined,
    marginTop: 10,
    marginLeft: 5,
    marginBottom: 5,
    backgroundColor: "gold",
    flex: 1
  }
});
