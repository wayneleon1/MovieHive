import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import { COLORS } from "../components/constraint";
import { globalStyles } from "../styles/global";
import { LinearGradient } from "expo-linear-gradient";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../../Auth/Firebase";
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";

const SignIn = ({ navigation }) => {
  const [toggle, setToggle] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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

    return valid;
  };

  const handleLogin = async () => {
    if (validForm() === true) {
      try {
        const response = await signInWithEmailAndPassword(
          FIREBASE_AUTH,
          email,
          password
        );

        showMessage({
          message: "Sign in successfully",
          type: "success",
          style: {
            alignItems: "center",
          },
        });
        setTimeout(() => {
          navigation.navigate("ButtonRoutes");
        }, 3000);
      } catch (error) {
        console.log(error);
        showMessage({
          message: "Invalid crediantial",
          type: "danger",
          style: {
            alignItems: "center",
          },
        });
      }
    }
  };
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/images/feature2.jpeg")}
    >
      <LinearGradient
        colors={["transparent", COLORS.DARK]}
        style={styles.background}
        locations={[0, 0.5]}
      />
      <View
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingTop: "8%",
          paddingBottom: 20,
          paddingHorizontal: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <View style={styles.logoConatiner}>
              <Image
                source={require("../../assets/images/Logo.png")}
                style={styles.logo}
              />
            </View>
            <Text style={globalStyles.subTitleText}>Hive</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={{ fontSize: 18, fontWeight: "500", color: "gold" }}>
              REGISTER
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={globalStyles.titleText}>Login</Text>
          <View>
            <TextInput
              label="Email "
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
            <Text
              style={{
                textAlign: "right",
                color: COLORS.GRAY,
                marginVertical: 20,
              }}
            >
              Forget Password
            </Text>
            <Button
              mode="contained"
              buttonColor={COLORS.PRIMARY}
              textColor={COLORS.DARK}
              // onPress={() => {
              //   handleLogin();
              // }}
              onPress={() => navigation.navigate("ButtonRoutes")}
              style={globalStyles.btn}
            >
              Login
            </Button>
          </View>
          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
              marginVertical: 10,
            }}
          >
            <Text style={globalStyles.paragraph}>or continue with</Text>
          </View>
          <View style={{ marginTop: 10, flexDirection: "column", gap: 15 }}>
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
        </View>
      </View>
      <FlashMessage position="top" />
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
  logo: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  logoConatiner: {
    overflow: "hidden",
    width: 50,
    height: 30,
    borderRadius: 6,
  },
});

export default SignIn;
