import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Container from "../components/UI/Container";
import { globalStyles } from "../styles/global";
import MovieCard from "../components/UI/MovieCard";

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
            <MovieCard />
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
            <MovieCard isVerticaly={true} />
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
          <MovieCard />
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
            <MovieCard />
          </ScrollView>
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    gap: 30,
  },
});

export default Featured;
