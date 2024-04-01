import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  StatusBar,
  Dimensions,
} from "react-native";
import { TextInput } from "react-native-paper";
// const imagess = require("../assets/search.png");
import axios from "axios";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;
const Search = ({navigation}) => {
  const [search, setSearch] = useState([]);
  const [searchdata, setSearchdata] = useState("");
  const [selectedData, setSelectedItem] = useState(null);
  const [isSearchStarted, setIsSearchStarted] = useState(false);
  const handleItemPress = (item) => {
    setSelectedItem(item.id);
  };

  //fetch
  const [info, setInfo] = useState([]);
  const url = `https://api.themoviedb.org/3/search/movie?query=${searchdata}&include_adult=false&language=en-US&page=1`;
  // const options = {
  //   method: "GET",
  //   headers: {
  //     accept: "application/json",
  //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2YzMzAwNzY1ODA3NmI3OGI2YWQyMDVjYzY5NjFkZCIsInN1YiI6IjY1ZGIyODQ3YTI0YzUwMDE4NjEwNzAwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VmlhIh2VaNYpA7JudKvu30GVqGhDS2hj9TIWyM5wWrg'
  //   },
  // };

  // fetch(url, options)
  //   .then(response => response.json())
  //   .then(response => setInfo(response.results))
  //   .catch(error => console.error("error:" + error));

  const handleFetch = () => {
    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2YzMzAwNzY1ODA3NmI3OGI2YWQyMDVjYzY5NjFkZCIsInN1YiI6IjY1ZGIyODQ3YTI0YzUwMDE4NjEwNzAwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VmlhIh2VaNYpA7JudKvu30GVqGhDS2hj9TIWyM5wWrg";
    axios({
      method: "GET",
      url: url,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token} `,
      },
    })
      .then((response) => {
        console.log(response.data.results);
        setInfo(response.data.results);
        setSearch(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (searchdata.length > 0) {
      handleFetch();
    } else {
      setSearch([]);
    }
  }, [searchdata]);

  const data = [
    {
      id: 1,
      name: "All result",
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
      name: "latest",
    },
    {
      id: 6,
      name: "trending",
    },
    {
      id: 7,
      name: "trending",
    },
    {
      id: 8,
      name: "trending",
    },
    {
      id: 9,
      name: "trending",
    },
  ];

  return (
    //#1F2123
    <View>
      <View
        style={{
          backgroundColor: "#1F2123",
          width: "100%",
          height: 120,
          paddingTop: 30,
        }}
      >
        <TextInput
          theme={{colors:{primary:'#FFD130'}}}
          textColor="white"
          style={styles.Input}
          placeholder="Search ..."
          left={<TextInput.Icon name="account" />}
          right={<TextInput.Icon icon="magnify" color="#FFD130" size={30} />}
          onChangeText={(e)=>{setSearchdata(e)}}
        />
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                  style={{
                  borderBottom:
                    selectedData === item.id ? "red" : "transparent",
                }}
                onPress={() => handleItemPress(item)}
              >
                <Text
                  style={{
                    margin: 10,
                    color: selectedData === item.id ? "#FFD130" : "#67696A",
                  }}
                >
                  {item.name}
                </Text>
                {/* <Text style={{fontWeight:'bold', fontSize: 30, margin:10}}>Popular Search</Text> */}
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
      <View style={{ backgroundColor: "#26282C", padding: 18 }}>
        <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
          Popular Search
        </Text>
      </View>

      <ScrollView>
        {/* <View
          style={{
            backgroundColor: "#26282C",
            alignItems: "center",
            height: height,
            paddingTop: 100,
          }}
        >
          <Image source={imagess} style={{ width: 200, height: 200 }} />
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            Find your Movie
          </Text>
          <Text style={{ color: "white", fontSize: 15 }}>
            Search Movie,Series, Originals, as you like
          </Text>
        </View> */}
        <View
          style={{
            backgroundColor: "#26282C",
            justifyContent: "center",
            alignItems: "center",
            height: height,
            // backgroundColor: "red",
          }}
        >
          <FlatList
            keyExtractor={(item) => item.id}
            data={info}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  // backgroundColor: "red",
                  flexDirection: "row",
                  margin: 18,
                  gap: 10,
                }}
                onPress={()=>navigation.navigate('Action', item)}
              >
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                  }}
                  style={{ width: 230, height: 150 }}
                />

                <View
                  style={{
                    // backgroundColor: "blue",
                    flexDirection: "colum",
                    justifyContent: "flex-start",
                    width: 150,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 17 }}>
                    {item.original_title}
                  </Text>
                  <Text style={{ color: "#7F8183" }}>{item.release_date}</Text>
                  <Text style={{ color: "#747579", fontSize:12}}>{item.title}</Text>
                  <Text style={{color:'white'}}>item.vote_average</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
      <StatusBar color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  Input: {
    backgroundColor:'#1F2123'
  },
});

export default Search;
