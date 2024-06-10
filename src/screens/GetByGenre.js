import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import Container from "../components/UI/Container";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../components/constraint";
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../styles/global";
import useFetch from "../components/usefetch";

const GetByGenre = ({ route }) => {
  const navigation = useNavigation();
  const routes = route.params;
  const genreID = routes.id;

  // Get Movies By Genre
  const {
    data: nowPlayingData,
    isPending: nowPlayingPending,
    error: nowPlayingError,
  } = useFetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc&with_genres=${genreID}'`
  );

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: COLORS.VERYDARK,
          alignItems: "center",
          padding: 20,
          flexDirection: "row",
          gap: 20,
        }}
      >
        <AntDesign
          name="arrowleft"
          size={24}
          color={COLORS.PRIMARY}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.screeeTitle}>{routes.name}</Text>
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
});
export default GetByGenre;
