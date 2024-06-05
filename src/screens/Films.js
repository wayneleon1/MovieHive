import { FlatList, Text, ActivityIndicator } from "react-native";
import React from "react";
import Container from "../components/UI/Container";
import useFetch from "../components/usefetch";
import MovieCard from "../components/UI/MovieCard";
import { globalStyles } from "../styles/global";
import { COLORS } from "../components/constraint";

const Films = () => {
  // Top Films
  const {
    data: seriesData,
    isPending: seriesPending,
    error: seriesError,
  } = useFetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
  );
  return (
    <Container>
      {seriesError && <Text style={globalStyles.error}>{seriesError}</Text>}
      {seriesPending && (
        <ActivityIndicator size="large" color={COLORS.PRIMARY} />
      )}
      {seriesData && (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={seriesData}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "center", gap: 15 }}
          renderItem={({ item }) => (
            <MovieCard
              image={item.poster_path}
              isVerticaly={true}
              rate={item.vote_average}
            />
          )}
        />
      )}
    </Container>
  );
};

export default Films;
