import { View, Text, Image, Dimensions, Pressable, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
// import { Entypo } from '@expo/vector-icons';
const image = require("../assets/muvi.png");
import { TextInput, Checkbox } from "react-native-paper";
// import { FIREBASE_AUTH } from "./FirebaseConfig";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { FontAwesome5 } from "@expo/vector-icons";
import MyTabs from "./MyTabs";
// import { TextInput } from 'react-native-paper';
// import {ThemeContext} from "./Themecontexts.js";
import { ThemeProvider, ThemeContext } from "./Themecontexts.js";

// const auth = FIREBASE_AUTH;
const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [toggle, setToggle] = useState(false);
  const { dark, changeIntoDarkMode, signIn } = useContext(ThemeContext);

  // Basic email validation regex
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const validForm = () => {
    let valid = true;
    if (!email.trim()) {
      setEmailError("Email is required");
      valid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Invalid email format");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
      valid = false;
    } else {
      setPasswordError("");
    }
    return valid;
  };

  const handleLogin = async () => {
    if (validForm() === true) {
      console.log(email);
      console.log(password);
      signIn(email,password)
      navigation.navigate("MyTabs");
      //sign in in firebase
      // try {
      //   const response = await signInWithEmailAndPassword(
      //     auth,
      //     email,
      //     password
      //   );
      //   console.log(response);
      //   console.log("You have successfully signed in");
      //   navigation.navigate("MyTabs");
      //   showMessage({
      //     message: "Login",
      //     description: "Login Successfully",
      //     type: "success",
      //     backgroundColor: "blue",
      //     hideStatusBar: true,
      //     duration: 5000,
      //   });
      // } catch (error) {
      //   showMessage({
      //     message: "Login",
      //     description: "Login failed",
      //     type: "success",
      //     backgroundColor: "red",
      //     animationDuration: 225,
      //     hideStatusBar: true,
      //     duration: 5000,
      //   });
      //   console.log(error);
      // }
    }
  };

  return (
    <View
      style={{
        width: "100%",
        height: height,
        padding: 15,
        backgroundColor: dark ? "white" : "#26282C",
      }}
    >
      {/* <StatusBar barStyle="light-content" /> */}
      <FlashMessage position="top" />
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <View style={{ height: 100 }}></View>
      {/* <View
        style={{
          flexDirection: "row",
          justifyContent: "flexStart",
          gap: 18,
          width: "100%",
          height: "17%",
          //   backgroundColor: "red",
          paddingTop: "18%",
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
          }}
        >
          Login
        </Text>
      </View> */}
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // backgroundColo: "green",
          width: "100%",
          height: "30%",
        }}
      >
        <Image source={image} />
        <View>
          <Text
            style={{
              color: dark ? "black" : "white",
              fontSize: 15,
              margin: 10,
              paddingTop: "8%",
            }}
          >
            Please Login to enjoy more benefits and we{" "}
          </Text>
          <Text
            style={{
              // color: "white",
              color: dark ? "black" : "white",
              fontSize: 15,
              alignItems: "center",
              textAlign: "center",
              paddingBottom: 13,
            }}
          >
            won't let You go
          </Text>
        </View>
      </View>
      <View style={{ backgroundColor: "", height: "20%" }}>
        <TextInput
          label="Email Address"
          textColor="white"
          outCompleteType="email"
          theme={{colors: { primary: "#FFD130" }}}
          placeholderTextColor="white"
          value={email}
          error={!!emailError}
          onChangeText={(e) => setEmail(e)}
          right={<TextInput.Icon icon="email" color="#FDD130" />}
          style={{
            marginTop: 10,
            backgroundColor: "#26282C",
          }}
        />
        {emailError ? (
          <Text style={{ color: "red", fontSize: 14, marginTop: 5 }}>
            {emailError}
          </Text>
        ) : null}
        {/* <TextInput
          label="Password"
          secureTextEntry={!toggle}
          icon={toggle ? "eye-in-outline": "eye-outline"}
          textColor="white"
          theme={{ colors: { primary: "#FFD130" } }}
          right={<TextInput.Icon name={toggle ? 'eye-slash' : 'eye'} onPress={() => setToggle(!toggle)} color="#FDD130" />}
          placeholderTextColor="white"
          value={password}
          onChangeText={(p) => setPassword(p)}
          error={!!passwordError}
          style={{ marginTop: 10, backgroundColor: "#26282C" }}
        /> */}
        <TextInput
          label="Password"
          secureTextEntry={!toggle} // Use the toggle state to toggle visibility
          textColor="white"
          theme={{ colors: { primary: "#FFD130" } }}
          // right={<TextInput.Icon color="#FFD130" size={20}
          //     onPress={() => setToggle(!toggle)}
          //     render={(props) => (<FontAwesome5 name={toggle ? "eye-slash" : "eye"} color="#FFD130" size={20}/>)}
          //   />
          // }
          right={
            <TextInput.Icon
              icon={toggle ? "eye" : "eye-off"}
              onPress={() => setToggle(!toggle)}
              color="#FFD130"
              size={20}
            />
          }
          placeholderTextColor="white"
          value={password}
          onChangeText={(p) => setPassword(p)}
          error={!!passwordError}
          style={{ marginTop: 10, backgroundColor: "#26282C" }}
        />
        {passwordError ? (
          <Text style={{ color: "red", fontSize: 14, marginTop: 5 }}>
            {passwordError}
          </Text>
        ) : null}
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
            handleLogin();
          }}
          style={{
            borderRadius: 4,
            backgroundColor: "#FDD130",
            width: "95%",
            height: "15%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Get Started</Text>
        </Pressable>
        <View
          style={{
            backgroundColor: "",
            width: "95%",
            borderRadius: 4,
            height: "15%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white" }}>or Simple Login with</Text>
        </View>
        <Pressable
          style={{
            backgroundColor: "black",
            borderRadius: 4,
            width: "95%",
            height: "15%",
            alignItems: "center",
            justifyContent: "center",
          }}
          // onPress={() => {navigation.navigate(Create)}
        >
          <Text style={{ color: "white" }}>Login With Apple</Text>
        </Pressable>
        <View style={{ height: "4%" }}></View>
        <Pressable
          style={{
            backgroundColor: "white",
            borderRadius: 4,
            width: "95%",
            height: "15%",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            navigation.navigate("www.google.com");
          }}
        >
          <Text style={{ color: "black" }}>Login with Google</Text>
        </Pressable>
        <View style={{ height: "10%" }}></View>
        <View>
          <Text style={{ color: "white", fontSize: 14 }}>
            Dont't have an account?{" "}
            <Pressable
              onPress={() => {
                navigation.navigate("SignUp");
              }}
              // style={{ backgroundColor: "blue" }}
            >
              <Text style={{ color: "#FDD130", fontSize: 10 }}>Sign Up</Text>
            </Pressable>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;
