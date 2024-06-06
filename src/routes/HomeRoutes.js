import { createStackNavigator } from "@react-navigation/stack";
import Slug from "../screens/Slug";
import Home from "../screens/Home";
import GetByGenre from "../screens/GetByGenre";

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
      <Stack.Screen name="GetByGenre" component={GetByGenre} />
    </Stack.Navigator>
  );
}
