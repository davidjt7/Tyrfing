import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";
import {
  withNavigation,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import HeroDetails from "./HeroDetails";
var Sound = require("react-native-sound");
var soundContainer = new Sound("ruined.mp3", Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log("Failed to load the sound", error);
    return;
  }
});
function playSound() {
  soundContainer.play();
}
class Hero extends Component {
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
        <TouchableWithoutFeedback
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
        </TouchableWithoutFeedback>

        <View style={styles.heroDetails}>
          <View style={styles.heroHeader}>
            <View style={styles.soundContainer}>
              <TouchableOpacity onPress={() => playSound()}>
                <Image
                  style={styles.headerImage}
                  source={require("../assets/note.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.heroName}>{this.props.item.name}</Text>
            </View>
            <View style={styles.soundContainer}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Details")}
              >
                <Image
                  style={styles.headerImage}
                  source={require("../assets/details.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.heroDescription}>
            {this.props.item.heroDescription}
          </Text>
        </View>
      </View>
    );
  }
}

export default withNavigation(Hero);

const DetailsNavigator = createStackNavigator({
  Details: { screen: HeroDetails }
});

const DetailsContainer = createAppContainer(DetailsNavigator);

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
    width: undefined,
    height: undefined,
    marginTop: 10,
    marginLeft: 5,
    marginBottom: 5,
    backgroundColor: "gold",
    flex: 1
  }
});
