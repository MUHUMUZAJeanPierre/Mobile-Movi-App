import {
  View,
  Text,
  Pressable,
  Image,
  Dimensions,
  StatusBar,
  ScrollView,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const profileImage = require("../assets/WhatsApp Image 2024-03-03 at 4.11.59 PM.jpeg");
import { FIREBASE_AUTH } from "./FirebaseConfig";
import { signOut } from "firebase/auth";
import { ThemeContext, ThemeProvider } from "./Themecontexts";
import { Entypo } from "@expo/vector-icons";
import {
  ImagePicker,
  launchImageLibraryAsync,
  requestMediaLibraryPermissionsAsync,
} from "expo-image-picker";
// import { getDocument } from "./FireStore";
import { getData } from "./FirebaseConfig";
// import { auth } from "firebase/auth";
// import { signOut } from "firebase/auth";
// import { auth } from "./FirebaseConfig"; // Assuming FirebaseConfig contains the auth object

const auth = FIREBASE_AUTH;
const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;
const Profile = ({ navigation, id }) => {
  const [profile, setProfile] = useState("");
  const { dark, changeIntoDarkMode } = useContext(ThemeContext);
  // const removeData = async()=>{
  //   await AsyncStorage.removeItem("token");
  //   navigation.navigate("Login");
  //   try {
  //     await auth().signOut();
  //     console.log("signed out");
  //   } catch (error) {
  //     console.log('error sign out:', error.message);

  //   }
  // }

  const handleImage = async () => {
    try {
      await requestMediaLibraryPermissionsAsync();
      let result = await launchImageLibraryAsync({
        aspect: [1, 1],
        allowsEditing: true,
        quality: 1,
        allowsMultipleSelection: true,
      });

      if (!result.canceled) {
        console.log(result);
        setProfile(result.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      navigation.navigate("Login");
    } catch (error) {
      console.error("error");
    }
  };
  // const handleLogOut = async () => {
  //   try {
  //     await auth.signOut();
  //     navigation.navigate('Login');
  //   } catch (error) {
  //     console.error('Error logging out:', error);
  //   }
  // };

  return (
    <>
      <ScrollView>
        <View
          style={{
            backgroundColor: dark ? "white" : "#25272A",
            height: height,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: dark ? "white" : "#25272A",
              alignItems: "center",
              paddingTop: 70,
              width: width,
              height: "35%",
            }}
          >
            {/* <Pressable onPress={() => navigation.openDrawer()}>
              <Entypo name="menu" size={24} color="white" />
            </Pressable> */}
            <Pressable
              onPress={() => {
                console.log('press me again')
                getData();
              }}
            >
              <Entypo name="menu" size={24} color="white" />
            </Pressable>
            <View
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                borderColor: "#FFD130",
                borderWidth: 2,
                // backgroundColor: "#FFD130"
              }}
            >
              <Image
                source={{ uri: profile }}
                style={{
                  width: "100%",
                  height: "100%",
                  resizeMode: "cover",
                  borderRadius: 50,
                  resizeMode: "contain",
                }}
              />
            </View>
            <View style={{ height: 10 }}></View>
            <Text style={{ color: dark ? "black" : "white" }}>
              {this.props}
            </Text>
            <View style={{ height: 10 }}></View>
            <Text style={{ color: dark ? "black" : "#4C4F50" }}>
              j.muhumuza@gmail.com
            </Text>
            <View style={{ height: 10 }}></View>
            <Pressable
              onPress={() => {
                console.log("this is press");
                handleImage();
              }}
            >
              <Text style={{ color: "#FFD130", textAlign: "center" }}>
                EditProfile
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              backgroundColor: dark ? "white" : "#2B2D30",
              width: width,
              height: "60%",
              padding: 20,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
            }}
          >
            <View style={{ flexDirection: "row", gap: 20 }}>
              <MaterialCommunityIcons
                name="inbox-outline"
                size={30}
                color={dark ? "black" : "white"}
              />
              <Text style={{ color: dark ? "black" : "white", fontSize: 20 }}>
                Inbox
              </Text>
            </View>
            <View style={{ height: 30 }}></View>
            <View style={{ flexDirection: "row", gap: 20 }}>
              <MaterialCommunityIcons
                name="account"
                size={30}
                color={dark ? "black" : "white"}
              />
              <Text style={{ color: dark ? "black" : "white", fontSize: 20 }}>
                Account Settings
              </Text>
            </View>
            <View style={{ height: 30 }}></View>
            <View
              style={{ backgroundColor: "", flexDirection: "row", gap: 20 }}
            >
              <MaterialIcons
                name="language"
                size={30}
                color={dark ? "black" : "white"}
              />
              <Text style={{ color: dark ? "black" : "white", fontSize: 20 }}>
                Language
              </Text>
            </View>
            <View style={{ height: 30 }}></View>
            <View
              style={{ backgroundColor: "", flexDirection: "row", gap: 20 }}
            >
              <MaterialIcons
                name="help-outline"
                size={30}
                color={dark ? "black" : "white"}
              />
              <Text style={{ color: "white", fontSize: 20 }}>Help, FAQ</Text>
            </View>
            <View style={{ height: 30 }}></View>
            <View style={{ backgroundColor: "" }}>
              <Text style={{ color: dark ? "black" : "#4C4F50", fontSize: 18 }}>
                Term & Condition
              </Text>
              <Text style={{ color: dark ? "black" : "#4C4F50", fontSize: 18 }}>
                Privacy & Policy
              </Text>
            </View>
            <View style={{ display: "flex", alignItems: "center" }}>
              <Pressable
                onPress={() => handleLogOut()}
                style={{
                  width: "95%",
                  borderWidth: 1,
                  borderColor: dark ? "white" : "#4C4F50",
                  borderRadius: 3,
                  marginVertical: "15%",
                  height: "20%",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: dark ? "white" : "#804A4A",
                    textAlign: "center",
                  }}
                >
                  Log Out
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
      <StatusBar color={dark ? "black" : "white"} />
    </>
  );
};

export default Profile;
