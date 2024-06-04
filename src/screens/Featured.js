import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Container from "../components/UI/Container";
import { globalStyles } from "../styles/global";
import MovieCard from "../components/UI/MovieCard";
import useFetch from "../components/usefetch";

const Featured = () => {
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
    data: popularData,
    isPending: popularPending,
    error: popularError,
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
    <Container paddingBottom={10}>
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
              <Text style={globalStyles.loading}>Loading...</Text>
            )}
            {nowPlayingData &&
              nowPlayingData.slice(0, 20).map((item) => {
                return (
                  <MovieCard
                    onPress={() => {
                      console.log(item);
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
            contentContainerStyle={styles.scrollHorizontalViewContent}
          >
            {popularError && (
              <Text style={globalStyles.error}>{popularError}</Text>
            )}
            {popularPending && (
              <Text style={globalStyles.loading}>Loading...</Text>
            )}
            {popularData &&
              popularData.slice(0, 20).map((item) => {
                return (
                  <MovieCard
                    onPress={() => {
                      console.log(item);
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
            contentContainerStyle={styles.scrollHorizontalViewContent}
          >
            {trendingError && (
              <Text style={globalStyles.error}>{trendingError}</Text>
            )}
            {trendingPending && (
              <Text style={globalStyles.loading}>Loading...</Text>
            )}
            {trendingData &&
              trendingData.map((item) => {
                return (
                  <MovieCard
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
            horizontal
            contentContainerStyle={styles.scrollHorizontalViewContent}
          >
            {upComingError && (
              <Text style={globalStyles.error}>{upComingError}</Text>
            )}
            {upComingPending && (
              <Text style={globalStyles.loading}>Loading...</Text>
            )}
            {upComingData &&
              upComingData.slice(0, 20).map((item) => {
                return (
                  <MovieCard
                    onPress={() => {
                      console.log(item);
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
  scrollHorizontalViewContent: {
    gap: 15,
  },
  scrollViewContent: {
    gap: 20,
  },
});

export default Featured;
