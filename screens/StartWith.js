import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
const images = require("../assets/muvi.png");

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
const StartWith = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          console.log("peggy");
          navigation.navigate("Favorite");
        }}
      >
        <Image resizeMode="cover" source={images} />
      </TouchableOpacity>
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    height: height,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1F2123",
  },
});

export default StartWith;
