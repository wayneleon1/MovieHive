import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Container from "../components/UI/Container";
import { globalStyles } from "../styles/global";
import { COLORS } from "../components/constraint";

const Featured = () => {
  return (
    <Container>
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
          <ScrollView horizontal>
            <TouchableOpacity style={styles.movieCard}>
              <Image
                source={require("../../assets/images/justice.jpeg")}
                style={styles.movieImage}
              />
              <View style={styles.movieRate}>
                <Text style={styles.textRate}>8.8</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Popular Movies */}
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={globalStyles.subTitleText}>Popular Movies</Text>
            <Text style={globalStyles.paragraph}>View More</Text>
          </View>
          <ScrollView horizontal>
            <TouchableOpacity style={styles.movieCardVerticla}>
              <Image
                source={require("../../assets/images/justice.jpeg")}
                style={styles.movieImage}
              />
              <View style={styles.movieRate}>
                <Text style={styles.textRate}>8.8</Text>
              </View>
            </TouchableOpacity>
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
          <ScrollView horizontal>
            <TouchableOpacity style={styles.movieCard}>
              <Image
                source={require("../../assets/images/justice.jpeg")}
                style={styles.movieImage}
              />
              <View style={styles.movieRate}>
                <Text style={styles.textRate}>8.8</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
        {/* Made for you */}
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={globalStyles.subTitleText}>Made for you</Text>
            <Text style={globalStyles.paragraph}>View More</Text>
          </View>
          <ScrollView horizontal>
            <TouchableOpacity style={styles.movieCard}>
              <Image
                source={require("../../assets/images/justice.jpeg")}
                style={styles.movieImage}
              />
              <View style={styles.movieRate}>
                <Text style={styles.textRate}>8.8</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ScrollView>
    </Container>
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
  scrollViewContent: {
    gap: 30,
  },
});

export default Featured;
