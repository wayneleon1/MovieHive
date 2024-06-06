import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { COLORS } from "../components/constraint";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import MovieCard from "../components/UI/MovieCard";
import useFetch from "../components/usefetch";
import axios from "axios";

const Slug = ({ route }) => {
  const navigation = useNavigation();
  const routes = route.params;
  let movieID = routes.id;
  // console.log(movieID);

  // Handling get single movie by ID
  const [movie, SetMovie] = useState([]);
  const handleFetch = async () => {
    await axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${movieID}?language=en-US`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmRkNWVkYmExZmY1ZTRhMDAxODNjMWQ5NjFkNjQ2NCIsInN1YiI6IjY2NTc1ODcwNjQ1M2ViYjliNTBjOGE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yqucD4WyPgMRTzaBAddltKw_MDy_20HcGUf0j4Tbtt8",
      },
    })
      .then((response) => {
        const data = response.data;
        // console.log(data);
        SetMovie(data);
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  useEffect(() => {
    handleFetch();
  }, []);

  // Related Movies
  const {
    data: relatedData,
    isPending: relatedPending,
    error: relatedError,
  } = useFetch(
    `https://api.themoviedb.org/3/movie/${movieID}/similar?language=en-US&page=1`
  );

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.VERYDARK }}>
      <View
        style={{
          height: "50%",
          width: "100%",
        }}
      >
        <View style={{ paddingHorizontal: 16, paddingVertical: 20 }}>
          <AntDesign
            name="arrowleft"
            size={24}
            color="white"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            // source={require("../../assets/images/justice.jpeg")}
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            }}
            style={styles.image}
          />
          <TouchableOpacity style={styles.playBtn}>
            <FontAwesome6 name="circle-play" size={42} color={COLORS.PRIMARY} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            padding: 16,
            flexDirection: "column",
            gap: 15,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.movieTitle}>{movie.title}</Text>
            <Fontisto name="favorite" size={20} color={COLORS.GRAY} />
          </View>
          <View>
            <Text style={styles.movieDesc}>
              <Text>{movie.release_date} </Text>
              <Text>| </Text>
              <Text>12+ </Text>
              <Text>| </Text>
              <Text>Action, Drama, Family</Text>
            </Text>
          </View>
          <View style={styles.flexView}>
            <Fontisto name="star" size={24} color={COLORS.PRIMARY} />
            <Text style={styles.movieTitle}>{movie.vote_average}</Text>
          </View>
          <TouchableOpacity style={styles.flexView}>
            <Feather name="share" size={24} color={COLORS.GRAY} />
            <Text style={styles.movieDesc}>Share Movie</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollHorizontalViewContent}
      >
        <View>
          <Text style={styles.movieTitle}>Storyline</Text>
          <Text style={styles.paragraph}>{movie.overview}</Text>
        </View>

        <View>
          <Text style={styles.movieTitle}>Status</Text>
          <Text style={styles.paragraph}>{movie.status}</Text>
        </View>

        <View>
          <Text style={styles.movieTitle}>Related Movies</Text>
          <ScrollView
            horizontal
            contentContainerStyle={styles.scrollHorizontalViewContent}
          >
            {relatedError && (
              <Text style={globalStyles.error}>{relatedError}</Text>
            )}
            {relatedPending && (
              <ActivityIndicator size="large" color={COLORS.PRIMARY} />
            )}
            {relatedData &&
              relatedData.slice(0, 20).map((item) => {
                return (
                  <MovieCard
                    onPress={() => {
                      movieID = item.id;
                      handleFetch();
                    }}
                    isVerticaly={true}
                    key={item.id}
                    image={item.poster_path}
                    rate={item.vote_average}
                  />
                );
              })}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  imageContainer: { flex: 1, position: "relative" },
  image: { width: "100%", height: "100%", resizeMode: "cover" },
  playBtn: {
    position: "absolute",
    alignSelf: "center",
    top: "50%",
  },
  movieTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  movieDesc: {
    fontSize: 18,
    lineHeight: 21.6,
    color: COLORS.GRAY,
  },
  flexView: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
  content: {
    flex: 1,
    gap: 10,
    backgroundColor: COLORS.DARK,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 21.6,
    color: COLORS.GRAY,
    marginTop: 5,
  },
  scrollHorizontalViewContent: {
    gap: 15,
  },
});
export default Slug;
