import { PaperProvider } from "react-native-paper";
import "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./src/routes/StackRoutes";

export default function App() {
  return (
    <PaperProvider>
      <StatusBar barStyle="light-content" backgroundColor="#26282C" />
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </PaperProvider>
  );
}
