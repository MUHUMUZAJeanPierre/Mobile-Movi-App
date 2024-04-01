import React, { useState, useContext } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import axios from "axios";
import { ThemeProvider, ThemeContext } from "./Themecontexts.js";

const PopularToday = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const { dark, changeIntoDarkMode, signIn } = useContext(ThemeContext);
  const handleFetch = () => {
    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/1096197/recommendations?language=en-US&page=1",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2YzMzAwNzY1ODA3NmI3OGI2YWQyMDVjYzY5NjFkZCIsInN1YiI6IjY1ZGIyODQ3YTI0YzUwMDE4NjEwNzAwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VmlhIh2VaNYpA7JudKvu30GVqGhDS2hj9TIWyM5wWrg",
      },
    })
      .then((response) => {
        console.log(response);
        setNowPlaying(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <View>
      <View style={{ backgroundColor: dark ? "white" : "black", }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 8,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: dark ? "white" : "black",
            }}
          >
            Popular Movie
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: dark ? "black" : "#4A4C50",
              paddingTop: 5,
            }}
          >
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
                  width: 200,
                  height: 260,
                  aspectRatio: 2 / 1,
                  margin: 5,
                  // borderWidth: 3,
                  borderRadius: 5,
                }}
                onPress={() => navigation.navigate("Action", item)}
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
    </View>
  );
};

// const styles = StyleSheet.create({})

export default PopularToday;
