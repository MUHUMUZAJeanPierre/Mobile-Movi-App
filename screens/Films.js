import React, { useContext } from "react";
import { View, Text } from "react-native";
import { ThemeContext, ThemeProvider } from "./Themecontexts";

const Films = () => {
  const { dark, changeIntoDarkMode, signIn } = useContext(ThemeContext);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor:dark ? 'white':'black' }}>
      <Text style={{color:dark ? 'white' : 'black'}}>trending films</Text>
    </View>
  );
};

// const styles = StyleSheet.create({})

export default Films;
