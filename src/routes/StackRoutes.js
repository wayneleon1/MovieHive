import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome";

const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Welcome"
    >
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  );
}
