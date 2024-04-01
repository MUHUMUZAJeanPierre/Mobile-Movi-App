import * as React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "./HomeScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Settings from "./Settings";
import Profile from "./Profile";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: "black",
        width: 200,
      }}
      drawerContentOptions={{
        activeTintColor: "#FDD130",
        inactiveTintColor: "white", 
        labelStyle: {
            fontSize: 14,
          },
          contentContainerStyle: {
            backgroundColor: "black", 
          },
        }}
        
      >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          backgroundColor: "black",
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color="white"
            />
          ),
        }}
      />
      <Drawer.Screen 
      
        name="Profile"
        component={Profile}
        options={{
          headerShown: true,
          backgroundColor: "black",
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name={focused? 'home' : 'home-outline'}
              size={size}
              color="white"
            />
          ),
        }}
      />
      <Drawer.Screen 
        name="Settings"
        component={Settings}
        options={{
          backgroundColor: "black",
          drawerIcon: ({ focused, size }) => (
            // Customize the drawer icone
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color="white"
            />
          ),
        }} />
      {/* Add more Drawer.Screen components for other screens if needed */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
