import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback
} from "react-native";

export default class HeroContainer extends Component {
  constructor() {
    super();
  }
  render() {
    var imgSource = this.props.item.assets.portrait["150px"];
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback style={styles.heroImage} onPress={() => {}}>
          <Image
            style={styles.heroImage}
            source={{ uri: imgSource }}
            resizeMode="contain"
          />
        </TouchableWithoutFeedback>

        <View style={styles.heroDetails}>
          <View style={styles.heroHeader}>
            <View style={styles.nameContainer}>
              <Text style={styles.heroName}>{this.props.item.name}</Text>
            </View>
          </View>
          <Text style={styles.heroInfo}>{this.props.item.origin}</Text>
          <Text style={styles.heroInfo}>{this.props.item.moveType}</Text>
          <Text style={styles.heroInfo}>{this.props.item.skills[3].name}</Text>
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
  heroInfo: {
    fontSize: 7,
    color: "white",
    alignSelf: 'center'
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
