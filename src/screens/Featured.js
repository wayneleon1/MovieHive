import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import Container from "../components/UI/Container";
import { globalStyles } from "../styles/global";
import MovieCard from "../components/UI/MovieCard";
import useFetch from "../components/usefetch";
import { COLORS } from "../components/constraint";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const Featured = () => {
  const navigation = useNavigation();

  // Handling fetch genres
  const [genres, setGenres] = useState([]);
  const handleFetch = async () => {
    await axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/genre/movie/list?language=en",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmRkNWVkYmExZmY1ZTRhMDAxODNjMWQ5NjFkNjQ2NCIsInN1YiI6IjY2NTc1ODcwNjQ1M2ViYjliNTBjOGE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yqucD4WyPgMRTzaBAddltKw_MDy_20HcGUf0j4Tbtt8",
      },
    })
      .then((response) => {
        const data = response.data.genres;
        setGenres(data);
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  useEffect(() => {
    handleFetch();
  }, []);

  // New Release
  const {
    data: nowPlayingData,
    isPending: nowPlayingPending,
    error: nowPlayingError,
  } = useFetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
  );

  //  TV Series
  const {
    data: seriesData,
    isPending: seriesPending,
    error: seriesError,
  } = useFetch(
    "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1"
  );

  // Trends on Movies Hive
  const {
    data: trendingData,
    isPending: trendingPending,
    error: trendingError,
  } = useFetch(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
  );

  // Upcoming on Movies Hive
  const {
    data: upComingData,
    isPending: upComingPending,
    error: upComingError,
  } = useFetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
  );
  return (
    <Container paddingBottom={10} paddingTop={10}>
      <View
        style={{
          marginBottom: 10,
        }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {genres &&
            genres.map((genre) => {
              return (
                <TouchableOpacity
                  key={genre.id}
                  style={styles.tagContainer}
                  onPress={() => {
                    navigation.navigate("GetByGenre", genre);
                  }}
                >
                  <Text style={styles.tagText}>{genre.name}</Text>
                </TouchableOpacity>
              );
            })}
        </ScrollView>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {/* New Release */}
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={globalStyles.subTitleText}>New Release</Text>
            <Text style={globalStyles.paragraph}>View More</Text>
          </View>
          <ScrollView
            horizontal
            contentContainerStyle={styles.scrollHorizontalViewContent}
          >
            {nowPlayingError && (
              <Text style={globalStyles.error}>{nowPlayingError}</Text>
            )}
            {nowPlayingPending && (
              <ActivityIndicator size="large" color={COLORS.PRIMARY} />
            )}
            {nowPlayingData &&
              nowPlayingData.slice(0, 20).map((item) => {
                return (
                  <MovieCard
                    onPress={() => {
                      navigation.navigate("Slug", item);
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

        {/* Tv Series  */}
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={globalStyles.subTitleText}>TV Series</Text>
            <Text style={globalStyles.paragraph}>View More</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollHorizontalViewContent}
          >
            {seriesError && (
              <Text style={globalStyles.error}>{seriesError}</Text>
            )}
            {seriesPending && (
              <ActivityIndicator size="large" color={COLORS.PRIMARY} />
            )}
            {seriesData &&
              seriesData.slice(0, 20).map((item) => {
                return (
                  <MovieCard
                    onPress={() => {
                      navigation.navigate("Slug", item);
                    }}
                    key={item.id}
                    title={item.original_name}
                    shortDesc={item.overview}
                    image={item.backdrop_path}
                    rate={item.vote_average}
                  />
                );
              })}
          </ScrollView>
        </View>

        {/* Trends on MovieHive */}
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={globalStyles.subTitleText}>Trends on Movies Hive</Text>
            <Text style={globalStyles.paragraph}>View More</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollHorizontalViewContent}
          >
            {trendingError && (
              <Text style={globalStyles.error}>{trendingError}</Text>
            )}
            {trendingPending && (
              <ActivityIndicator size="large" color={COLORS.PRIMARY} />
            )}
            {trendingData &&
              trendingData.map((item) => {
                return (
                  <MovieCard
                    onPress={() => {
                      navigation.navigate("Slug", item);
                    }}
                    isVerticaly={true}
                    key={item.id}
                    title={item.title}
                    shortDesc={item.overview}
                    image={item.backdrop_path}
                    rate={item.vote_average}
                  />
                );
              })}
          </ScrollView>
        </View>

        {/* Upcoming */}
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={globalStyles.subTitleText}>Upcoming Movies</Text>
            <Text style={globalStyles.paragraph}>View More</Text>
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={styles.scrollHorizontalViewContent}
          >
            {upComingError && (
              <Text style={globalStyles.error}>{upComingError}</Text>
            )}
            {upComingPending && (
              <ActivityIndicator size="large" color={COLORS.PRIMARY} />
            )}
            {upComingData &&
              upComingData.slice(0, 20).map((item) => {
                return (
                  <MovieCard
                    onPress={() => {
                      navigation.navigate("Slug", item);
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
    </Container>
  );
};

const styles = StyleSheet.create({
  tagContainer: {
    borderWidth: 1,
    borderColor: COLORS.GRAY,
    borderRadius: 5,
    padding: 10,
    marginRight: 20,
  },
  tagText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    opacity: 0.7,
  },
  scrollHorizontalViewContent: {
    gap: 15,
  },
  scrollViewContent: {
    gap: 20,
  },
});

export default Featured;
