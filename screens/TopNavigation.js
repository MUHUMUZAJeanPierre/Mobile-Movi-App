import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "./HomeScreen";
import Profile from "./Profile";
import Search from "./Search";
const Tab = createMaterialTopTabNavigator();
import HeaderTop from "./HeaderTop";
import { ThemeProvider, ThemeContext } from "./Themecontexts";
import { useContext } from "react";
import Features from "./Features";
import Series from "./Series";
import Films from "./Films";
import Origin from "./Origin";

export default function TopNavigation() {
    // const {dark, changeIntoDarkMode} = useContext(ThemeContext)
  const { dark, changeIntoDarkMode, signIn } = useContext(ThemeContext);

  return (
    <>
      <HeaderTop />
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor:"#FDD130",
          inactiveTintColor: dark ? "black" : "grey",
          labelStyle: { paddingTop: 10,paddingBottom:10, fontSize: 10, marginTop: 10 },
          style: { height: 60, backgroundColor: dark ? "white" : "#1F2123"},
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="star" component={Features} />
        <Tab.Screen name="Series" component={Series} />
        <Tab.Screen name="Films" component={Films} />
        <Tab.Screen name="Origin" component={Origin} />
      </Tab.Navigator>
    </>
  );
}
