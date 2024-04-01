import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Image,
  Dimensions,
  FlatList,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import fetch from "node-fetch";
import { Ionicons } from "@expo/vector-icons";
const movie = require("../assets/muvi.png");
import { Entypo } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider, ThemeContext } from "./Themecontexts";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

const HomeScreen = ({ navigation }) => {
  //fetch new release movie

  const [info, setInfo] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const {dark, ThemeProvider} = useContext(ThemeContext);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2YzMzAwNzY1ODA3NmI3OGI2YWQyMDVjYzY5NjFkZCIsInN1YiI6IjY1ZGIyODQ3YTI0YzUwMDE4NjEwNzAwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VmlhIh2VaNYpA7JudKvu30GVqGhDS2hj9TIWyM5wWrg",
    },
  };

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=4cf33007658076b78b6ad205cc6961dd"',
      options
    )
      .then((response) => response.json())
      .then((response) => setInfo(response.results))
      .catch((error) => console.error("error:" + error));
  }, []);

  //popular
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/237791/recommendations?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setPopular(response.results);
        console.log(response);
      })
      .catch((err) => console.error(err));
  }, []);

  //fetch the Now_playing movie
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/1096197/recommendations?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => setNowPlaying(response.results))
      .catch((error) => console.error("error:" + error));
  }, []);

  //
  const [selectedItem, setSelectedItem] = useState(null);
  const handleItemPress = (id) => {
    setSelectedItem(id);
  };

  const Data = [
    {
      id: 1,
      name: "Featured",
    },
    {
      id: 2,
      name: "Series",
    },
    {
      id: 3,
      name: "Films",
    },
    {
      id: 4,
      name: "Origin",
    },
    {
      id: 5,
      name: "past",
    },
    {
      id: 6,
      name: "latest",
    },
    {
      id: 7,
      name: "latest",
    },
    {
      id: 8,
      name: "latest",
    },
    {
      id: 9,
      name: "latest",
    },
  ];

  const DataTwo = [
    {
      id: 1,
      name: "popular Today",
    },
    {
      id: 2,
      name: "Marvel",
    },
    {
      id: 3,
      name: "Fans Choice",
    },
    {
      id: 4,
      name: "star wave",
    },
    {
      id: 5,
      name: "star wave",
    },
    {
      id: 6,
      name: "star wave",
    },
    {
      id: 7,
      name: "star wave",
    },
    {
      id: 8,
      name: "star wave",
    },
    {
      id: 9,
      name: "star wave",
    },
    {
      id: 10,
      name: "star wave",
    },
    {
      id: 11,
      name: "star wave",
    },
    {
      id: 12,
      name: "star wave",
    },
  ];

  return (
    // <ScrollView>
    <View style={{ backgroundColor: dark ? "white" : "#1F2123", height: height }}>
    
       {/* <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          // backgroundColor: "green",
          height: 60,
          marginTop: 40,
        }}
      >
        <Image source={movie} style={{ width: "40%", height: "98%" }} />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            // backgroundColor: "blue",
            alignItems: "center",
            width: "18%",
          }}
        >
          <Ionicons name="notifications" size={18} color="white" />
          <Entypo name="bookmark" size={18} color="white" />
        </View>
      </View>  */}

      {/* <View style={{ height: "1%" }}></View> */}

      <View style={{ backgroundColor: "" }}>
        {/* <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={Data}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                handleItemPress(item.id);
                navigation.navigate("Action", item);
              }}
              style={{
                margin: 10,
                borderBottom:
                  selectedItem === item.id ? "#FDD130" : "transparent",
                borderWidth: selectedItem === item.id ? 1 : 0,
                borderColor:
                  selectedItem === item.id ? "#FDD130" : "transparent",
                padding: 5,
                borderRadius: 5,
              }}
            >
              <Text
                style={{ color: selectedItem === item.id ? "white" : "white" }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        /> */}
      </View>

      {/* <View></View> */}

      <View
      // style={{ backgroundColor: "green" }}
      >
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DataTwo}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                borderRadius: 2,
                borderColor: "white",
                borderWidth: 1,
                margin: 8,
                padding: 5,
              }}
              onPress={()=>{
                navigation.navigate("Action", item);
              }}
            >
              <Text style={{ color: dark ? "black" :  "white" }}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>

      {/* <View style={{ height: 5 }}></View> */}

      <ScrollView>
        <View
        // style={{ backgroundColor: "yellow" }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 8,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20, color: dark ? "black" : "white" }}>
              New Release
            </Text>
            <Text style={{ fontSize: 15, color: dark ? "white" : "#4A4C50", paddingTop: 5 }}>
              View More
            </Text>
          </View>
          <View
            style={{
              // backgroundColor: "blue",
              height: 150,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={info}
              contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
              }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{
                    width: 240,
                    aspectRatio: 2 / 1,
                    height: 300,
                    margin: 5,
                    // borderWidth: 3,
                    // borderColor: "black",
                    borderRadius: 5,
                  }}
                  onPress={()=>{navigation.navigate('Action', item)}}
                >
                  <Image
                    source={{
                      uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                    }}
                    style={{
                      width: "100%",
                      height: "100%",
                      resizeMode: "cover",
                      borderRadius: 5,
                    }}
                  />
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </View>

        <View
        // style={{ backgroundColor: "green" }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 8,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20, color: dark ? "black" : "white" }}>
              Made for you
            </Text>
            <Text style={{ fontSize: 15, color: dark ? "white" : "#4A4C50", paddingTop: 5 }}>
              View More
            </Text>
          </View>
          <View
            style={{
              // backgroundColor: "blue",
              height: 150,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={popular}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
              }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{
                    width: 240,
                    aspectRatio: 2 / 1,
                    height: 300,
                    margin: 5,
                    // borderWidth: 3,
                    borderColor: "black",
                    borderRadius: 5,
                  }}
                  onPress={() => {
                    navigation.navigate("Action", item);
                  }}
                >
                  <Image
                    source={{
                      uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                    }}
                    style={{
                      width: "100%",
                      height: "100%",
                      resizeMode: "cover",
                      borderRadius: 5,
                    }}
                  />
                </TouchableOpacity>
              )}
            />
          </View>
        </View>

        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 8,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20, color: dark ? "black" :  "white" }}>
              Popular Movie
            </Text>
            <Text style={{ fontSize: 15, color: dark ? "black" :  "#4A4C50", paddingTop: 5 }}>
              View More
            </Text>
          </View>
          <View
            style={{
              // backgroundColor: "green",
              height: 180,
              justifyContent: "center",
              align: "center",
            }}
          >
            <FlatList
              horizontal
              showHorizontalSrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              data={nowPlaying}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{
                    width: 240,
                    height: 300,
                    aspectRatio: 2 / 1,
                    margin: 5,
                    // borderWidth: 3,
                    borderRadius: 5,
                  }}
                  onPress={()=>navigation.navigate('Action', item)}
                >
                  <Image
                    source={{
                      uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                    }}
                    style={{
                      width: "100%",
                      height: "100%",
                      resizeMode: "cover",
                      borderRadius: 5,
                    }}
                  />
                </TouchableOpacity>
              )}
            />
          </View>
        </View>

        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 8,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
              Popular Movie
            </Text>
            <Text style={{ fontSize: 15, color: "#4A4C50", paddingTop: 5 }}>
              View More
            </Text>
          </View>
          <View
            style={{
              // backgroundColor: "black",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <FlatList
              // horizontal
              // showHorizontalSrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              data={popular}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{
                    height: 480,
                    width: 350,
                    margin: 5,
                    alignItems: "center",
                    borderRadius: 10,
                  }}
                  onPress={()=>{navigation.navigate('Action', item)}}
                >
                  <Image
                    source={{
                      uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                    }}
                    style={{
                      width: "100%",
                      height: "100%",
                      resizeMode: "cover",
                      borderRadius: 10,
                    }}
                  />
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </View>
  );
};

export default HomeScreen;
