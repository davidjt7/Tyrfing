import React, { Component } from "react";
import { StyleSheet, FlatList, View, Text, Image } from "react-native";
import HeroContainer from "./HeroContainer";
var stats = require("fire-emblem-heroes-stats");

export default class AllHeroes extends Component {
  static navigationOptions = {
    header: null
  };
  componentWillMount() {
    heroData = stats.getAllHeroes();
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={heroData}
          keyExtractor={item => item.assets.portrait["75px"]}
          renderItem={({ item }) => <HeroContainer item={item} />}
        />
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
  heroHeader: {
    flexDirection: "row"
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
  nameContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  heroName: {
    fontSize: 12,
    textAlign: "center",
    padding: 10,
    color: "cornsilk"
  },
  soundContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  headerImage: {
    width: 20,
    height: 20
  },
  heroDescription: {
    fontSize: 10,
    color: "white"
  },
  heroImage: {
    width: 150,
    height: 150,
    marginTop: 10,
    marginLeft: 5,
    marginBottom: 20,
    flex: 1
  }
});
