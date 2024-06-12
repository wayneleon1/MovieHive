import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { COLORS } from "../components/constraint";
import { globalStyles } from "../styles/global";
import { Feather } from "@expo/vector-icons";
import { Button } from "react-native-paper";

const More = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: COLORS.VERYDARK,
          padding: 16,
        }}
      >
        <Text style={globalStyles.subTitleText}>More</Text>
      </View>
      {/* content container */}
      <View style={{ flex: 1, backgroundColor: COLORS.DARK }}>
        {/* Profile Details */}
        <View style={styles.profileWrapper}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/Avatar.jpeg")}
              style={styles.image}
            />
          </View>
          <Text style={globalStyles.subTitleText}>Johnathan Doe</Text>
          <Text style={globalStyles.paragraph}>doe.johnathan@gmail.com</Text>
          <Text
            style={{
              color: COLORS.PRIMARY,
            }}
          >
            Edite Profile
          </Text>
        </View>
        <View style={styles.contentWrapper}>
          <View
            style={{
              flexDirection: "column",
              gap: 30,
            }}
          >
            {data.map((item, index) => {
              return (
                <View key={index} style={styles.itemWrapper}>
                  <Feather name={item.icon} size={30} color="white" />
                  <Text style={styles.text}>{item.title}</Text>
                </View>
              );
            })}
          </View>
          <View style={{ marginTop: 50 }}>
            <Text style={[globalStyles.paragraph, { marginBottom: 20 }]}>
              Terms & Condition
            </Text>
            <Text style={globalStyles.paragraph}>Privacy & Policy </Text>
          </View>
          <View>
            <Button
              mode="outlined"
              textColor="#BD6F60"
              style={{ borderRadius: 6 }}
            >
              Log Out
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

const data = [
  {
    title: "Inbox",
    icon: "inbox",
  },
  {
    title: "Account Setting",
    icon: "user",
  },
  {
    title: "Language",
    icon: "globe",
  },
  {
    title: "Help, FAQ",
    icon: "help-circle",
  },
];

const styles = StyleSheet.create({
  profileWrapper: {
    paddingVertical: 50,
    alignItems: "center",
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: "#2A2D30",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 20,
    justifyContent: "space-between",
  },
  imageContainer: {
    overflow: "hidden",
    borderRadius: 40,
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  image: { width: "100%", height: "100%", resizeMode: "cover" },
  itemWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },
});

export default More;
