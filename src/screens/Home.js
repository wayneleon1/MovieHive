import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { COLORS } from "../components/constraint";
import { globalStyles } from "../styles/global";
import { Fontisto } from "@expo/vector-icons";
import HomeRoutes from "../routes/HomeRoutes";
import { useNavigation } from "@react-navigation/native";

const Categories = ["Featured", "Series", "Films", "Original"];
const Tags = ["Popular Today", "Marvel", "Star War", "Fans Choise"];

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(Categories[0]);

  const handlePress = (category) => {
    setSelectedCategory(category);
  };
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.VERYDARK} />
      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 20,
          }}
        >
          {/* Logo Container */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              justifyContent: "flex-start",
            }}
          >
            <View style={styles.logoConatiner}>
              <Image
                source={require("../../assets/images/Logo.png")}
                style={styles.logo}
              />
            </View>
            <Text style={globalStyles.titleText}>Hive</Text>
          </View>
          {/* Notification icons */}
          <View style={{ flexDirection: "row", gap: 30 }}>
            <Fontisto name="favorite" size={20} color={COLORS.GRAY} />
            <Fontisto name="bell-alt" size={20} color={COLORS.GRAY} />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Categories.map((item, index) => {
              const isSelected = item === selectedCategory;
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    handlePress(item);
                    {
                      console.log(item);
                      navigation.navigate(item);
                    }
                  }}
                >
                  <View
                    style={[styles.Menu, isSelected && styles.selectedMenu]}
                  >
                    <Text
                      style={[
                        styles.menuText,
                        isSelected && styles.selectedMenuText,
                      ]}
                    >
                      {item}
                    </Text>
                    {isSelected}
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 16,
          paddingTop: 20,
          backgroundColor: COLORS.DARK,
        }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Tags.map((tag, index) => {
            return (
              <TouchableOpacity key={index} style={styles.tagContainer}>
                <Text style={styles.tagText}>{tag}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      {/* content container */}
      <View style={{ flex: 1 }}>
        <HomeRoutes />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "column",
    backgroundColor: COLORS.VERYDARK,
    height: 150,
    paddingHorizontal: 16,
    overflow: "hidden",
  },
  logo: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  logoConatiner: {
    overflow: "hidden",
    width: 60,
    height: 40,
    borderRadius: 6,
  },
  Menu: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: "center",
  },
  selectedMenu: {
    borderBottomWidth: 4,
    borderBottomColor: "gold",
  },
  menuText: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
  selectedMenuText: {
    color: "gold",
  },
  tagContainer: {
    borderWidth: 1,
    borderColor: COLORS.GRAY,
    borderRadius: 5,
    padding: 10,
    marginRight: 20,
  },
  tagText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    opacity: 0.7,
  },
});

export default Home;
