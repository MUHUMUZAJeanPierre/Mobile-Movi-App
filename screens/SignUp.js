import {
  View,
  Text,
  Image,
  Dimensions,
  Pressable,
  StyleSheet,
  StatusBar,
} from "react-native";
// import { StatusBar } from "expo-status-bar";
import React, { useState, useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
const image = require("../assets/muvi.png");
import { TextInput, Checkbox } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import FlashMessage from "react-native-flash-message";
// import { showMessage } from "react-native-flash-message";
import Toast from "react-native-toast-message";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import auth from '@react-native-firebase/auth';
// import { TextInput } from 'react-native-paper';
import { FirebaseApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FIREBASE_AUTH } from "./FirebaseConfig";
import { ThemeProvider, ThemeContext } from "./Themecontexts.js";


// const Auth = FIREBASE_APP;
// const auth = getAuth();
const auth = FIREBASE_AUTH;
const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;
const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const {dark, changeIntoDarkMode, signIn, signUp} = useContext(ThemeContext); 

  const handleFocused = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const validForm = () => {
    let valid = true;

    //valid Email
    //if email is not provided
    if (!email.trim()) {
      setEmailError("Email is required");
      valid = false;
      //if the validation regex is not match
    } else if (!isValidEmail(email)) {
      setEmailError("Invalid email format");
      valid = false;
    } else {
      setEmailError("");
    }

    //check if the  password valid

    //if password is not provided
    if (!password.trim()) {
      setPasswordError("password is required");
      valid = false;
    } else {
      setPasswordError("");
    }

    return valid;
  };

  const handleSubmit = async () => {
    if (validForm() === true) {
      //perform submission
      console.log(email);
      console.log(password);
      signUp(email, password);
      navigation.navigate('Login')
      // create user with firebase
      // try {
      //   const response = await createUserWithEmailAndPassword(
      //     auth,
      //     email,
      //     password
      //   );
      //   console.log(response);
      //   console.log("You have successfully signed in");
      //   setTimeout(() => {
      //     navigation.navigate("Login");
      //   }, 3000);
      //   showMessage({
      //     message: "Sign in",
      //     description: "Account unsuccessfully",
      //     type: "success",
      //     backgroundColor: "red",
      //     hideStatusBar: true,
      //     duration: 4000,
      //     // onClose: () => {
      //     // navigation.navigate("Login");
      //     // },
      //   });
      // } catch (error) {
      //   showMessage({
      //     message: "Sign in",
      //     description: "Account unsuccessfully",
      //     type: "success",
      //     backgroundColor: "red",
      //     hideStatusBar: true,
      //     duration: 4000,
      //     // onClose: () => {
      //     // navigation.navigate("Login");
      //     // },
      //   });
      //   console.log(error);
      // }

      //set the data in the local storage

      // await AsyncStorage.setItem('user_data', 'peter')
      // const data ={
      //   email: email,
      //   password: password
      // }
      // await AsyncStorage.setItem('user_data', data);
    }
  };

  // const getData = async()=>{
  //   let data = await AsyncStorage.getItem('user_data')
  //   console.log(data)
  // }
  return (
    <View
      style={{
        width: "100%",
        height: height,
        backgroundColor: "#26282C",
        padding: 12,
      }}
    >
      {/* <FlashMessage position="top" /> */}
      {/* <Toast ref={(ref) => Toast.setRef(ref)} /> */}
      {/* <StatusBar barStyle="light-content" /> */}
      <StatusBar color="white" />
      <View style={{ height: 100 }}></View>
      {/* <View
        style={{
          flexDirection: "row",
          justifyContent: "flexStart",
          gap: 18,
          width: "100%",
          height: "17%",
            backgroundColor: "red",
          paddingTop: "15%",
        }}
      >
        <AntDesign
          name="arrowleft"
          size={24}
          color="#FDD130"
          style={{ marginLeft: 20, fontWeight: "bold" }}
        />
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 10,
            backgroundColor:'red'
          }}
        >
          Register
        </Text>
      </View> */}
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "23%",
        }}
      >
        <Image source={image} />
        <View>
          <Text
            style={{
              color:dark ? "black" : "white",
              fontSize: 15,
              margin: 10,
              paddingTop: "8%",
            }}
          >
            Sign up to discover all our movie and enjoy
          </Text>
          <Text
            style={{
              color:dark ?  "black" : "white",
              fontSize: 15,
              alignItems: "center",
              textAlign: "center",
              paddingBottom: 13,
            }}
          >
            our feature
          </Text>
        </View>
      </View>
      <View style={{ backgroundColor: "", height: "20%" }}>
        <TextInput
          label="Email Address"
          mode="outline"
          textColor="white"
          theme={{ colors: { primary: "#FFD130" } }}
          outCompleteType="email"
          autoCorrect={false}
          value={email}
          onChangeText={(e) => setEmail(e)}
          error={!!emailError}
          placeholderTextColor="white"
          right={<TextInput.Icon icon="email" color="#FDD130" />}
          style={{
            marginTop: 10,
            backgroundColor: "#26282C",
          }}
        />
        {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
        <TextInput
          label="Password"
          secureTextEntry={!toggle} 
          mode="outline"
          textColor="white"
          theme={{ colors: { primary: "#FFD130" } }}
          outCompleteType="email"
          autoCorrect={false}
          value={password}
          underlineColor={isFocused ? "#FDD130" : "white"}
          underlineColorAndroid={isFocused ? "#FDD130" : "gray"}
          onChangeText={(e) => setPassword(e)}
          error={!!passwordError}
          right={
            <TextInput.Icon
              icon={toggle ? "eye" : "eye-off"}
              color="#FDD130"
              onPress={() => setToggle(!toggle)}
            />
          }
          placeholderTextColor="white"
          style={{ marginTop: 10, backgroundColor: "#26282C" }}
        />
        {passwordError ? (
          <Text style={styles.error}>{passwordError}</Text>
        ) : null}
        {/* <TextInput
          label="Confirm Password"
          secureTextEntry
          textColor="white"
          theme={{colors:{primary:'#FFD130'}}}
          mode="outline"
          outCompleteType="email"
          autoCorrect={false}
          value={password}
          onChangeText={setPassword}
          error={!!passwordError}
          right={<TextInput.Icon icon="eye" color="#FDD130" />}
          placeholderTextColor="white"
          style={{ marginBottom: 10, backgroundColor: "#26282C" }}
        /> */}
        {/* {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null} */}
        <View style={{ backgroundColor: "", paddingRight: 8 }}>
          <Text style={{ textAlign: "right", margin: 18, color: "#FDD130" }}>
            Forget Password?
          </Text>
        </View>
      </View>
      <View style={{ height: "2%" }}></View>
      <View
        style={{ backgroundColor: "", height: "40%", alignItems: "center" }}
      >
        <Pressable
          onPress={() => {
            handleSubmit();
          }}
          style={{
            borderRadius: 4,
            backgroundColor: "#FDD130",
            width: "95%",
            height: "15%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Text>Sign Up</Text>
        </Pressable>
        <View
          style={{
            // backgroundColor: "red",
            width: "95%",
            borderRadius: 4,
            height: "26%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <View style={{height: 30, margin: 20}}></View> */}
          <Text style={{ color: "white" }}>
            By Sign Up I accept{" "}
            <Text style={{ color: "#FDD130" }}>terms of use</Text> and{" "}
            <Text style={{ color: "#FDD130" }}>Privacy policy</Text>
          </Text>
          <Text style={{ color: "white", margin: 10 }}>
            or simply sign up with
          </Text>
          {/* <View style={{marginBottom:20}}></View> */}
        </View>
        <Pressable
          style={{
            backgroundColor: "black",
            borderRadius: 4,
            width: "95%",
            height: "15%",
            gap: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            console.log("dddddd");
          }}
        >
          <FontAwesome name="apple" size={20} color="white" />
          <Text style={{ color: "white" }}>Sign up With Apple</Text>
        </Pressable>
        <View style={{ height: "4%" }}></View>
        <Pressable
          style={{
            backgroundColor: "white",
            borderRadius: 4,
            width: "95%",
            height: "15%",
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            console.log("rrrrrrrrrrrrrr");
          }}
        >
          <AntDesign name="google" size={20} color="red" />
          <Text style={{ color: "black" }}>Sign up with Google</Text>
        </Pressable>
        <View style={{ height: "10%" }}></View>
        <View>
          <Text style={{ color: "white", fontSize: 14 }}>
            Have an already account?{" "}
            <Pressable
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text style={{ color: "#FDD130" }}>Sign In</Text>
            </Pressable>
            {/* </Pressable> */}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 14,
    marginTop: 5,
  },
});

export default SignUp;
