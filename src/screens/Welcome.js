import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../components/constraint";
import { Button } from "react-native-paper";

const Welcome = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/images/joker.jpg")}
      imageStyle={styles.image}
    >
      <View style={styles.opacity}></View>
      <View
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingBottom: 20,
          paddingHorizontal: 16,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Text style={styles.Heading}>
            Enjoy your favourite movie evertwhere
          </Text>
          <Text
            style={{
              color: "white",
              lineHeight: 20,
              opacity: 0.8,
              fontSize: 16,
              marginTop: 25,
              fontWeight: "600",
            }}
          >
            Browse through our collections and discover hundreds of movies and
            series that you'll love!
          </Text>
        </View>
        <View>
          <Button
            mode="contained"
            buttonColor={COLORS.PRIMARY}
            textColor={COLORS.DARK}
            onPress={() => console.log("Pressed")}
            style={{ borderRadius: 6 }}
          >
            Get Started
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: "relative",
  },
  opacity: {
    flex: 1,
    backgroundColor: COLORS.DARK,
    opacity: 0.7,
  },
  image: {
    transform: [{ scale: 1 }],
    resizeMode: "cover",
  },
  Heading: {
    fontSize: 38,
    fontWeight: "bold",
    color: "white",
  },
});

export default Welcome;
