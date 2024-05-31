import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import Container from "../components/UI/Container";
import { globalStyles } from "../styles/global";
import { COLORS } from "../components/constraint";
import { AntDesign } from "@expo/vector-icons";
import { TextInput, Button } from "react-native-paper";

const SignUp = ({ navigation }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#26282C" />
      <View style={styles.container}>
        <View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <AntDesign name="arrowleft" size={24} color={COLORS.PRIMARY} />
            </TouchableOpacity>
            <Text style={globalStyles.subTitleText}>Register</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              justifyContent: "center",
              marginVertical: 40,
            }}
          >
            <View style={styles.logoConatiner}>
              <Image
                source={require("../../assets/images/Logo.png")}
                style={styles.logo}
              />
            </View>
            <Text style={globalStyles.subTitleText}>Hive</Text>
          </View>
          <View style={{ marginBottom: 30 }}>
            <Text
              style={{
                color: "white",
                opacity: 0.8,
                fontSize: 20,
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              SignUp to discover all our movies and enjoy our features.
            </Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View>
            <TextInput
              label="Email Address"
              textColor="white"
              outCompleteType="email"
              theme={{ colors: { primary: "#FFD130" } }}
              placeholderTextColor="white"
              right={<TextInput.Icon icon="email" color="#FDD130" />}
              style={{
                marginTop: 10,
                backgroundColor: "#26282C",
              }}
            />
            <TextInput
              label="Password"
              secureTextEntry={!toggle}
              textColor="white"
              theme={{ colors: { primary: "#FFD130" } }}
              right={
                <TextInput.Icon
                  icon={toggle ? "eye" : "eye-off"}
                  onPress={() => setToggle(!toggle)}
                  color="#FFD130"
                  size={20}
                />
              }
              placeholderTextColor="white"
              style={{ marginTop: 20, backgroundColor: "#26282C" }}
            />
            <TextInput
              label="Comfrim Password"
              secureTextEntry={!toggle}
              textColor="white"
              theme={{ colors: { primary: "#FFD130" } }}
              right={
                <TextInput.Icon
                  icon={toggle ? "eye" : "eye-off"}
                  onPress={() => setToggle(!toggle)}
                  color="#FFD130"
                  size={20}
                />
              }
              placeholderTextColor="white"
              style={{
                marginTop: 20,
                marginBottom: 30,
                backgroundColor: "#26282C",
              }}
            />
            <Button
              mode="contained"
              buttonColor={COLORS.PRIMARY}
              textColor={COLORS.DARK}
              onPress={() => navigation.navigate("SignIn")}
              style={globalStyles.btn}
            >
              Sign Up
            </Button>
            <Text
              style={{
                textAlign: "center",
                color: "white",
                opacity: 0.8,
                marginVertical: 10,
              }}
            >
              By signing up I accept terms of use and privacy policy
            </Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
              marginVertical: 10,
              marginVertical: 30,
            }}
          >
            <Text style={globalStyles.paragraph}>or simply sign up with</Text>
          </View>
          <View style={{ marginTop: 10, flexDirection: "column", gap: 20 }}>
            <Button
              mode="contained"
              buttonColor={COLORS.VERYDARK}
              textColor={COLORS.WHITE}
              style={globalStyles.btn}
              icon="apple"
            >
              Login With Apple
            </Button>
            <Button
              mode="contained"
              buttonColor={COLORS.WHITE}
              textColor={COLORS.VERYDARK}
              style={globalStyles.btn}
              icon="google"
            >
              Login With Google
            </Button>
          </View>
          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
              marginVertical: 30,
              gap: 15,
            }}
          >
            <Text style={globalStyles.paragraph}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SignIn");
              }}
            >
              <Text style={{ color: COLORS.PRIMARY, fontWeight: "600" }}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
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
});
export default SignUp;
