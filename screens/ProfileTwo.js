import {
  View,
  Text,
  Pressable,
  Image,
  Dimensions,
  StatusBar,
  ScrollView,
} from "react-native";
import React, { useContext, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const profileImage = require("../assets/WhatsApp Image 2024-03-03 at 4.11.59 PM.jpeg");
import { FIREBASE_AUTH } from "./FirebaseConfig";
import { signOut } from "firebase/auth";
import { ThemeContext, ThemeProvider } from "./Themecontexts";
import { Entypo } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
import {
  ImagePicker,
  launchImageLibraryAsync,
  requestMediaLibraryPermissionsAsync,
} from "expo-image-picker";
// import { auth } from "firebase/auth";
// import { signOut } from "firebase/auth";
// import { auth } from "./FirebaseConfig"; // Assuming FirebaseConfig contains the auth object

const auth = FIREBASE_AUTH;
const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;
const ProfileTwo = ({ navigation }) => {
  const [profile, setProfile] = useState("");
  const [upload,setUpload] = useState(false);
  const { dark, changeIntoDarkMode } = useContext(ThemeContext);

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

// Define a function to handle image upload
const uploadImage = async()=>{
    setUpload(true);
    try {
        const {uri} = await FileSystem.getInfoAsync(image); 
        const blob = await new Promise((resolve, reject))
    } catch (error) {
        console.error("error");
    }
  
}
  


  const handleLogOut = async () => {
    try {
      await signOut(auth);
      navigation.navigate("Login");
    } catch (error) {
      console.error("error");
    }
  };
  const handleImageUpload = async()=>{
    try {
        
    } catch (error) {
        console.error("error");
    }
  }

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
              MUHUMUZA Jean Pierre
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
            <TextInput
              label="email"
              right={<TextInput.Icon icon="email" />}
            />
            <View style={{ height: 20 }}></View>
            <TextInput
              label="Password"
              secureTextEntry
              right={<TextInput.Icon icon="eye" />}
            />
            <View style={{ height: 30 }}></View>
            <Pressable
              style={{
                backgroundColor: "#FEC502",
                padding: 15,
                borderRadius: 5,
                marginHorizontal: 12,
                marginBottom: 5,
                elevation: 5,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 20,
                  textAlign: "center",
                }}
                // onPress={}
              >
                submit
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
      <StatusBar color={dark ? "black" : "white"} />
    </>
  );
};

export default ProfileTwo;
