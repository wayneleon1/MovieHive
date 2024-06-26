import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Container from "../components/UI/Container";
import { COLORS } from "../components/constraint";
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../styles/global";
import useFetch from "../components/usefetch";
import { Feather } from "@expo/vector-icons";

const Explore = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState();

  // Get Movies By Genre

  const {
    data: nowPlayingData,
    isPending: nowPlayingPending,
    error: nowPlayingError,
  } = useFetch(
    `https://api.themoviedb.org/3/search/multi?query=${search}&include_adult=false&language=en-US&page=1'`
  );
  const handleSubmit = () => {};
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: COLORS.VERYDARK,
          padding: 16,
        }}
      >
        <View style={styles.searchInput}>
          <TextInput
            style={{
              flex: 1,
              color: "white",
              fontSize: 18,
            }}
            placeholderTextColor={COLORS.GRAY}
            placeholder="Search any movie, serie or tv show"
            value={search}
            onChangeText={(value) => {
              setSearch(value);
            }}
          />
          <Feather
            name="search"
            size={24}
            color={COLORS.PRIMARY}
            onPress={() => {
              handleSubmit;
            }}
          />
        </View>
      </View>
      <Container paddingTop={10}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.scrollVerticalyViewContent}
        >
          {nowPlayingError && (
            <Text style={globalStyles.error}>{nowPlayingError}</Text>
          )}
          {nowPlayingPending && (
            <ActivityIndicator size="large" color={COLORS.PRIMARY} />
          )}
          {nowPlayingData &&
            nowPlayingData.map((item) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  style={{ flexDirection: "column", gap: 10 }}
                >
                  <View style={styles.movieCard}>
                    <Image
                      source={{
                        uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`,
                      }}
                      style={styles.movieImage}
                    />
                    <View style={styles.movieRate}>
                      <Text style={styles.textRate}>HD</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: 280,
                      height: 80,
                      overflow: "hidden",
                    }}
                  >
                    <Text style={styles.movieTitle}>{item.title}</Text>
                    <Text style={styles.movieDesc}>{item.overview}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
        </ScrollView>
      </Container>
    </View>
  );
};
const styles = StyleSheet.create({
  screeeTitle: {
    color: COLORS.WHITE,
    fontSize: 24,
    fontWeight: "700",
  },
  scrollVerticalyViewContent: {
    gap: 10,
  },
  movieCard: {
    width: "100%",
    height: 250,
    borderRadius: 5,
    overflow: "hidden",
    position: "relative",
    marginTop: 15,
  },
  movieImage: {
    width: "100%",
    height: "100%",
    verticalAlign: "middle",
    resizeMode: "cover",
  },
  movieRate: {
    backgroundColor: COLORS.PRIMARY,
    position: "absolute",
    top: 10,
    right: 10,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  textRate: {
    fontWeight: "700",
  },
  movieTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    opacity: 0.8,
    marginBottom: 5,
  },
  movieDesc: {
    fontSize: 16,
    lineHeight: 21.6,
    color: COLORS.GRAY,
    overflow: "hidden",
    numberOfLines: 1,
  },
  searchInput: {
    padding: 15,
    backgroundColor: COLORS.DARK,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default Explore;
