// import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MyTabs from './screens/MyTabs';

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyTabs />
//     </NavigationContainer>
//   );
// }

import React from "react";
// import { View, StyleSheet } from "react-native";
// import Profile from "./screens/Profile";
// import Action from './screens/Action';
// import Favorite from "./screens/GetStarted";
import StackNavigatorPage from "./screens/StackNavigatorPage";
import {ThemeProvider} from "./screens/Themecontexts";
import ProfileTwo from "./screens/ProfileTwo";
import Profile from "./screens/Profile";

const App = () => {
  return (
    <ThemeProvider>
      {/* <NavigationContainer>
        <StackNavigatorPage />
      </NavigationContainer> */}
      {/* <ProfileTwo /> */}
      <Profile />
     </ThemeProvider>
  );
};

export default App;
