import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../components/constraint";
import { globalStyles } from "../styles/global";
import { Button } from "react-native-paper";

const Welcome = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/images/joker2.jpeg")}
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
          <Text style={globalStyles.titleText}>
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
            onPress={() => navigation.navigate("SignIn")}
            style={globalStyles.btn}
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
});

export default Welcome;
