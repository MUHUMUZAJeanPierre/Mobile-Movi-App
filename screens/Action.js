import React, { useEffect, useState } from "react";
import {
  View,
  StatusBar,
  Image,
  Pressable,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
const VideoImage = require("../assets/playMuvi.png");
import YoutubePlayer from "react-native-youtube-iframe";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

const Action = ({ route, navigation }) => {
  const [muvi, setMuvi] = useState([]);
  const [muviTwo, setMuviTwo] = useState([]);
  const [muviThree, setMuviThree] = useState([]);
  const [videoPlayer, setVideoPlayer] = useState(" ");
  const [readyToPlay, setReadyToPlay] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);
  const rout = route.params;
  console.log(rout);
  // console.log(route);

  const handleReady = () => {
    setReadyToPlay(true);
  };

  //fetch movie
  const handleFetchMovie = () => {
    let token =
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2YzMzAwNzY1ODA3NmI3OGI2YWQyMDVjYzY5NjFkZCIsInN1YiI6IjY1ZGIyODQ3YTI0YzUwMDE4NjEwNzAwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VmlhIh2VaNYpA7JudKvu30GVqGhDS2hj9TIWyM5wWrg";
    axios({
      url: `https://api.themoviedb.org/3/movie/${rout.id}/recommendations?language=en-US&page=1`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        // console.log(response.data.results);
        setMuvi(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handleFetchMovie();
  }, []);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2YzMzAwNzY1ODA3NmI3OGI2YWQyMDVjYzY5NjFkZCIsInN1YiI6IjY1ZGIyODQ3YTI0YzUwMDE4NjEwNzAwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VmlhIh2VaNYpA7JudKvu30GVqGhDS2hj9TIWyM5wWrg",
    },
  };

  useEffect(()=>{
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.results);
        setMuviTwo(data.results);
      })
      .catch((err) => console.error("err", err));
  },[])

  //fetch movie three
  useEffect(()=>{
    fetch(
      "https://api.themoviedb.org/3/movie/237791/recommendations?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((dataThree) => {
        // console.log(dataThree.results);
        setMuviThree(dataThree.results);
      })
      .catch((err) => console.log(err));
  },[])

  //fetch video
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${rout.id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setVideoPlayer(response.results[0].key);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <View
      style={{
        // backgroundColor: "red",
        backgroundColor: "#26282C",
        height: height,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View style={{ height: 20 }}></View>
      <View
        style={{
          marginTop: 40,
          // backgroundColor: "yellow",
          height: 400,
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 360,
            height: "50%",
            backgroundColor: "blue",
            // marginLeft: 8,
          }}
        >
          {/* <Image
            source={{uri:`https://image.tmdb.org/t/p/w500${rout.poster_path}`}}
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
          /> */}
          { playVideo ? (
            <YoutubePlayer
              height={300}
              style={{ paddingTop: 20 }}
              // play={playing}
              videoId={videoPlayer}
              onReady={handleReady}
            />
          ) : (
            <ImageBackground
              source={{
                uri: `https://image.tmdb.org/t/p/w500${rout.poster_path}`,
              }}
              style={{ width: "100%", height: 240, resizeMode:'cover', borderRadius:5 }}
            ></ImageBackground>
          )}
        </View>
        {/* <Text
          style={{
            // marginRight: '20%',
            fontSize: 30,
            fontWeight: "bold",
            color: "white",
            // backgroundColor: "green",
          }}
        >
          Jumunji: The Next Level
        </Text> */}
        <Text
          style={{
            textAlign: "left",
            marginTop: 50,
            fontSize: 30,
            fontWeight: "bold",
            color: "white",
            // backgroundColor: "green",
          }}
        >
          {rout.title}
        </Text>
        {/* <Text style={{ color: "#77797D", marginLeft: 8, marginTop: 5 }}>
          When the would is under attach from creatures who hunt their human
          prey sound, a teenager
        </Text> */}
        <Text style={{ color: "#77797D", marginLeft: 8, marginTop: 5 }}>
          {rout.overview}
        </Text>
        <View style={{ height: 20 }}></View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            gap: 30,
          }}
        >
          <Pressable
            style={{
              backgroundColor: "#FFD130",
              width: 170,
              padding: 15,
              flexDirection: "row",
              gap: 10,
              borderRadius: 5,
            }}
          >
            <Feather name="play" size={24} color="black" />
            <TouchableOpacity
              onPress={() => {
                setPlayVideo(true);
              }}
            >
              <Text>Play</Text>
            </TouchableOpacity>
          </Pressable>
          <Pressable
            style={{
              borderWidth: 1,
              borderColor: "#FFD130",
              borderRadius: 4,
              width: 170,
              flexDirection: "row",
              gap: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Feather
              name="plus"
              size={24}
              color="#FFD130"
              style={{ textAlign: "center" }}
            />
            <Text style={{ color: "white", textAlign: "center" }}>My List</Text>
          </Pressable>
        </View>
      </View>
      <View style={{ height: 120 }}></View>
      <ScrollView>
        <View
          style={{
            margin: 10,
          }}
        >
          <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
            U.S Action Movie
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={muvi}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  width: 100,
                  aspectRatio: 1 / 2,
                  height: 300,
                  margin: 5,
                  borderWidth: 3,
                  borderColor: "black",
                  borderRadius: 5,
                  backgroundColor: "green",
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
                {/* <Text>{item.title}</Text> */}
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={{ height: 10 }}></View>
        <View style={{ margin: 10 }}>
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 25 }}>
            Muvi Originals Action
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={muviTwo}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  width: 100,
                  aspectRatio: 1 / 2,
                  height: 300,
                  margin: 5,
                  borderWidth: 3,
                  borderColor: "black",
                  borderRadius: 5,
                  backgroundColor: "green",
                }}
                onPress={() => {
                  navigation.navigate("Action", item);
                }}
              >
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                  }}
                  style={{ width: "100%", height: "100%", resizeMode: "cover" }}
                />
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={{ margin: 10 }}>
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 25 }}>
            Muvi Originals Action
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={muviThree}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  width: 100,
                  aspectRatio: 1 / 2,
                  height: 300,
                  margin: 5,
                  borderWidth: 3,
                  borderColor: "black",
                  borderRadius: 5,
                  backgroundColor: "green",
                }}
                onPress={()=>navigation.navigate('Action', item)}
              >
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                  }}
                  style={{ width: "100%", height: "100%", resizeMode: "cover" }}
                />
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={{ height: 65 }}></View>
      </ScrollView>
      <StatusBar color="white" />
    </View>
  );
};

export default Action;
