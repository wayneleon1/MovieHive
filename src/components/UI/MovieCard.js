import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { COLORS } from "../constraint";

const MovieCard = ({ isVerticaly, rate, image }) => {
  return (
    <TouchableOpacity
      style={isVerticaly === true ? styles.movieCardVerticla : styles.movieCard}
    >
      <Image
        source={require("../../../assets/images/justice.jpeg")}
        style={styles.movieImage}
      />
      <View style={styles.movieRate}>
        <Text style={styles.textRate}>8.8</Text>
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
    height: 200,
    borderRadius: 5,
    overflow: "hidden",
    position: "relative",
    marginTop: 15,
  },
  movieImage: {
    width: "100%",
    height: "100%",
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
