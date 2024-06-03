import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { COLORS } from "../constraint";

const MovieCard = ({ isVerticaly, rate, image, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={isVerticaly === true ? styles.movieCardVerticla : styles.movieCard}
    >
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${image}`,
        }}
        style={styles.movieImage}
      />
      <View style={styles.movieRate}>
        <Text style={styles.textRate}>{rate}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  movieCard: {
    width: 280,
    height: 150,
    borderRadius: 5,
    overflow: "hidden",
    position: "relative",
    marginTop: 15,
  },
  movieCardVerticla: {
    width: 180,
    height: 240,
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
});

export default MovieCard;
