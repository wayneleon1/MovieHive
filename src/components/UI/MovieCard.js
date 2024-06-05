import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { COLORS } from "../constraint";
import { globalStyles } from "../../styles/global";

const MovieCard = ({ isVerticaly, rate, image, onPress, title, shortDesc }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ flexDirection: "column", gap: 10 }}
    >
      <View
        style={
          isVerticaly === true ? styles.movieCardVerticla : styles.movieCard
        }
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
      </View>
      {title || shortDesc ? (
        <View
          style={
            isVerticaly === true
              ? { width: 180, height: 100, overflow: "hidden" }
              : { width: 280, height: 80, overflow: "hidden" }
          }
        >
          <Text style={styles.movieTitle}>{title}</Text>
          <Text style={styles.movieDesc}>{shortDesc}</Text>
        </View>
      ) : (
        ""
      )}
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

export default MovieCard;
