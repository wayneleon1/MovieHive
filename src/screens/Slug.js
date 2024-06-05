import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Container from "../components/UI/Container";
import { COLORS } from "../components/constraint";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Slug = ({ route }) => {
  const routes = route.params;
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: COLORS.VERYDARK,
          height: "50%",
          width: "100%",
        }}
      >
        <View style={{ paddingHorizontal: 16, paddingVertical: 20 }}>
          <AntDesign
            name="arrowleft"
            size={24}
            color="white"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/justice.jpeg")}
            style={styles.image}
          />
          <TouchableOpacity style={styles.playBtn}>
            <FontAwesome6 name="circle-play" size={42} color={COLORS.PRIMARY} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            padding: 16,
            flexDirection: "column",
            gap: 15,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.movieTitle}>Mulan</Text>
            <Fontisto name="favorite" size={20} color={COLORS.GRAY} />
          </View>
          <View>
            <Text style={styles.movieDesc}>
              <Text>2020 </Text>
              <Text>|</Text>
              <Text>12+</Text>
              <Text>|</Text>
              <Text>Action, Drama,Family</Text>
            </Text>
          </View>
          <View style={styles.flexView}>
            <Fontisto name="star" size={24} color={COLORS.PRIMARY} />
            <Text style={styles.movieTitle}>8.8</Text>
          </View>
          <View style={styles.flexView}>
            <Feather name="share" size={24} color={COLORS.GRAY} />
            <Text style={styles.movieDesc}>Share Movie</Text>
          </View>
        </View>
      </View>
      <Container>
        <Text>Slug Page{routes.id}</Text>
      </Container>
    </View>
  );
};
const styles = StyleSheet.create({
  imageContainer: { flex: 1, position: "relative", backgroundColor: "red" },
  image: { width: "100%", height: "100%", resizeMode: "cover" },
  playBtn: {
    position: "absolute",
    alignSelf: "center",
    top: "50%",
  },
  movieTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  movieDesc: {
    fontSize: 18,
    lineHeight: 21.6,
    color: COLORS.GRAY,
    overflow: "hidden",
    numberOfLines: 1,
  },
  flexView: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
});
export default Slug;
