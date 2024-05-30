import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button, PaperProvider } from "react-native-paper";

import "react-native-gesture-handler";

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text>Open start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
