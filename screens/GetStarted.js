import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  StatusBar,
  Pressable,
  Dimensions,
} from "react-native";
// import { StatusBar } from "expo-status-bar";
// const joker = require("../assets/joker2.jpg");
const joker = require("../assets/j2.jpg");

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
const GetStarted = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex:1,
          // position: "relative",
          width: "100%",
          height: "100%",
          backgroundColor:'black',
          // opacity: 1,
        }}
      >
        <ImageBackground
          resizeMode="cover"
          source={joker}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            // opacity: 0.9, 
            // shadowColor: "#000",
            // shadowOffset: {
            //   width: 0,
            //   height: 5,
            // },
            // shadowOpacity: 0.5, // Shadow opacity
            // shadowRadius: 8, // Shadow radius
            // elevation: 5,
          }}
        >
          <View style={{flex:1,justifyContent:"center" ,backgroundColor:"rgba(0,0,0,0.8)",width:"100%",height:"100%"}}>
          <View style={{ width: "90%", paddingLeft: 30, marginTop: "40%" }}>
            <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
              Enjoy your favorite movie everywhere
            </Text>
            <Text style={{ color: "white", fontSize: 20, marginVertical: 30 }}>
              Browse through our collections and discover hundreds of movie and
              that you'll love!
            </Text>
          </View>
          
          </View>
          <View style={{backgroundColor:"rgba(0,0,0,0.8)"}}>
            <Pressable
              onPress={()=>{navigation.navigate('SignUp')}}
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
                Get started{" "}
              </Text>
            </Pressable>
          </View>
        </ImageBackground>
      </View>
      <StatusBar color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'black'
  },
});

export default GetStarted;
