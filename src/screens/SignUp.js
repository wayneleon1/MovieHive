import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  Alert,
} from "react-native";
import Container from "../components/UI/Container";
import { globalStyles } from "../styles/global";
import { COLORS } from "../components/constraint";
import { AntDesign } from "@expo/vector-icons";
import { TextInput, Button } from "react-native-paper";
import { FIREBASE_AUTH } from "../../Auth/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = ({ navigation }) => {
  const [toggle, setToggle] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comfrimPassword, setComfrimPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [comfrimPasswordError, setComfrimPasswordError] = useState("");

  // Basic email validation regex
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validForm = () => {
    let valid = true;

    if (!email.trim()) {
      setEmailError("Email is required");
      valid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Email provided is invalid ");
      valid = false;
    } else {
      setEmailError("");
    }
    if (!password.trim()) {
      setPasswordError("Password is invalid");
      valid = false;
    } else if (password.length < 8) {
      setPasswordError("Password must be over 8 chars long ");
      valid = false;
    } else {
      setPasswordError("");
    }
    if (!comfrimPassword.trim()) {
      setComfrimPasswordError("Comfrim Password can't be empty");
      valid = false;
    } else if (comfrimPassword !== password) {
      setComfrimPasswordError("Comfrim Password doesn't match with Password");
      valid = false;
    } else {
      setComfrimPasswordError("");
    }
    return valid;
  };

  const handleSignIn = async () => {
    if (validForm() === true) {
      try {
        const response = await createUserWithEmailAndPassword(
          FIREBASE_AUTH,
          email,
          password
        );
        Alert.alert(
          `Hello ${response.user.email}`,
          "Account created successfully! Welcome aboard.",
          [
            {
              text: "Continue",
              onPress: () => navigation.navigate("SignIn"),
            },
          ]
        );
      } catch (error) {
        Alert.alert("OOPS!", "Something went wrong!", [
          { text: "OK", onPress: () => console.log("alert closed") },
        ]);
      }
    }
  };

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
              value={email}
              error={!!emailError}
              onChangeText={(e) => setEmail(e)}
            />
            {emailError ? (
              <Text style={{ color: "crimson" }}>{emailError}</Text>
            ) : null}
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
              value={password}
              onChangeText={(p) => setPassword(p)}
              error={!!passwordError}
            />
            {passwordError ? (
              <Text style={{ color: "crimson" }}>{passwordError}</Text>
            ) : null}
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
              value={comfrimPassword}
              onChangeText={(e) => setComfrimPassword(e)}
              error={!!comfrimPasswordError}
            />
            {comfrimPasswordError ? (
              <Text style={{ color: "crimson" }}>{comfrimPasswordError}</Text>
            ) : null}
            <Button
              mode="contained"
              buttonColor={COLORS.PRIMARY}
              textColor={COLORS.DARK}
              onPress={() => handleSignIn()}
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
