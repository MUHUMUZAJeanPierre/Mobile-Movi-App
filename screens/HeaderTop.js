import React, { useContext, useState } from "react";
import { View, Image, Dimensions, TouchableOpacity } from "react-native";
const movie = require("../assets/muvi.png");
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { ThemeContext, ThemeProvider } from "./Themecontexts";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;
const HeaderTop = () => {
  const [isLightMode, setIsLightMode] = useState(true);
  const { dark, changeIntoDarkMode } = useContext(ThemeContext);

  const handleChangeLightMode = (lightMode) => {
    setIsLightMode((prev) => !prev);
    changeIntoDarkMode();
  };
  return (
    <View
      style={{
        backgroundColor: dark ? "white" : "#1F2123",
        height: 90,
        paddingBottom: 20,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          // backgroundColor: "green",
          height: 60,
          marginTop: 40,
        }}
      >
        <Image source={movie} style={{ width: "40%", height: "98%" }} />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginRight: 20,
            // backgroundColor: "blue",
            alignItems: "center",
            width: "20%",
            gap: 18,
          }}
        >
          <Ionicons
            name="notifications"
            size={24}
            color={dark ? "black" : "white"}
          />
          <Octicons
            name="bookmark"
            size={24}
            color={dark ? "black" : "white"}
          />
          <TouchableOpacity onPress={handleChangeLightMode}>
            <Entypo
              name={isLightMode ? "light-up" : "moon"}
              size={24}
              color={dark ? "black" : "white"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HeaderTop;
