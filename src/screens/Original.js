import { FlatList, Text, ActivityIndicator } from "react-native";
import React from "react";
import Container from "../components/UI/Container";
import useFetch from "../components/usefetch";
import MovieCard from "../components/UI/MovieCard";
import { globalStyles } from "../styles/global";
import { COLORS } from "../components/constraint";
import { useNavigation } from "@react-navigation/native";

const Original = () => {
  const navigation = useNavigation();

  // Originals
  const {
    data: originalData,
    isPending: originalPending,
    error: originalError,
  } = useFetch(
    "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1"
  );
  return (
    <Container paddingTop={10}>
      {originalError && <Text style={globalStyles.error}>{originalError}</Text>}
      {originalPending && (
        <ActivityIndicator size="large" color={COLORS.PRIMARY} />
      )}
      {originalData && (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={originalData}
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

export default Original;
