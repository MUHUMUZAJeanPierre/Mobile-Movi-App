import * as React from "react";

//navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//icons
import Icon from "react-native-vector-icons/Ionicons";
import { Entypo, SimpleLineIcons } from "@expo/vector-icons";
//screen
import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";
import NotificationScreen from "./NotificationScreen";
import Profile from "./Profile";
import Search from "./Search";
import Action from "./Action";
import DrawerNavigation from "./DrawerNavigation";
import TopNavigation from "./TopNavigation";
import HeaderTop from "./HeaderTop";

// tab
const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#FDD130",
        inactiveTintColor: "white",
        style: {
          backgroundColor: "black", 
        },
        tarBarStyle:{
          backgroundColor:'black',
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={TopNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-outline" color={color} size={size} />
          ),
          tabBarStyle:{
            // marginTop:200
            backgroundColor:'black'
          }
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="search-outline" color={color} size={size} />
          ),
          tabBarStyle:{
            // marginTop:200
            backgroundColor:'black'
          }
        }}
      />
      <Tab.Screen
        name="More"
        component={DrawerNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="folder" size={24} color={color} />
          ),
          tabBarStyle:{
            // marginTop:200
            backgroundColor:'black'
          }
        }}
      />
      <Tab.Screen
        name="Action"
        component={Action}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="grid" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
