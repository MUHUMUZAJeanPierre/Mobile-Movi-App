import React, { useContext } from "react";
import { View, Text } from "react-native";
import { ThemeContext, ThemeProvider } from "./Themecontexts";

const Series = () => {
  const { dark, changeIntoDarkMode, signUp, signIn } = useContext(ThemeContext);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:dark ? "white" : 'black',
      }}
    >
      <Text style={{color:dark ? 'white': 'black'}}>this series</Text>
    </View>
  );
};

export default Series;
