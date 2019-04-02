import React, { Component } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import HeroData from "../data/HeroData";
import Hero from "./Hero";
export default class Heroes extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={HeroData}
          renderItem={({ item }) => <Hero item={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});
