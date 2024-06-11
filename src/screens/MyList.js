import { View, Text } from "react-native";
import React from "react";
import { COLORS } from "../components/constraint";
import Container from "../components/UI/Container";
import { globalStyles } from "../styles/global";
import { Button } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
const MyList = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: COLORS.VERYDARK,
          padding: 16,
        }}
      >
        <Text style={globalStyles.subTitleText}>MyList</Text>
      </View>
      <Container paddingBottom={20}>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 60,
            }}
          >
            <View>
              <Entypo name="folder-video" size={100} color={COLORS.PRIMARY} />
            </View>
            <View>
              <Text
                style={[
                  globalStyles.subTitleText,
                  { textAlign: "center", marginBottom: 10 },
                ]}
              >
                Create my own List
              </Text>
              <Text style={[globalStyles.paragraph, { textAlign: "center" }]}>
                Let's do something, because i have nice suprise for you
              </Text>
            </View>
          </View>
          <View>
            <Button
              mode="contained"
              buttonColor={COLORS.PRIMARY}
              textColor={COLORS.DARK}
              onPress={() => {
                handleLogin();
              }}
              // onPress={() => navigation.navigate("ButtonRoutes")}
              style={{ borderRadius: 6 }}
            >
              Explore Movie
            </Button>
          </View>
        </View>
      </Container>
    </View>
  );
};

export default MyList;
