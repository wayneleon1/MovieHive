import { FlatList, Text, ActivityIndicator } from "react-native";
import React from "react";
import Container from "../components/UI/Container";
import useFetch from "../components/usefetch";
import MovieCard from "../components/UI/MovieCard";
import { globalStyles } from "../styles/global";
import { COLORS } from "../components/constraint";
import { useNavigation } from "@react-navigation/native";

const Films = () => {
  const navigation = useNavigation();

  // Top Films
  const {
    data: filmsData,
    isPending: filmsPending,
    error: filmsError,
  } = useFetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
  );
  return (
    <Container paddingTop={10}>
      {filmsError && <Text style={globalStyles.error}>{filmsError}</Text>}
      {filmsPending && (
        <ActivityIndicator size="large" color={COLORS.PRIMARY} />
      )}
      {filmsData && (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filmsData}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "center", gap: 15 }}
          renderItem={({ item }) => (
            <MovieCard
              onPress={() => {
                navigation.navigate("Slug", item);
              }}
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
