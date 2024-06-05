import { createStackNavigator } from "@react-navigation/stack";
import Slug from "../screens/Slug";
import Home from "../screens/Home";

const Stack = createStackNavigator();

export default function HomeRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Slug" component={Slug} />
    </Stack.Navigator>
  );
}
